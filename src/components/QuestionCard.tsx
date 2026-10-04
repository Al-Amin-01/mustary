import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Question } from '../data/questions';
import type { Theme } from '../themes/themes';
import YesButton from './YesButton';
import NoButton from './NoButton';
import ProgressIndicator from './ProgressIndicator';
import './QuestionCard.css';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  theme: Theme;
  onYes: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.95,
    transition: { duration: 0.4, ease: 'easeIn' as const },
  },
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  theme,
  onYes,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="question-card-container" ref={containerRef}>
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          className="question-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            background: theme.cardBg,
            borderColor: `${theme.accentColor}33`,
            boxShadow: `0 0 0 1px ${theme.accentColor}22, 0 8px 48px rgba(0,0,0,0.35), 0 0 80px ${theme.glowColor}`,
          }}
          onMouseMove={() => {
            // Propagate to container for NO button proximity logic
          }}
        >
          <ProgressIndicator
            current={questionNumber}
            total={totalQuestions}
            accentColor={theme.accentColor}
          />

          <div className="question-card__divider" style={{ background: `linear-gradient(90deg, transparent, ${theme.accentColor}88, transparent)` }} />

          <motion.p
            className="question-card__text"
            style={{ color: theme.textColor }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {question.text}
          </motion.p>

          <motion.div
            className="question-card__buttons"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <YesButton
              onClick={onYes}
              accentColor={theme.accentColor}
              glowColor={theme.glowColor}
            />
            <NoButton containerRef={containerRef} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuestionCard;
