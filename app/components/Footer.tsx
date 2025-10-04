'use client'

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-b from-slate-950 to-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Glowing Beetle Icon */}
            <motion.div 
              className="flex items-center gap-4 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 30px rgba(59, 130, 246, 0.5)',
                    '0 0 20px rgba(59, 130, 246, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg width="48" height="36" viewBox="0 0 48 36" className="text-blue-400">
                  <g fill="currentColor">
                    {/* Beetle body */}
                    <ellipse cx="24" cy="18" rx="12" ry="16" opacity="0.8" />
                    <ellipse cx="24" cy="14" rx="8" ry="6" opacity="0.9" />
                    
                    {/* Neural connections */}
                    {Array.from({ length: 6 }).map((_, i) => {
                      const angle = (i * 60) * Math.PI / 180;
                      const x = 24 + Math.cos(angle) * 8;
                      const y = 18 + Math.sin(angle) * 10;
                      return (
                        <motion.circle
                          key={i}
                          cx={x}
                          cy={y}
                          r="1.5"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ 
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Infinity
                          }}
                        />
                      );
                    })}
                  </g>
                </svg>
              </motion.div>
              
              <div>
                <h3 
                  className="text-2xl text-white mb-2"
                  style={{ fontFamily: 'var(--font-clash-display), system-ui, sans-serif' }}
                >
                  BlueBeetle.live
                </h3>
                <p className="text-slate-400 italic">Alive. Adaptive. Accountable.</p>
              </div>
            </motion.div>

            <p className="text-slate-400 leading-relaxed mb-6 text-sm lg:text-base">
              The future of trading intelligence is here. Experience the power of truly adaptive AI that grows with the markets and evolves with your strategies.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Contact' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 
              className="text-xl mb-4 text-white"
              style={{ fontFamily: 'var(--font-clash-display), system-ui, sans-serif' }}
            >
              Stay Connected
            </h4>
            <p className="text-slate-400 mb-6">
              Get the latest insights on AI trading, market analysis, and platform updates delivered to your inbox.
            </p>
            
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
              />
              <Button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-slate-500 text-sm mt-3">
              No spam. Unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Demo', 'API Docs']
            },
            {
              title: 'Company',
              links: ['About', 'Team', 'Careers', 'News']
            },
            {
              title: 'Resources',
              links: ['Blog', 'Guides', 'Webinars', 'Support']
            },
            {
              title: 'Legal',
              links: ['Privacy', 'Terms', 'Security', 'Compliance']
            }
          ].map((section) => (
            <div key={section.title}>
              <h5 className="text-white mb-3 lg:mb-4 text-sm lg:text-base">{section.title}</h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-slate-400 hover:text-slate-300 transition-colors duration-200 text-xs lg:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-slate-500 text-sm">
            © 2024 BlueBeetle.live. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              All systems operational
            </motion.div>
            <div>Made with ❤️ for traders</div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}