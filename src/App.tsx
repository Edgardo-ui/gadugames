import React from 'react';
import { TowerControl as GameController } from 'lucide-react';
import { games } from './data/games';
import { GameCard } from './components/GameCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <GameController className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">My Game Library</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {games.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No games have been added yet. Add your first game to get started!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;