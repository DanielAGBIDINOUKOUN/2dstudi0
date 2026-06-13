import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Palette, Heart, Users } from 'lucide-react';

const About = () => {
  const skills = [
    'Photographie de mariage', 'Portrait studio', 'Fashion editorial', 
    'Reportage événementiel', 'Retouche professionnelle', 'Direction artistique',
    'Lightroom expert', 'Photoshop master', 'Capture One'
  ];

  

  return (
    <div className="pt-32 pb-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.1  }} 
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-gold mb-4">À propos</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8" />
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Découvrez l'artiste derrière l'objectif et sa vision unique de la photographie de luxe
          </p>
        </motion.div>

        {/* Main Profile */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.1  }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Sokindji Donné <span className="text-gold">Photographe</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-6"></div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Fondateur de 2D STUDIO,  Sokindji Donné passion et expertise depuis plus de 10 ans. 
              Diplômé de l'école reconnu <b>Ecole Leader</b> et formé aux plus grandes techniques de photographie 
              de luxe, il capture l'essence de chaque instant avec une élégance intemporelle.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Son approche unique : allier technique irréprochable et sensibilité artistique pour 
              créer des images qui transcendent le temps. Chaque projet est une aventure humaine 
              où l'émotion est reine et où la perfection est la norme.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Camera className="text-gold w-5 h-5" />
                <span className="text-sm text-gray-400">10+ ans d'expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-gold w-5 h-5" />
                <span className="text-sm text-gray-400">500+ clients</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.1  }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative group">
              <img 
                src={process.env.PUBLIC_URL + "/photos2D/PHOTO/IMG_0500.jpg%20mn.jpg"} 
                alt="Photographer" 
                className="rounded-lg shadow-2xl border-2 border-gold/30 group-hover:border-gold transition-all duration-200"
              />
              <div className="absolute inset-0 bg-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 my-20">
          {[
            { icon: Camera, title: 'Expérience', desc: '10+ années dans la photographie de luxe, plus de 500 événements capturés avec excellence.' },
            { icon: Sparkles, title: 'Spécialités', desc: 'Mariage, portrait, mode, corporate, reportage événementiel et photographie d\'art.' },
            { icon: Palette, title: 'Style artistique', desc: 'Lumière naturelle, composition minimaliste, post-production haut de gamme signature.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: i * 0.12, duration: 0.1  }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.05, boxShadow: "0 20px 50px rgba(212, 175, 55, 0.2)" }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl text-center border border-gold/20 hover:border-gold/80 transition-all duration-200 group"
            >
              <motion.div 
                className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.1  }}
              >
                <item.icon className="w-8 h-8 text-gold" />
              </motion.div>
              <motion.h3 
                className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors"
                whileHover={{ letterSpacing: "0.05em" }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.1  }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold/10 to-transparent p-8 rounded-xl border-l-4 border-gold mb-20 hover:border-l-gold hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 group"
        >
          <motion.h3 
            className="text-2xl font-serif text-gold mb-6 group-hover:text-white transition-colors"
            whileHover={{ letterSpacing: "0.1em" }}
          >
            Compétences techniques & artistiques
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, y: -3, boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)" }}
                className="bg-black/50 px-5 py-2 text-sm border border-gold/40 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-200 cursor-pointer font-semibold uppercase tracking-wide"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

       

        {/* Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1  }}
          className="text-center py-12 border-t border-gold/20 group hover:border-gold/60 transition-all duration-200"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.1  }}
          >
            <Heart className="text-gold w-12 h-12 mx-auto mb-6" />
          </motion.div>
          <motion.h3 
            className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors"
            whileHover={{ letterSpacing: "0.1em" }}
          >
            Ma philosophie
          </motion.h3>
          <motion.p 
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed group-hover:text-gray-300 transition-colors"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            "La photographie est bien plus qu'un simple cliché. C'est l'art de capturer l'instant précieux, 
            l'émotion fugace, la lumière parfaite. Chaque projet est une histoire unique que je m'engage 
            à raconter avec authenticité, élégance et excellence."
          </motion.p>
          <motion.p 
            className="text-gold mt-6 font-serif group-hover:text-white transition-colors"
            whileHover={{ scale: 1.1, letterSpacing: "0.05em" }}
          >
            — Sokindji Donné
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;