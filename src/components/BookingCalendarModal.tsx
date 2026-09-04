import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  Clock,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Sparkles,
  User,
  Mail,
  FileText,
  Loader2,
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const RECIPIENT_EMAIL = 'khairaco.eu@gmail.com';

const TIME_SLOTS = [
  '09:30 AM',
  '11:00 AM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM',
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const BookingCalendarModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();

  const today = useMemo(() => new Date(), []);
  const [currentMonth, setCurrentMonth] = useState(() => today.getMonth());
  const [currentYear, setCurrentYear] = useState(() => today.getFullYear());

  // Default selected date: tomorrow or next Monday if weekend
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });

  const [selectedTime, setSelectedTime] = useState<string>('01:30 PM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [lastGoogleCalendarUrl, setLastGoogleCalendarUrl] = useState('');

  const userTimeZone = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    } catch {
      return 'UTC';
    }
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBookingOpen) {
        closeBooking();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBookingOpen, closeBooking]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookingOpen]);

  // Calendar math
  const daysInMonth = useMemo(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  }, [currentYear, currentMonth]);

  const firstDayIndex = useMemo(() => {
    // 0 is Sunday in JS, so convert to Monday = 0, Sunday = 6
    const day = new Date(currentYear, currentMonth, 1).getDay();
    return (day + 6) % 7;
  }, [currentYear, currentMonth]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day, 23, 59, 59);
    return checkDate < today;
  };

  const isSelectedDate = (day: number) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  const handleSelectDay = (day: number) => {
    if (isPastDate(day)) return;
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
  };

  // Build Google Calendar Event URL
  const generateGoogleCalendarUrl = (
    date: Date,
    timeString: string,
    clientName: string,
    clientEmail: string,
    projectNotes: string
  ) => {
    // Parse time
    const [time, modifier] = timeString.split(' ');
    const parts = time.split(':').map(Number);
    let hours = parts[0];
    const minutes = parts[1];
    if (modifier === 'PM' && hours < 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;

    const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes, 0);
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000); // 30 mins

    const formatGCalDate = (d: Date) => {
      return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const startIso = formatGCalDate(startDate);
    const endIso = formatGCalDate(endDate);

    const title = `Free Strategy Call: The Flying Whale Agency x ${clientName || 'Client'}`;
    const details = [
      `30-Minute Free Strategy Call with The Flying Whale Agency (Khaira.co).`,
      ``,
      `Attendee: ${clientName || 'Client'} (${clientEmail || 'Pending'})`,
      `Agency Organizer: ${RECIPIENT_EMAIL}`,
      `Timezone: ${userTimeZone}`,
      `Topic/Goals: ${projectNotes || 'Digital growth, Website, AI automation, or App development'}`,
      ``,
      `Meeting link: Google Meet will be automatically provided in the event.`
    ].join('\n');

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      dates: `${startIso}/${endIso}`,
      details: details,
      location: 'Google Meet',
      add: `${RECIPIENT_EMAIL}${clientEmail ? `,${clientEmail}` : ''}`,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    const gcalUrl = generateGoogleCalendarUrl(selectedDate, selectedTime, name, email, notes);
    setLastGoogleCalendarUrl(gcalUrl);

    // Also send an email notification with full booking details to agency
    try {
      await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `📅 New Calendar Booking: Strategy Call with ${name}`,
          Name: name,
          Email: email,
          'Selected Date': selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          'Selected Time': selectedTime,
          Timezone: userTimeZone,
          'Project Notes': notes || 'None provided',
          'Google Calendar Link': gcalUrl,
          _replyto: email,
        }),
      });
    } catch (err) {
      console.error('Failed sending booking notification email:', err);
    } finally {
      setIsSubmitting(false);
      setIsConfirmed(true);

      // Open Google Calendar in new tab
      try {
        window.open(gcalUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        console.error('Popup blocked:', err);
      }
    }
  };

  const handleOpenDirectGoogleCalendar = () => {
    const directUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'Free Strategy Call - The Flying Whale Agency'
    )}&details=${encodeURIComponent(
      `30-minute Strategy Call with The Flying Whale Agency (khairaco.eu@gmail.com).\nDiscuss your digital goals, websites, and AI systems.`
    )}&add=${encodeURIComponent(RECIPIENT_EMAIL)}&location=Google+Meet`;
    window.open(directUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setName('');
    setEmail('');
    setNotes('');
  };

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl bg-[#16162A] border border-white/10 rounded-2xl shadow-2xl shadow-purple-950/50 overflow-hidden z-10 my-auto text-white"
          >
            {/* Top decorative gradient bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#4285F4] via-[#6B46C1] to-[#9F7AEA]" />

            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4285F4]/15 border border-[#4285F4]/30 text-[#8ab4f8] text-xs font-medium mb-2.5">
                  <CalendarIcon size={14} className="text-[#8ab4f8]" />
                  <span>Google Calendar Scheduling</span>
                </div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  Book a Free Strategy Call
                  <Sparkles size={18} className="text-[#9F7AEA]" />
                </h2>
                <p className="text-sm text-[#B8B8D1] mt-1">
                  Pick a date & time for a 30-minute discovery call with our team.
                </p>
              </div>

              <button
                onClick={closeBooking}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#B8B8D1] hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {isConfirmed ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4285F4] to-[#6B46C1] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-purple-500/30">
                    <Check size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Google Calendar Ready!
                  </h3>
                  <p className="text-[#B8B8D1] text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    We've opened Google Calendar to confirm your 30-minute session for{' '}
                    <span className="text-white font-semibold">
                      {selectedDate.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}{' '}
                      at {selectedTime}
                    </span>
                    . We have also notified our team at{' '}
                    <span className="text-[#9F7AEA]">{RECIPIENT_EMAIL}</span>.
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs text-[#B8B8D1] space-y-2 mb-8">
                    <div className="flex justify-between">
                      <span className="text-white/60">Meeting:</span>
                      <span className="text-white font-medium">Strategy Discovery (Google Meet)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Attendee:</span>
                      <span className="text-white font-medium">{name} ({email})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Agency:</span>
                      <span className="text-white font-medium">{RECIPIENT_EMAIL}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {lastGoogleCalendarUrl && (
                      <a
                        href={lastGoogleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-[#4285F4] hover:bg-[#3b78e7] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                      >
                        <ExternalLink size={16} />
                        Re-open Google Calendar
                      </a>
                    )}
                    <button
                      onClick={closeBooking}
                      className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors"
                    >
                      Done
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-4 py-3 rounded-xl text-[#B8B8D1] hover:text-white text-xs transition-colors"
                    >
                      Book another slot
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Calendar Grid & Time Slots side by side */}
                  <div className="grid md:grid-cols-12 gap-6">
                    {/* Left: Interactive Calendar */}
                    <div className="md:col-span-7 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                      {/* Month Nav */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-sm text-white">
                          {MONTH_NAMES[currentMonth]} {currentYear}
                        </span>
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={handlePrevMonth}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#B8B8D1] hover:text-white transition-colors cursor-pointer"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={handleNextMonth}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#B8B8D1] hover:text-white transition-colors cursor-pointer"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Day of Week Labels */}
                      <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#B8B8D1] mb-2 font-medium">
                        {DAY_NAMES.map((d) => (
                          <div key={d} className="py-1">
                            {d}
                          </div>
                        ))}
                      </div>

                      {/* Days Grid */}
                      <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        {/* Empty padding cells */}
                        {Array.from({ length: firstDayIndex }).map((_, i) => (
                          <div key={`empty-${i}`} className="py-2" />
                        ))}

                        {/* Month Days */}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const past = isPastDate(day);
                          const selected = isSelectedDate(day);

                          return (
                            <button
                              key={day}
                              type="button"
                              disabled={past}
                              onClick={() => handleSelectDay(day)}
                              className={`py-2 rounded-lg font-medium transition-all cursor-pointer ${
                                selected
                                  ? 'bg-gradient-to-r from-[#4285F4] to-[#6B46C1] text-white shadow-md shadow-purple-500/30'
                                  : past
                                  ? 'text-white/20 cursor-not-allowed'
                                  : 'text-white/90 hover:bg-white/10'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#B8B8D1]/70">
                        <Globe size={12} />
                        <span>Times shown in {userTimeZone}</span>
                      </div>
                    </div>

                    {/* Right: Time Slot Selection */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B8D1] mb-2 flex items-center gap-1.5">
                          <Clock size={14} className="text-[#9F7AEA]" />
                          Available Times
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                          {TIME_SLOTS.map((slot) => {
                            const isSelected = selectedTime === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedTime(slot)}
                                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer text-center ${
                                  isSelected
                                    ? 'bg-[#6B46C1] border-[#9F7AEA] text-white shadow-sm'
                                    : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-4 p-3 rounded-xl bg-purple-900/20 border border-purple-500/20 text-xs text-[#B8B8D1]">
                        Selected:{' '}
                        <span className="text-white font-semibold">
                          {selectedDate.toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })}{' '}
                          @ {selectedTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Form Details */}
                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5 text-[#B8B8D1]">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B8B8D1]/70" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Alex Morgan"
                            disabled={isSubmitting}
                            className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-[#B8B8D1]/50 focus:outline-none focus:border-[#6B46C1] transition-colors disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium mb-1.5 text-[#B8B8D1]">
                          Your Email *
                        </label>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B8B8D1]/70" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="alex@company.com"
                            disabled={isSubmitting}
                            className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-[#B8B8D1]/50 focus:outline-none focus:border-[#6B46C1] transition-colors disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-[#B8B8D1]">
                        Project Focus / Notes (Optional)
                      </label>
                      <div className="relative">
                        <FileText size={15} className="absolute left-3.5 top-3 text-[#B8B8D1]/70" />
                        <input
                          type="text"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. Website rebuild, AI automation workflow, SEO growth..."
                          disabled={isSubmitting}
                          className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-[#B8B8D1]/50 focus:outline-none focus:border-[#6B46C1] transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <div className="space-y-3 pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={isSubmitting ? {} : { scale: 1.01 }}
                      whileTap={isSubmitting ? {} : { scale: 0.99 }}
                      className="w-full py-3.5 bg-gradient-to-r from-[#4285F4] via-[#6B46C1] to-[#9F7AEA] rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Preparing Google Calendar...</span>
                        </>
                      ) : (
                        <>
                          <CalendarIcon size={18} />
                          <span>Book & Open in Google Calendar</span>
                        </>
                      )}
                    </motion.button>

                    <div className="flex items-center justify-between text-xs text-[#B8B8D1]/70 px-1 pt-1">
                      <span>Instant sync with Google Calendar</span>
                      <button
                        type="button"
                        onClick={handleOpenDirectGoogleCalendar}
                        className="text-[#8ab4f8] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Open blank Google Calendar event
                        <ExternalLink size={12} />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
