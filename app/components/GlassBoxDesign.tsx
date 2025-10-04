'use client'

import { motion } from 'framer-motion';
import { Lightbulb, Zap, Shield, Eye } from 'lucide-react';

export function GlassBoxDesign() {
  const features = [
    {
      icon: Lightbulb,
      title: "Idea Generation",
      description: "AI-powered market analysis generates trading opportunities based on multiple data streams and pattern recognition",
      color: "from-yellow-500/15 to-orange-500/15",
      iconColor: "text-yellow-400",
      borderColor: "border-slate-600/50"
    },
    {
      icon: Zap,
      title: "Reinforcement Models",
      description: "Self-learning algorithms that adapt strategies based on market feedback and performance outcomes",
      color: "from-purple-500/15 to-indigo-500/15", 
      iconColor: "text-purple-400",
      borderColor: "border-slate-600/50"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Dynamic risk assessment and position sizing with real-time portfolio protection mechanisms",
      color: "from-red-500/15 to-pink-500/15",
      iconColor: "text-red-400", 
      borderColor: "border-slate-600/50"
    },
    {
      icon: Eye,
      title: "Explainable Insights",
      description: "Transparent decision-making process with clear rationale for every trade recommendation and strategy",
      color: "from-blue-500/15 to-cyan-500/15",
      iconColor: "text-blue-400",
      borderColor: "border-slate-600/50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
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
            Transparent Intelligence
          </h2>
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Transparency in every decision. Understanding in every action.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${feature.color} backdrop-blur-xl border ${feature.borderColor} hover:border-slate-500/50 transition-all duration-300 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -6,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced hover effect with shimmer */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: [
                    "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 30%, transparent 70%)", 
                    "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)"
                  ],
                  transition: { duration: 1.5, repeat: Infinity }
                }}
              />

              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm`} />

              <div className="relative z-10">
                <motion.div 
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-slate-800/50 border border-slate-600/50 flex items-center justify-center mb-4 lg:mb-6 group-hover:border-slate-500/50 group-hover:bg-slate-700/50 transition-all duration-300`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <feature.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${feature.iconColor} group-hover:drop-shadow-lg transition-all duration-300`} />
                  </motion.div>
                </motion.div>

                <motion.h3 
                  className="mb-4 text-white group-hover:text-slate-100 transition-colors duration-300"
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

              {/* Animated particles */}
              <motion.div
                className={`absolute top-4 right-4 w-2 h-2 rounded-full ${feature.iconColor.replace('text-', 'bg-')}/30 opacity-0 group-hover:opacity-100`}
                initial={{ scale: 0, y: 0 }}
                whileHover={{
                  scale: [0, 1, 0],
                  y: [0, -20, -40],
                  opacity: [0, 1, 0],
                  transition: { duration: 2, repeat: Infinity }
                }}
              />
              <motion.div
                className={`absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full ${feature.iconColor.replace('text-', 'bg-')}/40 opacity-0 group-hover:opacity-100`}
                initial={{ scale: 0, y: 0 }}
                whileHover={{
                  scale: [0, 1, 0],
                  y: [0, 15, 30],
                  opacity: [0, 1, 0],
                  transition: { duration: 1.8, repeat: Infinity, delay: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-6">
            Every decision backed by data. Every strategy explained in detail.
          </p>
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 text-slate-200 hover:border-slate-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Learn More About Our Approach
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}