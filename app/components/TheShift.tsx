'use client'

import { motion } from 'framer-motion';
import { User, Brain, ArrowRight } from 'lucide-react';

export function TheShift() {
  const scrollItems = [
    { icon: User, text: "Human Insight", type: "human" },
    { icon: ArrowRight, text: "Collaboration", type: "arrow" },
    { icon: Brain, text: "AI Intelligence", type: "ai" },
    { icon: ArrowRight, text: "Augmentation", type: "arrow" },
    { icon: User, text: "Enhanced Decision", type: "human" },
    { icon: ArrowRight, text: "Market Edge", type: "arrow" },
    { icon: Brain, text: "Continuous Learning", type: "ai" },
  ];

  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-clash-display), system-ui, sans-serif' }}
          >
            The Shift
          </h2>
          <p 
            className="text-xl text-slate-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            From Automation to Augmentation
          </p>
        </motion.div>

        {/* Horizontal Scrolling Animation */}
        <div className="relative h-32 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10" />
          
          <motion.div
            className="flex items-center gap-8 h-full"
            animate={{ x: [0, -800] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: '200%' }}
          >
            {[...scrollItems, ...scrollItems].map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-4 px-6 py-4 rounded-full backdrop-blur-sm border whitespace-nowrap ${
                  item.type === 'human' 
                    ? 'bg-blue-500/10 border-blue-400/30 text-blue-300'
                    : item.type === 'ai'
                    ? 'bg-purple-500/10 border-purple-400/30 text-purple-300'
                    : 'bg-slate-800/50 border-slate-600/30 text-slate-400'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-lg">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "Human-Centric Design",
              description: "Built around trader intuition and experience, not replacing but enhancing human decision-making",
              icon: User,
              gradient: "from-blue-500/15 to-cyan-500/15"
            },
            {
              title: "Seamless Integration", 
              description: "AI that learns your trading style and adapts to market conditions in real-time",
              icon: ArrowRight,
              gradient: "from-purple-500/15 to-pink-500/15"
            },
            {
              title: "Continuous Evolution",
              description: "Self-improving algorithms that grow smarter with every market movement",
              icon: Brain,
              gradient: "from-indigo-500/15 to-blue-500/15"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
                    "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 50%)",
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)"
                  ],
                  transition: { duration: 2, repeat: Infinity }
                }}
              />

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <feature.icon className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300" />
                </motion.div>
                <motion.h3 
                  className="mb-4 text-white group-hover:text-blue-100 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-clash-display), system-ui, sans-serif' }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-slate-300 leading-relaxed text-sm lg:text-base group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Animated corner accents */}
              <motion.div
                className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-400/50 to-purple-400/50 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 0.7],
                  transition: { duration: 0.6 }
                }}
              />
              <motion.div
                className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-cyan-400/50 to-blue-400/50 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 0.7],
                  transition: { duration: 0.6, delay: 0.1 }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}