import { useState, useCallback, useRef } from 'react';

const escapePhrases = [
  "Nice try 😂",
  "Not so fast 😏",
  "You really thought I'd let you say no? 😂",
  "Just press YES ❤️",
  "We both know the answer 😌❤️",
  "Hehe... not happening!",
  "Too slow 😜",
  "Nope!",
  "Try again 😏",
  "You can't escape love ❤️",
];

export function useEscapingButton(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [escapeCount, setEscapeCount] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [isEscaping, setIsEscaping] = useState(false);
  const messageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const escape = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const buttonW = 130;
    const buttonH = 52;
    const padding = 16;

    const maxX = rect.width - buttonW - padding;
    const maxY = rect.height - buttonH - padding;

    // Generate a new position that's away from the current position
    let newX = Math.random() * maxX + padding / 2;
    let newY = Math.random() * maxY + padding / 2;

    // Clamp to safe bounds
    newX = Math.max(padding / 2, Math.min(newX, maxX));
    newY = Math.max(padding / 2, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
    setIsEscaping(true);

    const phraseIndex = Math.min(escapeCount, escapePhrases.length - 1);
    const phrase = escapePhrases[phraseIndex];
    setMessage(phrase);
    setEscapeCount((c) => c + 1);

    if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
    messageTimeoutRef.current = setTimeout(() => {
      setMessage(null);
    }, 1800);

    setTimeout(() => setIsEscaping(false), 400);
  }, [containerRef, escapeCount]);

  const handleProximity = useCallback(
    (mouseX: number, mouseY: number, buttonRect: DOMRect) => {
      const RADIUS = 80;
      const bCenterX = buttonRect.left + buttonRect.width / 2;
      const bCenterY = buttonRect.top + buttonRect.height / 2;
      const dist = Math.sqrt(
        (mouseX - bCenterX) ** 2 + (mouseY - bCenterY) ** 2
      );
      if (dist < RADIUS) {
        escape();
      }
    },
    [escape]
  );

  const resetPosition = useCallback(() => {
    setPosition(null);
    setEscapeCount(0);
    setMessage(null);
  }, []);

  return { position, message, isEscaping, escape, handleProximity, resetPosition };
}
