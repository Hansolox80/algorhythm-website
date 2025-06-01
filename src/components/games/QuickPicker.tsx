import React, { useState, useCallback } from 'react';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import confetti from 'canvas-confetti';
import useSound from 'use-sound';

const QuickPicker: React.FC = () => {
  const [options, setOptions] = useState("");
  const [result, setResult] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [playSelect] = useSound('/select.mp3', { volume: 0.5 });
  const [playSuccess] = useSound('/success.mp3', { volume: 0.5 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  const makeChoice = () => {
    const optionsList = options.split(',').map(opt => opt.trim()).filter(opt => opt);
    if (optionsList.length < 2) return;

    setIsSpinning(true);
    setResult("");
    if (soundEnabled) playSelect();

    // Easter egg
    if (optionsList.includes('aniversário')) {
      setTimeout(() => {
        setResult('aniversário');
        setIsSpinning(false);
        if (soundEnabled) playSuccess();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 2000);
      return;
    }

    setTimeout(() => {
      const choice = optionsList[Math.floor(Math.random() * optionsList.length)];
      setResult(choice);
      setIsSpinning(false);
      if (soundEnabled) playSuccess();
      setHistory(prev => [choice, ...prev.slice(0, 4)]);
      confetti({
        particleCount: 50,
        spread: 45,
        origin: { y: 0.6 }
      });
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
              value: ["#FFD700", "#FF69B4", "#4169E1"],
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
                🎯 Escolhedor de Aniversário
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
              <div className={`relative w-48 h-48 mx-auto mb-8 ${
                isSpinning ? 'animate-spin-slow' : 'hover:scale-105'
              } transition-all duration-300`}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-lg flex items-center justify-center">
                  <div className="text-4xl">
                    {isSpinning ? '🎡' : result || '❓'}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={options}
                  onChange={(e) => setOptions(e.target.value)}
                  placeholder="Digite as opções separadas por vírgula..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  onKeyPress={(e) => e.key === 'Enter' && makeChoice()}
                />

                <button
                  onClick={makeChoice}
                  disabled={isSpinning}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-medium hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 transition-all disabled:opacity-50"
                >
                  🎯 Escolher
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setOptions("Pizza, Hambúrguer")}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all"
                  >
                    🍕 Pizza vs 🍔 Burger
                  </button>
                  <button
                    onClick={() => setOptions("Filme, Série")}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all"
                  >
                    🎬 Filme vs 📺 Série
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
              <h2 className="text-xl font-bold text-white mb-6">Histórico</h2>
              <div className="space-y-4">
                {history.map((item, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4">
                    <p className="text-white">{item}</p>
                  </div>
                ))}
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

export default QuickPicker;