import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Formater le message pour WhatsApp
    const message = formatWhatsAppMessage(formData);
    
    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message);
    
    // Numéro WhatsApp (format international sans le +)
    const whatsappNumber = '2290166523413';
    
    // Créer l'URL WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Simuler l'envoi avant d'ouvrir WhatsApp
    setTimeout(() => {
      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(whatsappUrl, '_blank');
      
      toast.success('Message préparé ! WhatsApp va s\'ouvrir pour confirmer l\'envoi.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  const formatWhatsAppMessage = (data) => {
    return `📋 *NOUVEAU MESSAGE DU SITE 2D STUDIO*
    
👤 *Nom:* ${data.name}
📧 *Email:* ${data.email}
📞 *Téléphone:* ${data.phone || 'Non renseigné'}
📌 *Sujet:* ${data.subject}
💬 *Message:* 
${data.message}

---
📅 Envoyé depuis le formulaire de contact du site web`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: '2dstudiofficiel@gmail.com', link: 'mailto:2dstudiofficiel@gmail.com' },
    { icon: Phone, title: 'Téléphone', value: '+229 01 66 52 34 13', link: 'tel:+2290166523413' },
    { icon: MapPin, title: 'Adresse', value: 'Cotonou, Bénin', link: 'https://maps.google.com/?q=Cotonou+Bénin' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-black min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gold mb-4">Contactez-nous</h1>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une idée de projet ? Une question ? Parlons-en ensemble. Nous serons ravis de vous accompagner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold/20 hover:border-gold/60 transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-gold/10"
          >
            <h2 className="text-2xl font-serif text-gold mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Nom complet *</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" }}
                  className="w-full bg-black border border-gold/40 p-4 rounded-lg focus:outline-none focus:border-gold text-white transition-all"
                  placeholder="Jean Dupont"
                />
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" }}
                    className="w-full bg-black border border-gold/40 p-4 rounded-lg focus:outline-none focus:border-gold text-white transition-all"
                    placeholder="jean@example.com"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label className="block text-sm text-gray-400 mb-2">Téléphone</label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" }}
                    className="w-full bg-black border border-gold/40 p-4 rounded-lg focus:outline-none focus:border-gold text-white transition-all"
                    placeholder="+229 01 66 52 34 13"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                whileHover={{ scale: 1.02 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Sujet *</label>
                <motion.select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" }}
                  className="w-full bg-black border border-gold/40 p-4 rounded-lg focus:outline-none focus:border-gold text-white transition-all"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Réservation séance">Réservation séance</option>
                  <option value="Devis">Demande de devis</option>
                  <option value="Information">Information</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Autre">Autre</option>
                </motion.select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Message *</label>
                <motion.textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" }}
                  className="w-full bg-black border border-gold/40 p-4 rounded-lg focus:outline-none focus:border-gold text-white transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                ></motion.textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, letterSpacing: "0.1em" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gold text-black px-8 py-4 uppercase tracking-wider font-semibold hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    ></motion.div>
                    Préparation...
                  </>
                ) : (
                  <>
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.1 }}>
                      <Send size={18} />
                    </motion.div>
                    Envoyer sur WhatsApp
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold/20 hover:border-gold/60 transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-gold/10"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-serif text-gold mb-6">Informations</h2>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-4 group cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-all"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.1 }}
                    >
                      <info.icon className="text-gold w-5 h-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">{info.title}</p>
                      {info.link ? (
                        <motion.a 
                          href={info.link} 
                          className="text-white hover:text-gold transition-colors font-semibold"
                          whileHover={{ letterSpacing: "0.05em" }}
                          target={info.link.startsWith('http') ? "_blank" : "_self"}
                          rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <p className="text-white font-semibold">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold/20 hover:border-gold/60 transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-gold/10"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-serif text-gold mb-6">Suivez-nous</h2>
              <div className="flex gap-6">
                <motion.a
                  href="https://www.tiktok.com/@2d_studio77?_r=1&_t=ZN-95Rk86LiOIg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="TikTok" 
                  className="text-gray-400 hover:text-gold transition-all hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/2d_studio_77?igsh=MWQ1dzRrNDJ3YWxibw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  className="text-gray-400 hover:text-gold transition-all hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/share/1QcZtrnXJY/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="text-gray-400 hover:text-gold transition-all hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold/20 hover:border-gold/60 transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-gold/10 text-center group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.1 }}>
                <CheckCircle className="text-gold w-12 h-12 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">Réponse garantie</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                Nous nous engageons à répondre à tous les messages dans un délai de 24h ouvrées.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* WhatsApp Button Flottant */}
        <motion.a
          href={`https://wa.me/2290166523413`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A11.66 11.66 0 0 0 12 0a11.74 11.74 0 0 0-9.71 18.46L0 24l5.7-1.52A11.72 11.72 0 0 0 12 24a11.66 11.66 0 0 0 8.52-20.52zM12 21.65a9.66 9.66 0 0 1-4.95-1.35l-.36-.2-3.38.9.9-3.3-.21-.37a9.66 9.66 0 0 1 8.5-14.85 9.66 9.66 0 0 1 6.8 16.44A9.62 9.62 0 0 1 12 21.65z"/>
            <path d="M17.76 14.44c-.29-.15-1.72-.85-2-.95s-.46-.15-.66.15-.75.95-.92 1.15-.34.22-.63.07a7.77 7.77 0 0 1-2.27-1.4 8.53 8.53 0 0 1-1.58-2c-.16-.29 0-.44.12-.59s.32-.38.48-.58a2 2 0 0 0 .32-.54c.11-.22 0-.39-.05-.54s-.65-1.58-.89-2.16-.48-.49-.66-.5h-.57a1.1 1.1 0 0 0-.78.36 3.3 3.3 0 0 0-1 2.29 5.74 5.74 0 0 0 1.2 3.16 13 13 0 0 0 4.88 4.5 6.94 6.94 0 0 0 2.13.88 4.47 4.47 0 0 0 2.07.12 3.27 3.27 0 0 0 1.91-1.13 2.39 2.39 0 0 0 .42-1.2c0-.22-.11-.38-.29-.48z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;