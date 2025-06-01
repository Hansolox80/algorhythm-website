import React from 'react';
import { Bot, Rocket, Check, Command, MessageSquare } from 'lucide-react';

const HowToUse: React.FC = () => {
  return (
    <section id="como-usar" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              🚀 Como Usar o Algorhythm
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Bot className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Adicione o bot no seu servidor</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <a 
                      href="https://discord.com/oauth2/authorize?client_id=1249143105786220584"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Clique aqui
                    </a>
                    {" "}para convidar o bot.
                  </p>
                  <p>Escolha o servidor (é necessário ter permissão de administrador).</p>
                  <p>Autorize as permissões e pronto: o bot já vai estar no seu servidor.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Check className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Verifique se ele está online</h3>
                <p className="text-gray-300">
                  Use o comando !ping em qualquer canal de texto pra ver se tá tudo funcionando.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Command className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Explore os comandos</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <code className="text-cyan-400">!ajuda</code>
                      <p className="text-gray-300 mt-1">Lista todos os comandos disponíveis.</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <code className="text-cyan-400">!ollama</code>
                      <p className="text-gray-300 mt-1">Fale com a IA.</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <code className="text-cyan-400">!join</code>
                      <p className="text-gray-300 mt-1">Bot entra no canal de voz.</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <code className="text-cyan-400">!play [música]</code>
                      <p className="text-gray-300 mt-1">Toca a música escolhida.</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <code className="text-cyan-400">!ping</code>
                      <p className="text-gray-300 mt-1">Veja o tempo de resposta.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <MessageSquare className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <blockquote className="text-xl md:text-2xl font-medium text-gray-300 italic">
                  "Simples, direto e brutalmente eficiente. O Algorhythm chegou pra revolucionar seu servidor."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;