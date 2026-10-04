import React, { useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEscapingButton } from '../hooks/useEscapingButton';
import './NoButton.css';

interface NoButtonProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const NoButton: React.FC<NoButtonProps> = ({ containerRef }) => {
  const { position, message, isEscaping, escape, handleProximity } =
    useEscapingButton(containerRef);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        handleProximity(e.clientX, e.clientY, rect);
      }
    },
    [handleProximity]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      escape();
    },
    [escape]
  );

  const handleTouch = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      escape();
    },
    [escape]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        escape();
      }
    },
    [escape]
  );

  return (
    <div className="no-button-wrapper">
      <motion.button
        ref={buttonRef}
        className="no-button"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouch}
        onKeyDown={handleKeyDown}
        animate={
          position
            ? {
                x: position.x - (containerRef.current?.getBoundingClientRect().width ?? 0) / 2 + 65,
                y: position.y - 60,
                rotate: isEscaping ? [0, -12, 12, -8, 0] : 0,
                scale: isEscaping ? [1, 0.88, 1.06, 1] : 1,
              }
            : { rotate: 0, scale: 1 }
        }
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 18,
          rotate: { duration: 0.35 },
        }}
        aria-label="No (but it will escape!)"
        style={{ position: position ? 'absolute' : 'relative' }}
      >
        <span className="no-button__emoji">😏</span>
        <span>NO</span>
      </motion.button>

      <AnimatePresence>
        {message && (
          <motion.div
            key={message + Date.now()}
            className="no-button-message"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            aria-live="polite"
            aria-label={message}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NoButton;
