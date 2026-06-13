import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../data/galleryData';


const Gallery = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'Mariage');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImagesList, setCurrentImagesList] = useState([]);

  // Update activeCategory when URL parameter changes
  useEffect(() => {
    if (categoryParam && categories.some(cat => cat.name === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const currentImages = categories.find(cat => cat.name === activeCategory)?.images || [];
  const categoryNames = categories.map(cat => cat.name);

  const openLightbox = (index, images) => {
    setCurrentImagesList(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImagesList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImagesList.length) % currentImagesList.length);
  };

  return (
    <div className="pt-28 pb-20 px-6 bg-black min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1  }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gold mb-4">Galeries</h1>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explorez notre portfolio à travers différentes thématiques. Chaque image raconte une histoire unique.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 , delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categoryNames.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.01, duration: 0.1  }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-200 rounded-lg font-semibold ${
                activeCategory === cat 
                  ? 'bg-gold text-black shadow-lg shadow-gold/50 scale-105' 
                  : 'border-2 border-gold text-gold hover:bg-gold/20 hover:shadow-lg'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1  }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {currentImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: idx * 0.04, duration: 0.1  }}
              whileHover={{ y: -12, scale: 1.02, rotate: 2, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-lg transition-all duration-200"
              onClick={() => openLightbox(idx, currentImages)}
            >
              <motion.img 
                src={process.env.PUBLIC_URL + img} 
                alt={`${activeCategory} gallery ${idx + 1}`} 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" 
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end justify-center pb-8"
              >
                <motion.span 
                  className="text-gold text-sm uppercase tracking-wider border-b-2 border-gold pb-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  Voir en grand
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <motion.button
                  onClick={closeLightbox}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-12 right-0 text-white hover:text-gold transition z-10"
                >
                  <X size={32} />
                </motion.button>
                
                <motion.button
                  onClick={prevImage}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -5, scale: 1.15, color: "#d4af37" }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 text-white hover:text-gold transition group"
                >
                  <ChevronLeft size={40} className="group-hover:drop-shadow-lg" />
                </motion.button>
                
                <motion.img
                  key={currentImageIndex}
                  src={process.env.PUBLIC_URL + currentImagesList[currentImageIndex]}
                  alt="Lightbox"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                
                <motion.button
                  onClick={nextImage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5, scale: 1.15, color: "#d4af37" }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 text-white hover:text-gold transition group"
                >
                  <ChevronRight size={40} className="group-hover:drop-shadow-lg" />
                </motion.button>
                
                <motion.div 
                  className="absolute -bottom-12 left-0 right-0 text-center text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="text-gold font-semibold">{currentImageIndex + 1}</span> / {currentImagesList.length}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {currentImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">Aucune image dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;