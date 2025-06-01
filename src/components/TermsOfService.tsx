import React from 'react';
import { Shield, FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-cyan-400" />
              <FileText className="h-8 w-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Termos de Serviço
              </span>
            </h1>
            <p className="text-gray-400">
              Última atualização: 02/05/2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Seja bem-vindo ao Algorhythm! Ao utilizar o bot Algorhythm em servidores do Discord, você concorda com os seguintes termos de serviço:
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Uso do Bot</h2>
                <div className="text-gray-300 space-y-4">
                  <p>O Algorhythm é um bot gratuito com funcionalidades de inteligência artificial e utilidades diversas.</p>
                  <p>O uso do bot deve respeitar os Termos de Serviço e Diretrizes da Comunidade do Discord.</p>
                  <p>O usuário é totalmente responsável por como utiliza os comandos do bot em seu servidor.</p>
                </div>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Privacidade e Dados</h2>
                <div className="text-gray-300 space-y-4">
                  <p>O Algorhythm pode coletar e armazenar informações como IDs de mensagens, canais e usuários, com o objetivo de manter contexto e melhorar as respostas da IA.</p>
                  <p>Nenhum dado pessoal sensível (nome real, e-mail, IP etc.) é coletado.</p>
                  <p>Dados gerados ou armazenados não são compartilhados com terceiros.</p>
                  <p>O bot pode usar modelos locais (como Ollama) para geração de texto, sem conexão com servidores externos.</p>
                </div>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Limitações e Responsabilidades</h2>
                <div className="text-gray-300 space-y-4">
                  <p>O Algorhythm é fornecido "como está", sem garantias de funcionamento contínuo, precisão das respostas da IA ou compatibilidade com todos os servidores.</p>
                  <p>A equipe responsável não se responsabiliza por qualquer dano, perda ou mal uso causado por comandos executados com o bot.</p>
                  <p>Respostas geradas por IA são automáticas e podem conter informações imprecisas ou inadequadas. Use com discernimento.</p>
                </div>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Suspensão ou Remoção</h2>
                <div className="text-gray-300 space-y-4">
                  <p>O bot pode ser removido de um servidor a qualquer momento se houver abuso, spam, uso malicioso ou violação deste termo.</p>
                  <p>A equipe do Algorhythm se reserva o direito de suspender funcionalidades ou desativar o bot a qualquer momento, com ou sem aviso prévio.</p>
                </div>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Alterações nos Termos</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Este Termo de Serviço pode ser alterado a qualquer momento. Mudanças importantes serão destacadas no site oficial ou em atualizações via Discord.</p>
                  <p>O uso contínuo do bot após alterações implica aceitação dos novos termos.</p>
                </div>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Contato</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Dúvidas, sugestões ou problemas? Fale com a equipe pelo Discord de suporte ou através do comando !ajuda.</p>
                  <p>Ao utilizar os comandos do Algorhythm, você concorda com este Termo de Serviço.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;