import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Theme } from '../themes/themes';
import './ThemeBackground.css';

interface ThemeBackgroundProps {
  theme: Theme;
  themeKey: string;
}

const ThemeBackground: React.FC<ThemeBackgroundProps> = ({ theme, themeKey }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={themeKey}
        className="theme-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ background: theme.gradient }}
        aria-hidden="true"
      >
        {/* Glow orbs */}
        <div
          className="glow-orb glow-orb--1"
          style={{ background: theme.accentColor, boxShadow: `0 0 120px 60px ${theme.glowColor}` }}
        />
        <div
          className="glow-orb glow-orb--2"
          style={{ background: theme.accentColor, boxShadow: `0 0 80px 40px ${theme.glowColor}` }}
        />
        {/* Noise texture overlay */}
        <div className="noise-overlay" />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeBackground;
