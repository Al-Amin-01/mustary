import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './YesButton.css';

interface YesButtonProps {
  onClick: () => void;
  accentColor: string;
  glowColor: string;
}

const YesButton: React.FC<YesButtonProps> = ({ onClick, accentColor, glowColor }) => {
  return (
    <motion.button
      className="yes-button"
      onClick={onClick}
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.93 }}
      style={{
        background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
        boxShadow: `0 0 20px ${glowColor}, 0 4px 24px ${glowColor}`,
      }}
      aria-label="Yes, I agree"
    >
      <motion.span
        className="yes-button__icon"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
      >
        <Heart size={18} fill="white" color="white" />
      </motion.span>
      <span>YES</span>
    </motion.button>
  );
};

export default YesButton;
