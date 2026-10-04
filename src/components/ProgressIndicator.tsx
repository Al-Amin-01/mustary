import React from 'react';
import { motion } from 'framer-motion';
import './ProgressIndicator.css';

interface ProgressIndicatorProps {
  current: number; // 1-based
  total: number;
  accentColor: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ current, total, accentColor }) => {
  return (
    <div className="progress-indicator" aria-label={`Question ${current} of ${total}`}>
      <span className="progress-label">Question {current} of {total}</span>
      <div className="progress-hearts" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
        {Array.from({ length: total }, (_, i) => (
          <motion.span
            key={i}
            className={`progress-heart ${i < current ? 'progress-heart--filled' : 'progress-heart--empty'}`}
            initial={false}
            animate={{
              scale: i === current - 1 ? [1, 1.3, 1] : 1,
              color: i < current ? accentColor : 'rgba(255,255,255,0.25)',
            }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          >
            {i < current ? '♥' : '○'}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
