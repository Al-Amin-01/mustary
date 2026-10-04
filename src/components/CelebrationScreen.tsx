import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CelebrationScreen.css';

const celebrationParticles = ['❤️', '💕', '🌹', '✨', '💐', '💖', '🌸', '💗', '🥰', '💓'];

interface CelebrationScreenProps {}

const CelebrationScreen: React.FC<CelebrationScreenProps> = () => {
  const [particles, setParticles] = useState<
    { id: number; symbol: string; x: number; startY: number; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    const ps = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      symbol: celebrationParticles[i % celebrationParticles.length],
      x: Math.random() * 100,
      startY: 110,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 6,
      size: 1 + Math.random() * 1.5,
    }));
    setParticles(ps);
  }, []);

  return (
    <motion.div
      className="celebration-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background particles */}
      <div className="celebration-particles" aria-hidden="true">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="celebration-particle"
            style={{ left: `${p.x}vw`, fontSize: `${p.size}rem` }}
            animate={{
              y: [`${p.startY}vh`, '-15vh'],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {p.symbol}
          </motion.span>
        ))}
      </div>

      {/* Central card */}
      <motion.div
        className="celebration-card"
        initial={{ scale: 0.7, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="celebration-ring"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          💍
        </motion.div>

        <motion.div
          className="celebration-hearts-row"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          aria-hidden="true"
        >
          {['❤️', '💕', '❤️'].map((h, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            >
              {h}
            </motion.span>
          ))}
        </motion.div>

        <motion.h1
          className="celebration-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Congratulations,
          <br />
          <span className="celebration-title--accent">My Love ❤️</span>
        </motion.h1>

        <motion.p
          className="celebration-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          You officially passed the most important test. 😌❤️
        </motion.p>

        <motion.div
          className="celebration-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        />

        <motion.p
          className="celebration-message"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          Looks like you're stuck with me forever. 🥰
        </motion.p>

        <motion.div
          className="celebration-bottom-hearts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          aria-hidden="true"
        >
          {['💓', '❤️', '💗', '❤️', '💓'].map((h, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0], scale: [0.95, 1.1, 0.95] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
            >
              {h}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CelebrationScreen;
