'use client'

import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { TheShift } from './components/TheShift';
import { GlassBoxDesign } from './components/GlassBoxDesign';
import { LiveDashboard } from './components/LiveDashboard';
import { Footer } from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white dark">

      {/* Smooth Scroll Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Hero />
        
        {/* The Shift Section */}
        <TheShift />
        
        {/* Glass-Box Design Section */}
        <GlassBoxDesign />
        
        {/* Live Dashboard Section */} 
        <LiveDashboard />
        
        {/* Footer */}
        <Footer />
      </motion.div>

      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Ambient Particles - Reduced for performance */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-blue-400/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}