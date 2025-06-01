import React from 'react';
import { Bot, ArrowDown, Shield, Users, Zap, MessageSquare } from 'lucide-react';

const Invite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span
              className="
                bg-gradient-to-r 
                from-cyan-400 via-purple-500 to-blue-500 
                text-transparent bg-clip-text 
                bg-[length:200%_200%] 
                animate-gradient-x
              "
            >
              Adicione o Algorhythm
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforme seu servidor com o bot mais completo do Discord
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div className="border-b border-gray-800 bg-gray-900/50 p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400">Permissões Necessárias</span>
                </h2>
              </div>
              <p className="text-gray-300">
                O Algorhythm precisa das seguintes permissões para funcionar corretamente:
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Mensagens</h3>
                    <p className="text-gray-400 text-sm">Ler, enviar e gerenciar mensagens</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-start gap-3">
                  <Users className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Membros</h3>
                    <p className="text-gray-400 text-sm">Ver membros e seus status</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-start gap-3">
                  <Shield className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Moderação</h3>
                    <p className="text-gray-400 text-sm">Gerenciar cargos e canais</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-start gap-3">
                  <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Voz</h3>
                    <p className="text-gray-400 text-sm">Conectar e falar em canais de voz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                  <div className="w-24 h-24 rounded-full border-2 border-cyan-400/30 border-dashed"></div>
                </div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-purple-500/20">
                  <Bot className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Pronto para começar?</h2>
            <p className="text-gray-400 mb-6">
              Clique no botão abaixo para adicionar o Algorhythm ao seu servidor
            </p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1249143105786220584"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Adicionar ao Servidor
            </a>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div className="border-b border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-cyan-400">Perguntas Frequentes</span>
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">Preciso pagar algo?</h3>
                  <p className="text-gray-400">Não! O Algorhythm é completamente gratuito para usar.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">Posso personalizar as permissões?</h3>
                  <p className="text-gray-400">Sim, você pode ajustar as permissões do bot durante o processo de convite.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">Como obter suporte?</h3>
                  <p className="text-gray-400">Entre em nosso servidor de suporte ou veja o FAQ na página inicial.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;
