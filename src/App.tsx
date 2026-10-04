import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { questions } from './data/questions';
import { themes } from './themes/themes';
import { useQuestionFlow } from './hooks/useQuestionFlow';
import ThemeBackground from './components/ThemeBackground';
import FloatingParticles from './components/FloatingParticles';
import IntroScreen from './components/IntroScreen';
import QuestionCard from './components/QuestionCard';
import CelebrationScreen from './components/CelebrationScreen';
import YesBurst from './components/YesBurst';
import './App.css';

const App: React.FC = () => {
  const { currentIndex, isComplete, transitioning, startQuestionnaire, answerYes } =
    useQuestionFlow(questions.length);

  const [showBurst, setShowBurst] = useState(false);

  const handleYes = useCallback(() => {
    if (transitioning) return;
    setShowBurst(true);
    setTimeout(() => setShowBurst(false), 900);
    setTimeout(() => answerYes(), 200);
  }, [transitioning, answerYes]);

  // Determine current theme
  const isIntro = currentIndex === -1;
  const currentQuestion = !isIntro && !isComplete ? questions[currentIndex] : null;
  const currentTheme = currentQuestion
    ? themes[currentQuestion.theme]
    : isComplete
    ? themes.proposal
    : themes.love;

  return (
    <div className="app" role="main">
      {/* Animated background — always present */}
      <ThemeBackground
        theme={currentTheme}
        themeKey={isIntro ? 'intro' : isComplete ? 'complete' : String(currentIndex)}
      />

      {/* Floating particles — on questions and celebration */}
      {!isIntro && (
        <FloatingParticles
          theme={currentTheme}
          count={isComplete ? 28 : 18}
        />
      )}

      {/* YES burst */}
      <YesBurst visible={showBurst} />

      {/* Screen content */}
      <div className="app__content">
        <AnimatePresence mode="wait">
          {isIntro && (
            <motion.div key="intro" className="screen-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <IntroScreen onStart={startQuestionnaire} />
            </motion.div>
          )}

          {!isIntro && !isComplete && currentQuestion && (
            <motion.div
              key={`q-${currentIndex}`}
              className="screen-wrapper question-screen"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentIndex + 1}
                totalQuestions={questions.length}
                theme={currentTheme}
                onYes={handleYes}
              />
            </motion.div>
          )}

          {isComplete && (
            <motion.div key="celebration" className="screen-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <CelebrationScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
