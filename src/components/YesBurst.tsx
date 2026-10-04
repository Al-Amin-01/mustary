import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './YesBurst.css';

interface YesBurstProps {
  visible: boolean;
}

const hearts = ['❤️', '💕', '💗', '💖', '💓', '🥰'];

const YesBurst: React.FC<YesBurstProps> = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <div className="yes-burst" aria-hidden="true">
          {Array.from({ length: 14 }, (_, i) => {
            const angle = (i / 14) * 360;
            const distance = 80 + Math.random() * 60;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * distance;
            const y = Math.sin(rad) * distance;
            return (
              <motion.span
                key={i}
                className="yes-burst__heart"
                initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  x: x,
                  y: y,
                  scale: [0, 1.4, 0.8],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.025,
                  ease: 'easeOut',
                }}
              >
                {hearts[i % hearts.length]}
              </motion.span>
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
};

export default YesBurst;
