import { useState, useCallback } from 'react';

export function useQuestionFlow(totalQuestions: number) {
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 = intro screen
  const [isComplete, setIsComplete] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const startQuestionnaire = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  const answerYes = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      if (currentIndex >= totalQuestions - 1) {
        setIsComplete(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
      setTransitioning(false);
    }, 800);
  }, [currentIndex, totalQuestions, transitioning]);

  return {
    currentIndex,
    isComplete,
    transitioning,
    startQuestionnaire,
    answerYes,
  };
}
