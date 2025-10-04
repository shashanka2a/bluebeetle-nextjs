'use client'

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "BlueBeetle.live transformed our trading operations. The AI insights are incredibly accurate, and the transparency gives us complete confidence in every decision.",
      author: "Sarah Chen",
      title: "Head of Trading, Quantum Capital",
      rating: 5,
      gradient: "from-blue-500/15 to-purple-500/15",
      border: "border-slate-600/50"
    },
    {
      quote: "The real-time risk management alone has saved us millions. This isn't just automation—it's genuine intelligence that adapts to market conditions.",
      author: "Marcus Rodriguez", 
      title: "Portfolio Manager, Alpine Fund",
      rating: 5,
      gradient: "from-purple-500/15 to-pink-500/15",
      border: "border-slate-600/50"
    },
    {
      quote: "Finally, an AI trading system that explains its reasoning. The audit trail and compliance features make it perfect for institutional use.",
      author: "Dr. Emily Watson",
      title: "Chief Risk Officer, Sterling Asset Management",
      rating: 5,
      gradient: "from-green-500/15 to-cyan-500/15", 
      border: "border-slate-600/50"
    }
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
            style={{ fontFamily: 'Clash Display, system-ui, sans-serif' }}
          >
            Why BlueBeetle.live
          </h2>
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Trusted by leading traders and funds worldwide
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${testimonial.gradient} backdrop-blur-xl border ${testimonial.border} hover:border-slate-500/50 transition-all duration-300 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-200 mb-6 leading-relaxed text-sm lg:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-700/50 border border-slate-600/50 flex items-center justify-center">
                    <div className="text-sm lg:text-base text-slate-300">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <div 
                      className="text-white mb-1 text-sm lg:text-base"
                      style={{ fontFamily: 'Clash Display, system-ui, sans-serif' }}
                    >
                      {testimonial.author}
                    </div>
                    <div className="text-slate-400 text-xs lg:text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${testimonial.border.replace('border-', '').replace('/30', '/10')}, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}