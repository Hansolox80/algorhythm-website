import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-cyan-400" />
              <Lock className="h-8 w-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Política de Privacidade
              </span>
            </h1>
            <p className="text-gray-400">
              Data da última atualização: 1º de maio de 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8 mb-8">
              <p className="text-gray-300 leading-relaxed">
                A privacidade dos usuários é uma prioridade no desenvolvimento do Algorhythm, um bot de Discord que opera com foco em automação e integração com inteligência artificial. Esta Política de Privacidade descreve quais informações são acessadas, como são utilizadas e como protegemos sua confidencialidade.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  1. Informações Acessadas
                </h2>
                <p className="text-gray-300 mb-4">
                  Durante a execução de comandos, o Algorhythm pode acessar as seguintes informações do usuário e do servidor, de forma temporária:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Nome de usuário (username)</li>
                  <li>Nome de exibição no servidor (nickname)</li>
                  <li>ID do usuário</li>
                  <li>Indicador se é um bot ou não</li>
                  <li>Data de entrada do usuário no servidor</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Esses dados são utilizados exclusivamente para:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Personalizar respostas</li>
                  <li>Registrar o autor da interação no embed (quando aplicável)</li>
                  <li>Melhorar a usabilidade e o contexto de determinadas funções (ex: geração com IA)</li>
                </ul>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  2. Armazenamento de Dados
                </h2>
                <p className="text-gray-300 mb-4">
                  O Algorhythm não armazena nenhuma informação pessoal coletada. Todos os dados acessados:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>São processados em tempo real</li>
                  <li>Não são salvos em banco de dados, arquivos ou sistemas externos</li>
                  <li>São descartados imediatamente após a execução do comando</li>
                  <li>Nunca são utilizados para fins de rastreamento, publicidade ou análise de comportamento</li>
                </ul>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  3. Contexto e Mensagens
                </h2>
                <p className="text-gray-300 mb-4">
                  Em comandos que envolvem contexto de conversa (como chats com IA), o Algorhythm pode acessar as últimas mensagens do canal para fornecer uma resposta mais relevante. Essas mensagens:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>São lidas apenas durante a execução</li>
                  <li>Não são armazenadas ou registradas</li>
                  <li>São descartadas após o término do comando</li>
                </ul>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  4. Integrações Locais
                </h2>
                <p className="text-gray-300 mb-4">
                  O Algorhythm pode ser integrado a modelos de linguagem hospedados localmente. Nestes casos:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>O processamento de entrada e saída ocorre inteiramente no ambiente local</li>
                  <li>Nenhuma informação é enviada à internet</li>
                  <li>O administrador do servidor tem total controle sobre a execução</li>
                </ul>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  5. Compartilhamento de Dados
                </h2>
                <p className="text-gray-300">
                  O Algorhythm não compartilha nenhuma informação com terceiros, serviços externos, APIs públicas, redes de anúncios ou qualquer outro sistema externo ao servidor em que está instalado.
                </p>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  6. Segurança
                </h2>
                <p className="text-gray-300 mb-4">
                  Embora nenhum dado seja armazenado, o bot segue práticas seguras de desenvolvimento para garantir que:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>As informações em memória sejam utilizadas apenas para o fim pretendido</li>
                  <li>Não ocorra vazamento acidental de dados</li>
                  <li>A execução dos comandos seja protegida contra abuso</li>
                </ul>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  7. Alterações nesta Política
                </h2>
                <p className="text-gray-300">
                  Esta Política de Privacidade pode ser atualizada a qualquer momento. Alterações significativas serão comunicadas no site oficial e/ou através do changelog do bot.
                </p>
              </section>

              <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  8. Contato
                </h2>
                <p className="text-gray-300">
                  Dúvidas ou preocupações sobre privacidade podem ser encaminhadas pelo servidor oficial de suporte.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;