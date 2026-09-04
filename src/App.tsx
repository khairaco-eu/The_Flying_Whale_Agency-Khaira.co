import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import { BookingProvider } from './context/BookingContext';
import { BookingCalendarModal } from './components/BookingCalendarModal';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import WebsitesAndFunnels from './pages/WebsitesAndFunnels';

function App() {
  return (
    <Router>
      <BookingProvider>
        <ScrollToTop />
        <BookingCalendarModal />
        <div className="min-h-screen bg-[#1A1A2E] text-white overflow-x-hidden">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/websites-and-funnels" element={<WebsitesAndFunnels />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </BookingProvider>
    </Router>
  );
}

export default App;
