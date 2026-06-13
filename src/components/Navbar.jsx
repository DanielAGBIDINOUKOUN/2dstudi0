import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Galeries', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.1 , type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-200 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img className='w-16 h-16' src={process.env.PUBLIC_URL + "/photos2D/PHOTO/logoo.png"} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm uppercase tracking-wider transition-all duration-200 hover:text-gold ${
                location.pathname === link.path 
                  ? 'text-gold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-100' 
                  : 'text-white after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none hover:text-gold transition-colors z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full py-8 border-t border-gold/20"
          >
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg uppercase tracking-wider transition-all duration-200 ${
                      location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

