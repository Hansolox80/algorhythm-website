import React from 'react';
import { Activity, Server, Timer, Clock } from 'lucide-react';

const Statistics: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Estatísticas do Algorhythm
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Acompanhe o desempenho e alcance do Algorhythm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <Activity className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">10.000</h3>
            <p className="text-gray-400">Comandos executados</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <Server className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">25</h3>
            <p className="text-gray-400">Servidores ativos</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <Timer className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">95.3%</h3>
            <p className="text-gray-400">Uptime geral</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">482ms</h3>
            <p className="text-gray-400">Tempo de resposta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;