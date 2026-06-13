import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ArrowRight, Camera, Award, Heart, Star, Users, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

const Home = () => {
  const heroImages = [
    '/photos2D/MARIAGE PERPETUE/PHOTOS MARIAGE ET RECEPTION/IMG_1406.jpg',
    '/photos2D/MARIAGE PERPETUE/PHOTOS MARIAGE ET RECEPTION/IMG_1407.jpg',
    '/photos2D/MARIAGE PERPETUE/PHOTOS MARIAGE ET RECEPTION/IMG_1408.jpg',
    '/photos2D/MARIAGE PERPETUE/PHOTOS MARIAGE ET RECEPTION/IMG_1409.jpg',
  ];

  const featuredPhotos = [
    { src: '/photos2D/MARIAGE PERPETUE/MARIAGE CIVIL/IMG_1234.jpg', cat: 'Mariage', year: '2025' },
    { src: '/photos2D/black is beautiful/Partie 01/IMG_0732.jpg', cat: 'Black is beautiful 1', year: '2025' },
    { src: '/photos2D/ATELIER BATIK OK/IMG_8915.jpg', cat: 'Atelier batik', year: '2025' },
    { src: '/photos2D/PHOTOS PRODUIT/photos pasteur william/IMG_9250.JPG', cat: 'Produit', year: '2025' },
  ];

  const stats = [
    { icon: Camera, value: '500+', label: 'Séances réalisées' },
    { icon: Users, value: '200+', label: 'Clients satisfaits' },
    
    { icon: Clock, value: '8+', label: "Années d'expérience" },
  ];

  const testimonials = [
    { name: 'Danssou perpetue', role: 'Mariée', text: 'Une équipe exceptionnelle ! Les photos sont magnifiques, un vrai talent. Merci pour ces souvenirs inoubliables.', rating: 5, image: '/photos2D/MARIAGE PERPETUE/PHOTOS DOTE  OK/IMG_0697.jpg' },
    { name: 'Batik', role: 'Directeur artistique', text: 'Professionnalisme et créativité au rendez-vous. 2D STUDIO a su capturer l’essence de notre événement.', rating: 5, image: '/photos2D/ATELIER BATIK OK/IMG_8844.jpg' },
    { name: 'Bocco julio', role: 'Maison de mode', text: 'Des clichés époustouflants ! Le luxe et l’élégance dans chaque détail. Je recommande vivement.', rating: 5, image: '/photos2D/WhatsApp Image 2026-04-10 at 11.38.53.jpeg' },
  ];

  const handleWhatsAppReserve = (service) => {
    const phoneNumber = '2290166523413';
    const message = `👋 Bonjour 2D STUDIO !\n\nJe viens de visiter votre site, c'est vraiment super stylé. J'aimerais réserver le service suivant :\n\n*${service.name}*\nPrix : ${service.price}\n${service.desc}\n\n✅ Merci de me répondre pour confirmer la réservation et fixer la date.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    toast.success('Ouverture de WhatsApp...');
    window.location.href = url;
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          effect="fade"
          className="h-full w-full"
        >
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-full w-full">
                <img src={process.env.PUBLIC_URL + img} alt="Hero" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-gold text-sm md:text-base uppercase tracking-[0.3em]">2D STUDIO</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-wider"
          >
            L'Art de l'Instant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
          >
            Photographie de luxe - Émotions intemporelles
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link to="/gallery" className="bg-gold text-black px-10 py-4 uppercase tracking-wider font-semibold hover:bg-white transition-all duration-200 transform hover:scale-105">
              Voir galerie
            </Link>
            <Link to="/contact">
              <button 
              onClick={() => toast.success('Session réservée ! Nous vous contacterons sous 24h.')} 
              className="border-2 border-gold text-gold px-10 py-4 uppercase tracking-wider font-semibold hover:bg-gold hover:text-black transition-all duration-200 transform hover:scale-105"
            >
              Réserver une séance
            </button>
            </Link>
            
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.08 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gold/20 hover:border-gold/60 transition-all duration-200 group cursor-pointer"
              >
                <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.1 }} className="inline-block mb-4">
                  <stat.icon className="w-10 h-10 text-gold" />
                </motion.div>
                <motion.div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-gray-300 transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Presentation */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-gold mb-6">2D STUDIO</h2>
            <div className="w-20 h-0.1 bg-gold mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Studio photographique haut de gamme spécialisé dans la capture d'émotions authentiques. 
              Chaque image raconte une histoire unique, avec une touche d'élégance et de modernité.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Camera, title: 'Excellence technique', desc: 'Matériel professionnel et maîtrise artistique', color: 'gold' },
              { icon: Award, title: 'Style signature', desc: 'Lumière, composition et émotion', color: 'gold' },
              { icon: Heart, title: 'Approche personnalisée', desc: 'Chaque projet est unique', color: 'gold' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-8 border border-gold/30 rounded-xl hover:border-gold transition-all duration-200 group bg-gradient-to-br from-gray-900 to-black"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Photos Preview */}
      <section className="py-24 px-6 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">Œuvres récentes</h2>
            <div className="w-20 h-0.1 bg-gold mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-200"
                onClick={() => toast('Ouverture de la galerie complète', { icon: '📸' })}
              >
                <Link to={`/gallery?category=${photo.cat}`} className="block w-full h-full">
                  <img src={process.env.PUBLIC_URL + photo.src} alt={photo.cat} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3" />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-end pb-8"
                  >
                    <motion.span 
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      className="text-white text-xl font-serif border-b-2 border-gold pb-2"
                    >
                      {photo.cat}
                    </motion.span>
                    <motion.span 
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="text-gold text-sm mt-2"
                    >
                      {photo.year}
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-gold hover:text-white border-b-2 border-gold pb-2 transition-all duration-200 group">
              Explorer toutes les galeries 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">Témoignages</h2>
            <div className="w-20 h-0.1 bg-gold mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Ce que nos clients pensent de 2D STUDIO</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: i * 0.15, duration: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)" }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold/20 hover:border-gold/60 transition-all duration-200 group"
              >
                <motion.div 
                  className="flex items-center gap-4 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.img 
                    src={process.env.PUBLIC_URL + t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div>
                    <div className="font-semibold text-gold group-hover:text-white transition-colors">{t.name}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{t.role}</div>
                  </div>
                </motion.div>
                <motion.div className="flex mb-3">
                  {[...Array(t.rating)].map((_, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: idx * 0.05 }}>
                      <Star size={16} className="text-gold fill-gold" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.p 
                  className="text-gray-300 italic leading-relaxed group-hover:text-white transition-colors"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  "{t.text}"
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Tarifs */}
      <section className="py-24 px-6 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">Services & Tarifs</h2>
            <div className="w-20 h-0.1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">Des prestations sur mesure pour chaque événement. Contactez-nous pour un devis personnalisé.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Mariage', price: 'À partir de 1800€', desc: 'Reportage complet + album luxe', features: ['8h de reportage', 'Album photo premium', 'Galerie en ligne', '100+ photos retouchées'] },
              { name: 'Portrait / Mode', price: 'À partir de 450€', desc: 'Séance studio ou extérieur', features: ['2h de shooting', '5 tenues max', '20 photos retouchées', 'Making-of inclus'] },
              { name: 'Événementiel', price: 'Sur devis', desc: 'Corporate, anniversaires, etc.', features: ['Sur mesure', 'Couverture complète', 'Livraison rapide', 'Formats digitaux'] }
            ].map((s, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03, boxShadow: "0 20px 60px rgba(212, 175, 55, 0.15)" }}
                className="bg-black p-8 rounded-xl border border-gold/30 hover:border-gold/80 transition-all duration-200 group"
              >
                <motion.h3 
                  className="text-2xl font-serif text-gold mb-4 group-hover:text-white transition-colors"
                  whileHover={{ letterSpacing: "0.1em" }}
                >
                  {s.name}
                </motion.h3>
                <motion.p 
                  className="text-3xl font-bold text-white my-4"
                  whileHover={{ scale: 1.1, color: "#d4af37" }}
                >
                  {s.price}
                </motion.p>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="text-sm text-gray-400 flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      whileHover={{ x: 5, color: "#d4af37" }}
                    >
                      <motion.span className="text-gold" whileHover={{ scale: 1.5, rotate: 180 }}>✦</motion.span> {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button 
                  onClick={() => handleWhatsAppReserve(s)} 
                  className="w-full border-2 border-gold text-gold px-6 py-3 hover:bg-gold hover:text-black transition-all duration-200 font-semibold uppercase tracking-wider"
                  whileHover={{ scale: 1.05, letterSpacing: "0.15em" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Réserver
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gold/10">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Prêt à capturer vos moments précieux ?</h2>
            <p className="text-gray-300 mb-8 text-lg">Contactez-nous dès aujourd'hui pour discuter de votre projet</p>
            <Link 
              to="/contact" 
              className="inline-block bg-gold text-black px-12 py-4 uppercase tracking-wider font-semibold hover:bg-white transition-all duration-200 transform hover:scale-105"
            >
              Commencer votre projet
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;