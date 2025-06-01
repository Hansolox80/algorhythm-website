import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { PartyPopper, Gift, Cake, Music, GitBranch } from 'lucide-react';

const BirthdayCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthday: false
  });

  const calculateTimeLeft = useCallback(() => {
    const birthday = new Date('2025-06-08T00:00:00');
    const now = new Date();
    const difference = birthday.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isBirthday: true
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isBirthday: false
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const shootConfetti = useCallback(() => {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
    const shapes = ['circle', 'square'];
    
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors,
      shapes,
      gravity: 1.2,
      scalar: 0.8,
      ticks: 100
    });
  }, []);

  useEffect(() => {
    if (timeLeft.isBirthday) {
      const interval = setInterval(shootConfetti, 3000);
      return () => clearInterval(interval);
    }
  }, [timeLeft.isBirthday, shootConfetti]);

  useEffect(() => {
    const timeout = setTimeout(shootConfetti, 500);
    const interval = setInterval(shootConfetti, 30000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [shootConfetti]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Cake className="h-10 w-10 text-pink-400 animate-bounce" />
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
              ALGORHYTHM
            </span>
            <Cake className="h-10 w-10 text-pink-400 animate-bounce" />
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            Celebrando 1 Ano de Diversão no Discord!
          </p>
        </div>

        {timeLeft.isBirthday ? (
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-8 rounded-2xl animate-pulse">
              <h3 className="text-4xl md:text-6xl font-bold text-white">
                🎉 ANIVERSÁRIO! 🎉
              </h3>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center justify-center transition-all hover:transform hover:scale-105"
              >
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-gray-400 mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mb-16">
          <button
            onClick={shootConfetti}
            className="px-8 py-4 text-xl rounded-full font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            🎊 SOLTAR CONFETES! 🎊
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all hover:transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
              <PartyPopper className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">10.000</h3>
            <p className="text-gray-400">Comandos executados</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all hover:transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">25</h3>
            <p className="text-gray-400">Servidores ativos</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all hover:transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <Music className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">1K</h3>
            <p className="text-gray-400">Horas de Música</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all hover:transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <GitBranch className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">16</h3>
            <p className="text-gray-400">Updates Lançados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCountdown;