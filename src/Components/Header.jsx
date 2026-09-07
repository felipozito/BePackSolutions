import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://unsplash.com/photos/3d-illustration-open-pizza-box-mockup-empty-package-and-delivery-package-on-isolated-background-nbUQ5bOxARQ",
  "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[current]})` }}
          ></div>
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            BePack
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Opta por ideas renovables, genera grandes cambios para la vida y el
            planeta
          </p>
          <button
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold
                   hover:bg-gray-100 transition-colors duration-300"
          >
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
