import type { ThemeName } from '../data/questions';

export interface Theme {
  name: ThemeName;
  gradient: string;
  particleColor: string[];
  particleType: 'hearts' | 'stars' | 'butterflies' | 'bubbles' | 'petals' | 'sparkles' | 'crowns';
  accentColor: string;
  glowColor: string;
  cardBg: string;
  textColor: string;
}

export const themes: Record<ThemeName, Theme> = {
  love: {
    name: 'love',
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c94b7d 30%, #6b1a4d 60%, #3d0030 100%)',
    particleColor: ['#ff6b9d', '#ff8fb3', '#ffb3cc', '#ff4d88', '#ff1a6b'],
    particleType: 'hearts',
    accentColor: '#ff6b9d',
    glowColor: 'rgba(255, 107, 157, 0.4)',
    cardBg: 'rgba(255, 255, 255, 0.08)',
    textColor: '#fff0f5',
  },
  magic: {
    name: 'magic',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 30%, #1e1b4b 60%, #0f0a2e 100%)',
    particleColor: ['#a78bfa', '#c4b5fd', '#ddd6fe', '#7c3aed', '#e0e7ff'],
    particleType: 'stars',
    accentColor: '#a78bfa',
    glowColor: 'rgba(167, 139, 250, 0.4)',
    cardBg: 'rgba(255, 255, 255, 0.07)',
    textColor: '#f5f0ff',
  },
  dream: {
    name: 'dream',
    gradient: 'linear-gradient(135deg, #f9a8d4 0%, #e879a4 25%, #c084fc 60%, #7c3aed 100%)',
    particleColor: ['#fbc7e0', '#f9a8d4', '#e879a4', '#c084fc', '#ddd6fe'],
    particleType: 'butterflies',
    accentColor: '#e879a4',
    glowColor: 'rgba(232, 121, 164, 0.4)',
    cardBg: 'rgba(255, 255, 255, 0.1)',
    textColor: '#fff0fb',
  },
  sunset: {
    name: 'sunset',
    gradient: 'linear-gradient(135deg, #fcd34d 0%, #f97316 30%, #ec4899 60%, #7c3aed 100%)',
    particleColor: ['#fcd34d', '#fbbf24', '#f97316', '#ef4444', '#ec4899'],
    particleType: 'hearts',
    accentColor: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    cardBg: 'rgba(255, 255, 255, 0.09)',
    textColor: '#fffbf0',
  },
  heartbeat: {
    name: 'heartbeat',
    gradient: 'linear-gradient(135deg, #be185d 0%, #9d174d 25%, #6b21a8 60%, #1e1b4b 100%)',
    particleColor: ['#f9a8d4', '#fda4af', '#fb7185', '#e11d48', '#be185d'],
    particleType: 'hearts',
    accentColor: '#fb7185',
    glowColor: 'rgba(251, 113, 133, 0.5)',
    cardBg: 'rgba(255, 255, 255, 0.07)',
    textColor: '#fff0f3',
  },
  forever: {
    name: 'forever',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #1a1a5e 30%, #0d0d2b 60%, #000010 100%)',
    particleColor: ['#60a5fa', '#93c5fd', '#dbeafe', '#bfdbfe', '#fbbf24'],
    particleType: 'stars',
    accentColor: '#60a5fa',
    glowColor: 'rgba(96, 165, 250, 0.3)',
    cardBg: 'rgba(255, 255, 255, 0.06)',
    textColor: '#f0f8ff',
  },
  laughter: {
    name: 'laughter',
    gradient: 'linear-gradient(135deg, #fde68a 0%, #fca5a5 30%, #f0abfc 60%, #a5f3fc 100%)',
    particleColor: ['#fde68a', '#fca5a5', '#f0abfc', '#a5f3fc', '#86efac'],
    particleType: 'bubbles',
    accentColor: '#f472b6',
    glowColor: 'rgba(244, 114, 182, 0.4)',
    cardBg: 'rgba(255, 255, 255, 0.15)',
    textColor: '#3d1e4b',
  },
  powercouple: {
    name: 'powercouple',
    gradient: 'linear-gradient(135deg, #92400e 0%, #b45309 20%, #7c3aed 50%, #1e1b4b 100%)',
    particleColor: ['#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#fef3c7'],
    particleType: 'sparkles',
    accentColor: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.5)',
    cardBg: 'rgba(255, 255, 255, 0.08)',
    textColor: '#fffbeb',
  },
  proposal: {
    name: 'proposal',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 20%, #be185d 50%, #500724 80%, #1a0012 100%)',
    particleColor: ['#fca5a5', '#f87171', '#ef4444', '#fecdd3', '#fbbf24'],
    particleType: 'petals',
    accentColor: '#f87171',
    glowColor: 'rgba(248, 113, 133, 0.5)',
    cardBg: 'rgba(255, 255, 255, 0.08)',
    textColor: '#fff5f5',
  },
};
