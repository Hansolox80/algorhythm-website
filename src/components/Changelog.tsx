import React from 'react';
import { Bot, ArrowDown } from 'lucide-react';

type ChangelogEntry = {
  version: string;
  date: string;
  title?: string;
  changes: string[];
  description?: string;
};

const Changelog: React.FC = () => {
  const changelogs: ChangelogEntry[] = [
        {
      version: "v2.4.4",
      date: "28 de Maio de 2025",
      title: "Minor Update",
      description: "Uma pitada de amor chegou ao Algorhythm! 💘",
      changes: [
        "💘 Sistema de casamento implementado!",
        "💍 !casar [@usuário] – Casa com o seu novo amante",
        "🎂 !aniversario_casal – Mostra o seu tempo de casamento",
        "🏅 !casamento_rank – Mostra os casais mais antigos",
        "💔 !divorciar – Termina seu casamento"
      ]
    },

      {
    version: "v2.4.3",
    date: "2 de Maio de 2025",
    title: "Moderate Update",
    description: "A música não para no Algorhythm — e agora com estilo, controle e melhorias! 🎶🔥",
    changes: [
      "Redesign completo no sistema de música!",
      "Botões de controle direto no embed (play, pause, skip, etc)",
      "Barra de progresso que mostra em tempo real onde a música está",
      "Sistema de fila implementado! Agora você pode adicionar várias músicas para tocar em sequência",
      "Correções e melhorias:",
      "Corrigido um bug onde, ao definir um volume específico e ativar o loop, o volume não era mantido",
      "Adicionado o comando !addmusic para adicionar músicas à fila com mais praticidade",
      "Novo comando !skip para pular para a próxima música rapidamente"
    ]
  },

    {
      version: "v2.3.3",
      date: "29 de Abril de 2025",
      title: "Minor Update",
      changes: [
        "Alguns retoques na IA do Algorhythm",
        "Segurança adicional",
        "Cor de alguns comandos como !ajuda mudou para Burple",
        "Corrigido alguns bugs"
      ]
    },
    {
      version: "v2.3.2",
      date: "17 de Abril de 2025",
      title: "Minor Update",
      changes: [
        "Corrigimos alguns bugs que afetavam comandos e respostas",
        "As IAs do comando !ollama agora estão mais estáveis",
        "A cor do embed de ajuda mudou de verde para burple (roxinho/azulzinho padrão do Discord 💜)"
      ]
    },
    {
      version: "v2.3.1",
      date: "10 de Abril de 2025",
      title: "Moderate Update",
      description: "Mais novidades chegaram ao Algorhythm! 🚀",
      changes: [
        "🧠 !ollama - IA avançada com mais modelos!",
        "🧩 Vários modelos disponíveis para você usar diretamente no Discord:",
        "- LLaMA 3.1 (latest 8B)",
        "- LLaMA 3.2 Vision (latest 8B)",
        "- DeepSeek R1 (8B)",
        "- Gemma 3 (12B)",
        "- OpenChat (7B)",
        "❗ Ainda sem suporte a imagens (por enquanto!)",
        "🖼️ !img – Geração de imagens com IA",
        "✨ Usa o Stable Diffusion AUTOMATIC1111, com resultados impressionantes a partir de simples descrições!",
        "📝 !embed – Crie e envie embeds personalizados!",
        "📲 Adicione os campos do embed que você já conhece (Autor, título, footer, etc...)",
        "🕒 Agende para o canal e horário que quiser",
        "🖼️ Adicione imagens, thumbnails e muito mais",
        "🤖 Gere um embed automaticamente com ajuda da IA, apenas dizendo o tema!"
      ]
    },
    {
      version: "v2.1.1",
      date: "1 de Abril de 2025",
      title: "Minor Update",
      description: "Uma pequena melhoria chegou ao Algorhythm! 🚀",
      changes: [
        "🎭 Status personalizados!",
        "Agora o Algorhythm exibe status personalizados para deixar sua experiência ainda mais dinâmica!",
        "🔹 O bot pode exibir mensagens sobre comandos, eventos e novidades.",
        "🔹 Atualizações frequentes para manter tudo sempre informativo!"
      ]
    },
    {
      version: "v2.1.0",
      date: "19 de Março de 2025",
      title: "Huge Update",
      description: "A atualização mais esperada chegou ao Algorhythm! Agora, sua experiência com apostas está ainda melhor com novos comandos e melhorias.",
      changes: [
        "💰 !saldo – Veja suas moedas!",
        "🎲 !apostar [valor] [cara/coroa] – Jogue cara ou coroa!",
        "🔄 !transferir [@usuário] [valor] – Envie moedas para amigos!",
        "🎁 !diario – Pegue seu bônus diário!",
        "🎰 !slot [valor] – Aposte na slot machine!",
        "🏆 !ranking – Veja os maiores apostadores!",
        "🎲 !dado [valor] [palpite] – Teste sua sorte nos dados!",
        "🎡 !roleta [valor] [vermelho/preto] – Aposte na roleta!",
        "🎫 !loteria [valor] [palpite] – Participe da loteria!",
        "🎴 !carta [valor] – Jogue cartas e aposte!",
        "🏇 !corrida [valor] – Aposte na corrida de cavalos!",
        "🛒 !loja – Compre itens exclusivos!",
        "✅ !comprar [item] – Adquira novos itens!",
        "🎬 !filme [nome] – Pesquise informações sobre filmes!",
        "📺 !série [nome] – Encontre detalhes sobre séries!",
        "💣 !wordbomb – Jogo de sobrevivência com palavras!"
      ]
    },
    {
      version: "v1.1.0",
      date: "14 de Março de 2025",
      title: "Moderate Update",
      description: "A nova atualização do Algorhythm já está disponível! 🚀",
      changes: [
        "🔹!chat – IA mais inteligente!",
        "Agora o comando !chat foi atualizado para usar GPT-4o, substituindo o antigo modelo DistilGPT-2.",
        "💬 Respostas mais precisas e naturais",
        "📚 Suporte a dúvidas gerais, não apenas sobre o bot",
        "🤖 Ajuda com comandos do Algorhythm e outras questões técnicas",
        "🎨 !ascii – Transforme imagens em arte ASCII!",
        "📌 Exemplo de uso: !ascii (anexar uma imagem)",
        "🔊 !tts – Texto para fala!",
        "🔹 Basta digitar !tts [texto] e o bot irá gerar um arquivo de áudio com a voz sintetizada lendo a mensagem.",
        "🔹 No futuro, iremos adicionar novas vozes com suporte a várias linguagens!"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              Changelog
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Acompanhe todas as atualizações e melhorias do Algorhythm
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {changelogs.map((log, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
            >
              <div className="border-b border-gray-800 bg-gray-900/50 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    {log.title && (
                      <span className="text-cyan-400">{log.title}:</span>
                    )}
                    {log.version}
                  </h2>
                  <span className="text-gray-400 text-sm">{log.date}</span>
                </div>
                {log.description && (
                  <p className="text-gray-300">{log.description}</p>
                )}
              </div>
              <div className="p-6 space-y-3">
                {log.changes.map((change, changeIndex) => (
                  <div
                    key={changeIndex}
                    className="text-gray-300"
                  >
                    {change}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;