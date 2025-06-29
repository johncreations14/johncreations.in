import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gold-400 mb-4"
        >
          Welcome to John Creations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl text-gray-300"
        >
          Wedding Photography & Album Design Studio
        </motion.p>
      </section>

      {/* Portfolio Preview Section */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gold-400">
          Featured Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-gray-800"
            >
              <img
                src={`https://placehold.co/600x400?text=Image+${index}`}
                alt={`Gallery ${index}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
