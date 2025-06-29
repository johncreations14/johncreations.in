import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-gold-400"
        >
          Welcome to John Creations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl max-w-2xl"
        >
          Wedding Photography & Album Design Studio
        </motion.p>
      </section>

      {/* Portfolio Section */}
      <section className="bg-black py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-12">Portfolio Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["assets/gallery/DSC01004.JPG", "assets/gallery/DSC05659.JPG", "assets/gallery/DSC09271.jpg", "assets/gallery/VRK_1062.JPG"].map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="rounded overflow-hidden">
              <img src={src} alt={`Portfolio ${i + 1}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
