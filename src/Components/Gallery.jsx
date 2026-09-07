import { useState } from "react";
import information from "../Utils/information";
import { motion, AnimatePresence } from "framer-motion";
const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };
  const closeModal = () => {
    setSelectedGallery(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === information.galleries[selectedGallery].images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0
        ? information.galleries[selectedGallery].images.length - 1
        : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Productos Biodegredables
      </h2>
      {/* Grid de imágenes principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {information.galleries.map((item) => (
          <motion.div
            key={item.key}
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-xl"
            onClick={() => openModal(item.key)}
          >
            <div className="relative h-80">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay con efecto de opacidad */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
              {/* Contenido descriptivo */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
