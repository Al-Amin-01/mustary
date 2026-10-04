import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './IntroScreen.css';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="intro-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="intro-heart-icon"
          animate={{ scale: [1, 1.15, 1], rotate: [-5, 5, -5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          ❤️
        </motion.div>

        <motion.h1
          className="intro-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hey, My Love...
        </motion.h1>

        <motion.p
          className="intro-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          I have a few very important questions for you.
        </motion.p>

        <motion.p
          className="intro-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Answer honestly... well, as honestly as you can. 😌
        </motion.p>

        <motion.button
          className="intro-button"
          onClick={onStart}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Start the questionnaire"
        >
          <Heart size={18} fill="white" color="white" />
          Let's Begin
        </motion.button>
      </motion.div>

      {/* Floating hearts in intro */}
      {['❤️', '💕', '💗', '💖'].map((h, i) => (
        <motion.span
          key={i}
          className="intro-float-heart"
          style={{
            left: `${20 + i * 20}%`,
            animationDelay: `${i * 1.2}s`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
          aria-hidden="true"
        >
          {h}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default IntroScreen;
