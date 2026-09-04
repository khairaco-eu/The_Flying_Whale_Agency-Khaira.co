import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, ExternalLink, Monitor, Smartphone, Maximize2, MousePointer, ShieldCheck } from 'lucide-react';

interface ScrollingWebsitePreviewProps {
  title: string;
  url: string;
  category: string;
  previewImage: string;
  fullImage: string;
  allowIframe?: boolean;
  accentColor?: string;
  stats?: { label: string; value: string }[];
}

export const ScrollingWebsitePreview = ({
  title,
  url,
  category,
  previewImage,
  fullImage,
  allowIframe = false,
  accentColor = '#9F7AEA',
  stats,
}: ScrollingWebsitePreviewProps) => {
  const [mode, setMode] = useState<'scroll' | 'live'>(allowIframe ? 'scroll' : 'scroll');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Auto-scrolling loop using requestAnimationFrame
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || mode !== 'scroll') return;

    let direction = 1; // 1 = down, -1 = up
    let speed = 0.8; // px per frame

    const step = () => {
      if (container && isAutoScrolling && !isHovered) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (maxScroll > 0) {
          container.scrollTop += speed * direction;
          setScrollProgress(container.scrollTop / maxScroll);

          if (container.scrollTop >= maxScroll - 2) {
            direction = -1;
            speed = 2.0; // quicker scroll back up
          } else if (container.scrollTop <= 2) {
            direction = 1;
            speed = 0.8;
          }
        }
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoScrolling, isHovered, mode]);

  const handleManualScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollHeight - container.clientHeight;
    if (maxScroll > 0) {
      setScrollProgress(container.scrollTop / maxScroll);
    }
  };

  const handleReset = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="rounded-2xl border border-white/10 bg-[#16162A]/90 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20">
      {/* Browser Top Window Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#131322] border-b border-white/10">
        {/* Window controls and Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-sm" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#B8B8D1]/70 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
            <ShieldCheck size={12} className="text-emerald-400" />
            <span>SSL Secured</span>
          </div>
        </div>

        {/* Address URL Pill */}
        <div className="flex-1 max-w-md mx-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg bg-black/40 border border-white/10 hover:border-purple-500/40 text-xs text-[#B8B8D1] hover:text-white transition-all duration-200"
            title="Open in new window"
          >
            <span className="text-emerald-400 text-[10px]">●</span>
            <span className="truncate font-mono">{displayUrl}</span>
            <ExternalLink size={11} className="text-[#9F7AEA] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Mode Switcher (if iframe allowed) */}
          {allowIframe && (
            <div className="flex items-center bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setMode('scroll')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  mode === 'scroll'
                    ? 'bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] text-white font-medium shadow-sm'
                    : 'text-[#B8B8D1] hover:text-white'
                }`}
              >
                Scroll View
              </button>
              <button
                type="button"
                onClick={() => setMode('live')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  mode === 'live'
                    ? 'bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] text-white font-medium shadow-sm'
                    : 'text-[#B8B8D1] hover:text-white'
                }`}
              >
                Live Frame
              </button>
            </div>
          )}

          {/* Device Switcher */}
          <div className="hidden md:flex items-center bg-white/5 rounded-lg p-0.5 border border-white/10">
            <button
              type="button"
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded-md transition-colors ${
                device === 'desktop' ? 'bg-white/15 text-white' : 'text-[#B8B8D1] hover:text-white'
              }`}
              title="Desktop View"
            >
              <Monitor size={14} />
            </button>
            <button
              type="button"
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded-md transition-colors ${
                device === 'mobile' ? 'bg-white/15 text-white' : 'text-[#B8B8D1] hover:text-white'
              }`}
              title="Mobile Mockup"
            >
              <Smartphone size={14} />
            </button>
          </div>

          {/* External Link */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-[#B8B8D1] hover:text-white transition-colors"
            title="Open live site"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Main Viewport Area */}
      <div className="relative bg-[#0d0d17] flex justify-center items-center overflow-hidden">
        {mode === 'scroll' ? (
          <div
            className={`w-full transition-all duration-300 ${
              device === 'mobile' ? 'max-w-xs my-6 rounded-3xl border-4 border-neutral-700 shadow-2xl overflow-hidden' : 'w-full'
            }`}
          >
            {/* Scrollable Mockup Container */}
            <div
              ref={scrollContainerRef}
              onScroll={handleManualScroll}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full h-[460px] md:h-[540px] lg:h-[580px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600/60 scrollbar-track-black/40 cursor-grab active:cursor-grabbing select-none"
              style={{ scrollBehavior: 'auto' }}
            >
              <img
                src={fullImage || previewImage}
                alt={`${title} live scrolling preview`}
                className="w-full h-auto block select-none pointer-events-none"
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Interactive Control Overlay Bar */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="pointer-events-auto flex items-center gap-2 bg-[#1A1A2E]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full shadow-lg text-xs text-white">
                <button
                  type="button"
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className="flex items-center gap-1.5 hover:text-[#9F7AEA] transition-colors cursor-pointer"
                  title={isAutoScrolling ? 'Pause auto-scroll' : 'Resume auto-scroll'}
                >
                  {isAutoScrolling ? (
                    <>
                      <Pause size={12} className="text-amber-400" />
                      <span>Pause Auto-Scroll</span>
                    </>
                  ) : (
                    <>
                      <Play size={12} className="text-emerald-400" />
                      <span>Play Auto-Scroll</span>
                    </>
                  )}
                </button>
                <span className="text-white/20">|</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 hover:text-[#9F7AEA] transition-colors cursor-pointer text-[#B8B8D1]"
                  title="Scroll to top"
                >
                  <RotateCcw size={11} />
                  <span>Top</span>
                </button>
              </div>

              <div className="pointer-events-auto hidden sm:flex items-center gap-2 bg-[#1A1A2E]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full shadow-lg text-xs text-[#B8B8D1]">
                <MousePointer size={11} className="text-[#9F7AEA]" />
                <span>Hover or drag to inspect</span>
                <span className="text-white font-mono text-[11px] ml-1">
                  {Math.round(scrollProgress * 100)}%
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Live Iframe Embed */
          <div className="w-full h-[480px] md:h-[560px] lg:h-[600px] relative bg-white">
            <iframe
              src={url}
              title={title}
              className="w-full h-full border-none"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Footer Info & Metrics */}
      <div className="p-5 md:p-6 bg-[#16162A] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase"
              style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
            >
              {category}
            </span>
            <span className="text-xs text-[#B8B8D1]/70">Verified Live Production</span>
          </div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>{title}</span>
          </h3>
        </div>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl px-3 py-2 border border-white/5 text-center">
                <div className="text-sm md:text-base font-bold text-gradient">{s.value}</div>
                <div className="text-[11px] text-[#B8B8D1]">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 self-start md:self-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200"
          >
            <span>Visit Live Site</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
