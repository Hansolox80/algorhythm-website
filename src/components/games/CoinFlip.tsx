import React, { useState, useCallback } from 'react';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import confetti from 'canvas-confetti';
import useSound from 'use-sound';

const CoinFlip: React.FC = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<'cara' | 'coroa' | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    wins: 0,
    streak: 0,
    bestStreak: 0
  });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [playCoin] = useSound('/coin.mp3', { volume: 0.5 });
  const [playWin] = useSound('/success.mp3', { volume: 0.5 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  const flipCoin = (choice: 'cara' | 'coroa') => {
    if (isFlipping) return;

    setIsFlipping(true);
    if (soundEnabled) playCoin();

    setTimeout(() => {
      const newResult = Math.random() < 0.5 ? 'cara' : 'coroa';
      setResult(newResult);
      setIsFlipping(false);

      const won = choice === newResult;
      setStats(prev => {
        const newStreak = won ? prev.streak + 1 : 0;
        return {
          total: prev.total + 1,
          wins: won ? prev.wins + 1 : prev.wins,
          streak: newStreak,
          bestStreak: Math.max(prev.bestStreak, newStreak)
        };
      });

      if (won) {
        if (soundEnabled) playWin();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0"
        options={{
          fullScreen: false,
          particles: {
            color: {
              value: "#FFD700",
            },
            number: {
              value: 40,
              density: {
                enable: true,
                area: 800
              }
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              }
            }
          }
        }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/anniversary"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
                🪙 Cara ou Coroa Festivo
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
              <div className={`relative w-48 h-48 mx-auto mb-8 ${
                isFlipping ? 'animate-flip' : 'hover:scale-105'
              } transition-all duration-300`}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg flex items-center justify-center">
                  <div className="text-4xl">
                    {isFlipping ? '🌀' : result === 'cara' ? '🤖' : result === 'coroa' ? '🎂' : '?'}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => flipCoin('cara')}
                  disabled={isFlipping}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-50"
                >
                  Algorhythm
                </button>
                <button
                  onClick={() => flipCoin('coroa')}
                  disabled={isFlipping}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:from-purple-600 hover:to-cyan-600 transition-all disabled:opacity-50"
                >
                  1 Ano
                </button>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
              <h2 className="text-xl font-bold text-white mb-6">Estatísticas</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white mb-1">{stats.total}</p>
                  <p className="text-gray-400">Total de Jogadas</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white mb-1">
                    {stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : 0}%
                  </p>
                  <p className="text-gray-400">Taxa de Acerto</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white mb-1">{stats.streak}</p>
                  <p className="text-gray-400">Sequência Atual</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white mb-1">{stats.bestStreak}</p>
                  <p className="text-gray-400">Melhor Sequência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="fixed bottom-4 right-4 p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
      >
        {soundEnabled ? (
          <Volume2 className="h-6 w-6 text-white" />
        ) : (
          <VolumeX className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default CoinFlip;