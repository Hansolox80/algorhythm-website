import React from 'react';
import { Bot, Zap } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Pronto para potencializar seu servidor?
                </h2>
              </div>
              <p className="text-gray-300 mb-6 md:mb-0 max-w-xl">
                Adicione o Algorhythm agora e transforme seu servidor do Discord com jogos, 
                IA avançada, música e muito mais. Comece a usar gratuitamente!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://discord.com/oauth2/authorize?client_id=1249143105786220584"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center"
              >
                Adicionar ao Servidor
              </a>
              <a
                href="https://discord.gg/dzR9EvFtye"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full font-medium bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center"
              >
                Servidor de Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;