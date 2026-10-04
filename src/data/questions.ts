export interface Question {
  id: number;
  text: string;
  theme: ThemeName;
}

export type ThemeName =
  | 'love'
  | 'magic'
  | 'dream'
  | 'sunset'
  | 'heartbeat'
  | 'forever'
  | 'laughter'
  | 'powercouple'
  | 'proposal';

export const questions: Question[] = [
  {
    id: 1,
    text: "Do you admit that your face should literally be illegal because of how distracting you are?",
    theme: 'love',
  },
  {
    id: 2,
    text: "Is it true that you secretly use magic to look this gorgeous every single day?",
    theme: 'magic',
  },
  {
    id: 3,
    text: "Do you accept full responsibility for making me completely forget how to act like a normal person around you?",
    theme: 'dream',
  },
  {
    id: 4,
    text: "Will you agree that you are easily the best-looking thing to ever happen to my life?",
    theme: 'sunset',
  },
  {
    id: 5,
    text: "Are you aware that my heart does a stupid little flip every single time you smile at me?",
    theme: 'heartbeat',
  },
  {
    id: 6,
    text: "Do you accept that you're stuck with me forever as your official #1 fan and personal bodyguard?",
    theme: 'forever',
  },
  {
    id: 7,
    text: "Will you promise to never hide that stunning laugh of yours for the rest of our lives?",
    theme: 'laughter',
  },
  {
    id: 8,
    text: "Is it totally obvious to everyone that we look like an absolute power couple together?",
    theme: 'powercouple',
  },
  {
    id: 9,
    text: "So... are you ready to bring all this beauty into my life permanently and officially marry me?",
    theme: 'proposal',
  },
];
