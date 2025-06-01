import React, { useState, useCallback } from 'react';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import confetti from 'canvas-confetti';
import useSound from 'use-sound';

const RESPONSES = [
  "As estrelas dizem que sim!",
  "Celebre, a resposta é sim!",
  "Hoje não...",
  "O Algorhythm diz não.",
  "Minhas fontes dizem que não.",
  "Com certeza!"
];

const Magic8Ball: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [history, setHistory] = useState<{q: string, a: string}[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [playShake] = useSound('/shake.mp3', { volume: 0.5 });
  const [playSuccess] = useSound('/success.mp3', { volume: 0.5 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  const askQuestion = async () => {
    if (!question.trim()) return;
    
    setIsShaking(true);
    setAnswer("");
    if (soundEnabled) playShake();

    // Easter egg
    if (question.toLowerCase().includes('algorhythm')) {
      setTimeout(() => {
        setAnswer("O Algorhythm é o melhor bot de todos! 🎉");
        setIsShaking(false);
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
      const newAnswer = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
      setAnswer(newAnswer);
      setIsShaking(false);
      if (soundEnabled) playSuccess();
      setHistory(prev => [{q: question, a: newAnswer}, ...prev.slice(0, 4)]);
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
                🎱 Bola 8 Mágica de Aniversário
              </span>
            </h1>
          </div>

          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 mb-8">
              <div className={`relative w-48 h-48 mx-auto mb-8 transition-transform duration-500 ${
                isShaking ? 'animate-shake' : 'hover:scale-105'
              }`}>
                <div className="absolute inset-0 bg-black rounded-full shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center">
                    <div className="text-white text-center p-2 text-sm">
                      {answer || "8"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Faça sua pergunta mágica..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  onKeyPress={(e) => e.key === 'Enter' && askQuestion()}
                />

                <button
                  onClick={askQuestion}
                  disabled={isShaking}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-medium hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 transition-all disabled:opacity-50"
                >
                  🔮 Fazer Pergunta
                </button>
              </div>
            </div>

            {history.length > 0 && (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                <h2 className="text-xl font-bold text-white mb-4">Histórico de Perguntas</h2>
                <div className="space-y-4">
                  {history.map((item, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4">
                      <p className="text-gray-400 mb-2">Pergunta: {item.q}</p>
                      <p className="text-white">Resposta: {item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

export default Magic8Ball;