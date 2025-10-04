'use client'

import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background with subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </motion.div>

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      />

      {/* Pulsing Beetle Outline with enhanced load animation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ 
          opacity: 0, 
          scale: 0.8,
          rotate: -10
        }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
          rotate: 0
        }}
        transition={{ 
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 1.5,
            delay: 0.8
          }
        }}
      >
        <svg width="400" height="300" viewBox="0 0 400 300" className="text-blue-400">
          {/* Beetle body outline made of neural nodes */}
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Main body */}
            <ellipse cx="200" cy="150" rx="80" ry="120" opacity="0.6" />
            <ellipse cx="200" cy="120" rx="50" ry="40" opacity="0.8" />
            
            {/* Neural node connections */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x = 200 + Math.cos(angle) * 60;
              const y = 150 + Math.sin(angle) * 80;
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="currentColor"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity
                  }}
                />
              );
            })}
            
            {/* Connecting lines */}
            {Array.from({ length: 8 }).map((_, i) => {
              const startAngle = (i * 45) * Math.PI / 180;
              const endAngle = ((i + 1) * 45) * Math.PI / 180;
              const startX = 200 + Math.cos(startAngle) * 60;
              const startY = 150 + Math.sin(startAngle) * 80;
              const endX = 200 + Math.cos(endAngle) * 60;
              const endY = 150 + Math.sin(endAngle) * 80;
              
              return (
                <motion.line
                  key={i}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  opacity="0.4"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ 
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity
                  }}
                />
              );
            })}
          </g>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 1,
            ease: [0.25, 0.25, 0, 1]
          }}
          style={{ fontFamily: 'var(--font-clash-display), system-ui, sans-serif' }}
        >
          Agentic Intelligence for the Markets That Never Sleep
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1.3,
            ease: [0.25, 0.25, 0, 1]
          }}
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          BlueBeetle.live — the living co-pilot for traders and funds
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.6,
            ease: [0.25, 0.25, 0, 1]
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.8,
              ease: [0.25, 0.25, 0, 1]
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Request Early Access
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 2,
              ease: [0.25, 0.25, 0, 1]
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(148, 163, 184, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500 px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              Explore Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Subtle animated underline */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent max-w-xs mx-auto"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.2 }}
        />
      </div>

      {/* Enhanced floating particles with load animation */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            y: 50
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: 2 + Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Additional sparkle particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: 0
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            rotate: 360
          }}
          transition={{
            duration: 2,
            delay: 2.5 + i * 0.3,
            ease: "easeOut"
          }}
        />
      ))}
    </section>
  );
}