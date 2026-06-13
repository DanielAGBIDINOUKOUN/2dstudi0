import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MessageCircle, Music, Instagram, Facebook, TikTok } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
    
  return (
    <footer className="bg-black border-t border-gold/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Camera className="text-gold w-6 h-6" />
              <h3 className="text-2xl font-serif text-gold">2D STUDIO</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Capturer l'instant, graver l'émotion. <br />
              Photographie de luxe depuis 2015.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">À propos</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Galeries</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-gold transition-colors cursor-pointer">Mariage & Émotion</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Portrait & Mode</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Événements Corporate</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Reportage Luxe</li>
            </ul>
          </div>
          
          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Suivez-nous</h4>
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              <a href="https://www.tiktok.com/@2d_studio77?_r=1&_t=ZN-95Rk86LiOIg" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-gold transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="https://www.instagram.com/2d_studio_77?igsh=MWQ1dzRrNDJ3YWxibw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-gold transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1QcZtrnXJY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-gold transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              2dstudiofficiel@gmail.com<br />
              +229 01 66 52 34 13
            </p>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs mt-12 pt-8 border-t border-gray-800">
          <p>© {currentYear} 2D STUDIO — Tous droits réservés. Photographie de luxe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;