import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          John Creations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-gray-400"
        >
          Crafting Memories with Elegance – Weddings • Baby Shoots • Album Designs
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Our Signature Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">Wedding Photography</h3>
              <p>Capturing your big day with cinematic precision and heartwarming moments.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">Baby & Maternity</h3>
              <p>Celebrate the beginning of life with charming, timeless imagery.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">Album Designing</h3>
              <p>Elegant, customized albums that turn memories into legacy keepsakes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-black py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-12">Portfolio Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="rounded overflow-hidden"
            >
              <img
                src={`https://placehold.co/600x400?text=Sample+${i}`}
                alt={`Sample ${i}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Make Your Moments Last Forever</h2>
        <p className="mb-8">Book a session with John Creations or get your dream album designed today.</p>
        <a 
          href="/contact.html"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Book Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 text-gray-500">
        &copy; {new Date().getFullYear()} John Creations. All Rights Reserved.
      </footer>
    </div>
  );
}
