import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1682687221175-9f678e5a8c1f?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=2070",
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
