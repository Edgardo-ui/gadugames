import { Game } from '../types';

export const games: Game[] = [
  {
    id: '1',
    title: 'Snake Game',
    description: 'Classic snake game where you need to collect food and grow without hitting the walls or yourself.',
    imageUrl: 'https://images.unsplash.com/photo-1628277613967-6abca504d0ac?auto=format&fit=crop&q=80&w=2070',
    gameUrl: '/src/games/snake/index.html'
  },
  {
    id: '2',
    title: 'Memory Match',
    description: 'Test your memory by matching pairs of cards in this classic concentration game.',
    imageUrl: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=2070',
    gameUrl: '/src/games/memory/index.html'
  }
];