import React, { useState } from 'react';
import { Search, Command } from 'lucide-react';

type CommandCategory = {
  id: string;
  name: string;
  color: string;
};

type CommandData = {
  name: string;
  description: string;
  category: string;
  usage: string;
};

const CommandExplorer: React.FC = () => {
  const categories: CommandCategory[] = [
    { id: 'fun', name: 'Diversão e Jogos', color: 'from-cyan-400 to-cyan-600' },
    { id: 'gambling', name: 'Apostas', color: 'from-green-400 to-green-600' },
    { id: 'ai', name: 'Inteligência Artificial', color: 'from-purple-400 to-purple-600' },
    { id: 'music', name: 'Música', color: 'from-pink-400 to-pink-600' },
    { id: 'utility', name: 'Utilitários', color: 'from-blue-400 to-blue-600' },
    { id: 'admin', name: 'Administração', color: 'from-red-400 to-red-600' },
  ];

  const commands: CommandData[] = [
    // Diversão e Jogos
    { name: '!rolar',      description: 'Rola um dado de 6 faces.',                           category: 'fun',      usage: '!rolar' },
    { name: '!escolher',   description: 'Escolhe uma das opções fornecidas.',                  category: 'fun',      usage: '!escolher opc1,opc2,opc3' },
    { name: '!bola8',      description: 'Responde uma pergunta estilo bola 8 mágica.',         category: 'fun',      usage: '!bola8 Vou passar na prova?' },
    { name: '!piada',      description: 'Conta uma piada.',                                    category: 'fun',      usage: '!piada' },
    { name: '!prefiro',    description: 'Faz uma pergunta de "Você prefere...".',               category: 'fun',      usage: '!prefiro' },
    { name: '!ppt',        description: 'Joga pedra, papel e tesoura.',                        category: 'fun',      usage: '!ppt pedra' },
    { name: '!dado',       description: 'Rola um dado com o número de faces especificado.',    category: 'fun',      usage: '!dado 20' },
    { name: '!sorteio',    description: 'Realiza um sorteio entre participantes.',             category: 'fun',      usage: '!sorteio @user1 @user2 @user3' },
    { name: '!corrida',    description: 'Realiza uma corrida entre participantes.',            category: 'fun',      usage: '!corrida @user1 @user2' },
    { name: '!batalha',    description: 'Batalha entre dois membros.',                         category: 'fun',      usage: '!batalha @user1 @user2' },
    { name: '!adivinhar',  description: 'Adivinhe um número entre 1 e o número especificado.',  category: 'fun',      usage: '!adivinhar 50' },
    { name: '!clima',      description: 'Mostra o clima de uma cidade.',                       category: 'fun',      usage: '!clima São Paulo' },
    { name: '!meme',       description: 'Mostra um meme aleatório do Reddit.',                 category: 'fun',      usage: '!meme' },
    { name: '!golpe',      description: 'Mostra um post aleatório do subreddit r/golpe.',      category: 'fun',      usage: '!golpe' },
    { name: '!babaca',     description: 'Post do subreddit r/EuSouOBabaca com votação.',       category: 'fun',      usage: '!babaca' },
    { name: '!relato',     description: 'Mostra um post aleatório do subreddit r/RelatosDoReddit.', category: 'fun', usage: '!relato' },
    { name: '!wordbomb',   description: 'Jogo de Word Bomb no chat; quem errar é eliminado!',  category: 'fun',      usage: '!wordbomb' },

    // Apostas
    { name: '!saldo',      description: 'Mostra seu saldo atual.',                             category: 'gambling', usage: '!saldo' },
    { name: '!apostar',    description: 'Joga cara ou coroa apostando um valor.',               category: 'gambling', usage: '!apostar 100 cara' },
    { name: '!transferir', description: 'Transfere moedas para outro usuário.',                category: 'gambling', usage: '!transferir @user 50' },
    { name: '!diario',     description: 'Recebe seu bônus diário.',                            category: 'gambling', usage: '!diario' },
    { name: '!slot',       description: 'Joga na slot machine.',                               category: 'gambling', usage: '!slot 50' },
    { name: '!ranking',    description: 'Exibe o ranking dos apostadores.',                    category: 'gambling', usage: '!ranking' },
    { name: '!dado',       description: 'Joga no dado apostando um valor e palpite.',           category: 'gambling', usage: '!dado 100 3' },
    { name: '!roleta',     description: 'Joga na roleta (vermelho/preto).',                   category: 'gambling', usage: '!roleta 200 vermelho' },
    { name: '!loteria',    description: 'Participa da loteria com palpite.',                   category: 'gambling', usage: '!loteria 10 42' },
    { name: '!carta',      description: 'Joga cartas apostando um valor.',                     category: 'gambling', usage: '!carta 100' },
    { name: '!corrida',    description: 'Aposta na corrida de cavalos.',                       category: 'gambling', usage: '!corrida 150' },
    { name: '!loja',       description: 'Exibe a loja de itens.',                              category: 'gambling', usage: '!loja' },
    { name: '!comprar',    description: 'Compra um item da loja.',                             category: 'gambling', usage: '!comprar espada' },

    // Inteligência Artificial
    { name: '!ollama',     description: 'Fala com uma IA com suporte a vários modelos.',        category: 'ai',       usage: '!ollama' },
    { name: '!img',        description: 'Cria uma imagem com Stable Diffusion.',               category: 'ai',       usage: '!img um gato astronauta no espaço' },
    { name: '!embed',      description: 'Cria um embed personalizado com opção de criar com IA.', category: 'ai',     usage: '!embed' },
    { name: '!resumo',      description: 'Cria um resumo da última conversa do chat.', category: 'ai',     usage: '!resumo' },

    // Música
    { name: '!play',       description: 'Toca uma música do YouTUbe.',                            category: 'music',    usage: '!play Buddy Holy - Weezer' },
    { name: '!pause',      description: 'Pausa a música atual.',                               category: 'music',    usage: '!pause' },
    { name: '!resume',     description: 'Retoma a música pausada.',                            category: 'music',    usage: '!resume' },
    { name: '!stop',       description: 'Para a música atual.',                                category: 'music',    usage: '!stop' },
    { name: '!loop',       description: 'Ativa/desativa o loop.',                              category: 'music',    usage: '!loop' },
    { name: '!volume',     description: 'Ajusta o volume.',                                    category: 'music',    usage: '!volume 75' },
    { name: '!join',       description: 'Entra no canal de voz atual.',                        category: 'music',    usage: '!join' },
    { name: '!leave',      description: 'Sai do canal de voz.',                                category: 'music',    usage: '!leave' },
    { name: '!lyrics',     description: 'Mostra a letra da música.',                           category: 'music',    usage: '!lyrics Bohemian Rhapsody' },

    // Utilitários
    { name: '!ping',       description: 'Verifica a latência do bot.',                         category: 'utility',  usage: '!ping' },
    { name: '!userinfo',   description: 'Mostra informações sobre um usuário.',                category: 'utility',  usage: '!userinfo @user' },
    { name: '!serverinfo', description: 'Mostra informações sobre o servidor.',                category: 'utility',  usage: '!serverinfo' },
    { name: '!roleinfo',   description: 'Mostra informações sobre um cargo.',                  category: 'utility',  usage: '!roleinfo Moderador' },
    { name: '!roles',      description: 'Lista todos os cargos do servidor.',                  category: 'utility',  usage: '!roles' },
    { name: '!channelinfo',description: 'Informações sobre um canal.',                         category: 'utility',  usage: '!channelinfo #geral' },
    { name: '!channels',   description: 'Lista todos os canais de texto.',                     category: 'utility',  usage: '!channels' },
    { name: '!vote',       description: 'Cria uma votação.',                                   category: 'utility',  usage: '!vote Sim,Não,Talvez' },
    { name: '!servericon', description: 'Mostra o ícone do servidor.',                        category: 'utility',  usage: '!servericon' },
    { name: '!emojis',     description: 'Lista todos os emojis do servidor.',                  category: 'utility',  usage: '!emojis' },
    { name: '!invite',     description: 'Cria um link de convite.',                            category: 'utility',  usage: '!invite' },
    { name: '!poll',       description: 'Cria uma enquete.',                                   category: 'utility',  usage: '!poll Qual-é-a-melhor-cor? Vermelho Azul' },
    { name: '!afk',        description: 'Define sua mensagem de ausente.',                     category: 'utility',  usage: '!afk Voltando já' },
    { name: '!suggest',    description: 'Envia uma sugestão aos admins.',                      category: 'utility',  usage: '!suggest Melhorar o canal de memes' },
    { name: '!report',     description: 'Envia um relatório.',                                 category: 'utility',  usage: '!report @user Spam' },
    { name: '!membercount',description: 'Número de membros no servidor.',                      category: 'utility',  usage: '!membercount' },
    { name: '!filme',      description: 'Procura informações de um Filme.',                    category: 'utility',  usage: '!filme Inception' },
    { name: '!série',      description: 'Procura informações de uma Série.',                   category: 'utility',  usage: '!série Stranger Things' },

    // Administração
    { name: '!blacklist_add',   description: 'Adiciona usuário à blacklist (dono).',      category: 'admin', usage: '!blacklist_add @user' },
    { name: '!blacklist_remove',description: 'Remove usuário da blacklist (dono).',      category: 'admin', usage: '!blacklist_remove @user' },
    { name: '!blacklist_list',  description: 'Lista usuários na blacklist (dono).',       category: 'admin', usage: '!blacklist_list' },
    { name: '!update_message',  description: 'Atualiza uma mensagem (admin).',            category: 'admin', usage: '!update_message 123456 Novo texto' },
    { name: '!debug iniciar',   description: 'Inicia modo de debug por 24h (admin).',     category: 'admin', usage: '!debug iniciar' },
    { name: '!uptime',          description: 'Mostra o tempo que o bot está online.',     category: 'admin', usage: '!uptime' },
    { name: '!ban',             description: 'Bane um usuário do servidor.',              category: 'admin', usage: '!ban @user motivo' },
    { name: '!kick',            description: 'Expulsa um usuário do servidor.',           category: 'admin', usage: '!kick @user motivo' },
    { name: '!clear',           description: 'Limpa mensagens do chat.',                  category: 'admin', usage: '!clear 10' },
    { name: '!lock',            description: 'Tranca um canal.',                          category: 'admin', usage: '!lock #canal' },
    { name: '!unlock',          description: 'Destranca um canal.',                       category: 'admin', usage: '!unlock #canal' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('fun');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCommands = commands.filter(cmd => {
    const matchesCategory = cmd.category === selectedCategory;
    const matchesSearch =
      cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.usage.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && (!searchQuery || matchesSearch);
  });

  const getCategoryColor = (categoryId: string): string => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-400 to-gray-600';
  };

  return (
    <section id="commands" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Explore os Comandos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra todos os comandos disponíveis no Algorhythm para extrair o máximo do seu servidor.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Category sidebar */}
          <div className="w-full md:w-64 space-y-2 mb-6 md:mb-0">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Pesquisar comandos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchQuery('');
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === category.id && !searchQuery
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Commands list */}
          <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-all"
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`flex-shrink-0 p-2 rounded-md bg-gradient-to-r ${getCategoryColor(
                          command.category
                        )}`}
                      >
                        <Command className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {command.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          {command.description}
                        </p>
                        <div className="bg-gray-900 rounded px-3 py-1.5 text-sm font-mono text-gray-300">
                          {command.usage}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-8 text-gray-400">
                  <Search className="h-12 w-12 mb-4 text-gray-500" />
                  <p>Nenhum comando encontrado para "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandExplorer;
