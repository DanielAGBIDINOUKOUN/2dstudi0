import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="bg-white text-black min-h-screen" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <Toaster 
          position="bottom-right" 
          toastOptions={{ 
            style: { 
              background: '#1a1a1a', 
              color: '#fff', 
              border: '1px solid #d4af37',
              borderRadius: '8px',
              padding: '16px'
            } 
          }} 
        />
      </div>
    </Router>
  );
}

export default App;