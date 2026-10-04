import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Theme } from '../themes/themes';
import './FloatingParticles.css';

interface FloatingParticlesProps {
  theme: Theme;
  count?: number;
}

const particleSymbols: Record<string, string[]> = {
  hearts: ['❤️', '💕', '💗', '💖', '💓', '♥'],
  stars: ['✨', '⭐', '🌟', '💫', '★', '✦'],
  butterflies: ['🦋', '🌸', '✿', '❀', '🌺'],
  bubbles: ['○', '◯', '●', '•', '◉'],
  petals: ['🌹', '🌸', '🌺', '❤️', '💐'],
  sparkles: ['✨', '💎', '👑', '⭐', '🌟'],
  crowns: ['👑', '✨', '💛', '⭐', '🌟'],
};

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ theme, count = 18 }) => {
  const particles = useMemo(() => {
    const symbols = particleSymbols[theme.particleType] || particleSymbols.hearts;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      x: Math.random() * 100,
      startY: 110 + Math.random() * 20,
      endY: -20 - Math.random() * 30,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 0.7 + Math.random() * 1.4,
      drift: (Math.random() - 0.5) * 12,
    }));
  }, [theme.particleType, count]);

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          initial={{ x: `${p.x}vw`, y: `${p.startY}vh`, opacity: 0 }}
          animate={{
            y: [`${p.startY}vh`, `${p.endY}vh`],
            x: [`${p.x}vw`, `${p.x + p.drift}vw`],
            opacity: [0, 0.8, 0.9, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            opacity: { times: [0, 0.1, 0.8, 1] },
          }}
          style={{ fontSize: `${p.size}rem` }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
