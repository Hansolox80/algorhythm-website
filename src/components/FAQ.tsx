import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-cyan-400" />
          ) : (
            <Plus className="h-5 w-5 text-cyan-400" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5 px-4 text-gray-400">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como adicionar o Algorhythm ao meu servidor?",
      answer: "Clique no botão 'Adicionar ao Servidor' no topo da página. Você será redirecionado para o Discord, onde poderá escolher em qual servidor deseja adicionar o bot e autorizar as permissões necessárias."
    },
    {
      question: "O bot é gratuito?",
      answer: "Sim, o Algorhythm é completamente gratuito! Todas as funcionalidades estão disponíveis sem nenhum custo. No entanto, no futuro, é possível que tenhamos planos pagos."
    },
    {
      question: "Quais permissões o bot precisa?",
      answer: "Para funcionar corretamente, o Algorhythm precisa das seguintes permissões: Ler e Enviar Mensagens, Gerenciar Mensagens, Conectar e Falar em canais de voz, Adicionar Reações, e entre outras. A lista completa de permissões será mostrada quando você adicionar o bot ao seu servidor."
    },
    {
      question: "O sistema de economia usa dinheiro real?",
      answer: "Não! O sistema de economia do Algorhythm usa apenas moedas virtuais que não têm valor monetário real. É um sistema fechado dentro do servidor para tornar a experiência mais divertida e interativa."
    },
    {
      question: "Como reportar um bug ou sugerir um novo recurso?",
      answer: "Você pode entrar no nosso servidor de suporte através do botão 'Suporte' no site ou enviar um email para nossa equipe: suporte@algorhythm.site"
    },
    {
      question: "É possível personalizar os comandos do bot?",
      answer: "Sim! Administradores de servidores podem personalizar prefixos, habilitar/desabilitar comandos específicos e ajustar várias configurações usando alguns comandos."
    },
    // Novas Perguntas
    {
      question: "O Algorhythm coleta dados dos usuários?",
      answer: "Não coletamos nenhum dado pessoal sensível! Apenas informações mínimas para o funcionamento do bot em certos comandos, como IDs de usuários, nomes de usuários e só. — tudo respeitando as diretrizes da API do Discord. Nenhum dado é compartilhado com terceiros."
    },
    {
      question: "Como ativar os comandos de IA?",
      answer: "Os comandos de IA estão disponíveis por padrão. Basta digitar !ollama, ou usar comandos como !img. Se não estiver funcionando, verifique se o bot tem permissões de leitura e escrita no canal."
    },
    {
      question: "O Algorhythm funciona em dispositivos móveis?",
      answer: "Sim! Como é um bot do Discord, você pode usá-lo normalmente no app mobile (iOS e Android), sem limitações. Os comandos são os mesmos da versão de desktop."
    },
    {
      question: "Posso usar o bot em vários servidores?",
      answer: "Com certeza! O Algorhythm pode ser adicionado a quantos servidores você quiser. Cada servidor tem configurações independentes, então você pode personalizar à vontade."
    },
    {
      question: "Tem como resetar o progresso de um membro?",
      answer: "Não. Atualmente, administradores não podem usar comandos específicos para resetar dados de economia, experiência ou pontuação de usuários."
    },
    {
      question: "Vai ter integração com outros bots ou APIs?",
      answer: "Estamos sempre desenvolvendo novas integrações com APIs! Em breve, o Algorhythm poderá se conectar com mais APIs externas e outros bots para expandir as funcionalidades ainda mais, e até possívelmente ter sua própria API! Fique ligado nas atualizações!"
    },
    {
      question: "Como posso ver o changelog do bot?",
      answer: "Visite nossa página de atualizações no site ou entre no nosso servidor do Discord para conferir todas as novidades e correções."
    },
    {
      question: "O bot suporta múltiplos idiomas?",
      answer: "Atualmente, o Algorhythm está disponível em Português. Em breve adicionaremos suporte para outros idiomas, como o Inglês!"
    },
    {
      question: "O que fazer se o bot ficar offline?",
      answer: "Use o comando !ping para verificar o status do bot. Se estiver offline, aguarde alguns minutos ou verifique nosso servidor de suporte para atualizações."
    },
    {
      question: "Existe integração com webhooks?",
      answer: "Não. Em breve lançaremos suporte a webhooks para integrar notificações do Algorhythm com outros serviços."
    },
    {
      question: "Como posso sugerir um recurso para futuras atualizações?",
      answer: "Você pode entrar no nosso servidor do Discord para sugerir novos recursos."
    }
  ];
  

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Perguntas Frequentes
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ainda tem dúvidas? Consulte algumas das perguntas mais comuns sobre o Algorhythm.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 divide-y divide-gray-800 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 mb-6">
              Não encontrou o que estava procurando? Entre em contato com nosso suporte.
            </p>
            <a
              href="https://discord.gg/dzR9EvFtye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full font-medium bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              Servidor de Suporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;