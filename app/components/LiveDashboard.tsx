'use client'

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Activity, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export function LiveDashboard() {
  const [metrics, setMetrics] = useState({
    portfolio: 847562,
    dailyPnL: 3240,
    accuracy: 73.2,
    activePositions: 8
  });

  // Simulate realistic real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        portfolio: prev.portfolio + (Math.random() - 0.5) * 2000,
        dailyPnL: prev.dailyPnL + (Math.random() - 0.5) * 200,
        accuracy: Math.max(65, Math.min(85, prev.accuracy + (Math.random() - 0.5) * 1)),
        activePositions: Math.max(5, Math.min(15, prev.activePositions + Math.floor((Math.random() - 0.5) * 2)))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const mockTrades = [
    { symbol: 'AAPL', action: 'BUY', price: 182.15, confidence: 78 },
    { symbol: 'MSFT', action: 'HOLD', price: 342.89, confidence: 71 },
    { symbol: 'NVDA', action: 'SELL', price: 421.33, confidence: 82 },
    { symbol: 'TSLA', action: 'BUY', price: 198.47, confidence: 69 }
  ];

  return (
    <section className="py-24 bg-slate-900">
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
            Live Dashboard
          </h2>
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Real-time insights into every decision, every trade, every outcome
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              className="text-center p-4 rounded-2xl bg-green-500/10 border border-green-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <motion.div
                className="text-2xl text-white mb-1"
                key={metrics.portfolio}
                initial={{ scale: 1.2, color: '#22c55e' }}
                animate={{ scale: 1, color: '#ffffff' }}
                transition={{ duration: 0.3 }}
              >
                ${metrics.portfolio.toLocaleString()}
              </motion.div>
              <div className="text-sm text-slate-400">Portfolio Value</div>
            </motion.div>

            <motion.div
              className="text-center p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <motion.div
                className="text-2xl text-white mb-1"
                key={metrics.dailyPnL}
                initial={{ scale: 1.2, color: '#3b82f6' }}
                animate={{ scale: 1, color: '#ffffff' }}
                transition={{ duration: 0.3 }}
              >
                +${metrics.dailyPnL.toLocaleString()}
              </motion.div>
              <div className="text-sm text-slate-400">Daily P&L</div>
            </motion.div>

            <motion.div
              className="text-center p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <motion.div
                className="text-2xl text-white mb-1"
                key={metrics.accuracy}
                initial={{ scale: 1.2, color: '#8b5cf6' }}
                animate={{ scale: 1, color: '#ffffff' }}
                transition={{ duration: 0.3 }}
              >
                {metrics.accuracy.toFixed(1)}%
              </motion.div>
              <div className="text-sm text-slate-400">Accuracy</div>
            </motion.div>

            <motion.div
              className="text-center p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <Activity className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <motion.div
                className="text-2xl text-white mb-1"
                key={metrics.activePositions}
                initial={{ scale: 1.2, color: '#f97316' }}
                animate={{ scale: 1, color: '#ffffff' }}
                transition={{ duration: 0.3 }}
              >
                {metrics.activePositions}
              </motion.div>
              <div className="text-sm text-slate-400">Active Positions</div>
            </motion.div>
          </div>

          {/* Live Trade Feed */}
          <div className="bg-slate-800/30 rounded-2xl p-6">
            <h3 className="text-xl mb-4 text-white flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              Live Trade Signals
            </h3>
            
            <div className="space-y-3">
              {mockTrades.map((trade, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-700/30 border border-slate-600/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-lg text-white">{trade.symbol}</div>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      trade.action === 'BUY' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : trade.action === 'SELL'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {trade.action}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-slate-300">${trade.price}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-slate-600 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${trade.confidence}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                      <span className="text-sm text-slate-400">{trade.confidence}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "Real-Time Updates",
              description: "Live market data processing with millisecond-level decision updates"
            },
            {
              title: "Confidence Scoring", 
              description: "Every recommendation comes with AI confidence levels and risk assessments"
            },
            {
              title: "Decision Tracking",
              description: "Full audit trail of AI reasoning and performance attribution"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg mb-3 text-white">{feature.title}</h4>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}