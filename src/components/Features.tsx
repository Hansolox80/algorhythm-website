import React from 'react';
import { 
  Gamepad2, 
  DollarSign, 
  BrainCircuit, 
  Music, 
  Wrench, 
  ShieldAlert 
} from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  commands: string[];
  color: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, commands, color }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg group">
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className="mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color.replace('bg-', 'bg-opacity-20 text-')}`}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {commands.slice(0, 4).map((command, index) => (
            <span 
              key={index} 
              className="inline-block px-2 py-1 text-sm rounded-md bg-gray-800 text-gray-300"
            >
              {command}
            </span>
          ))}
          {commands.length > 4 && (
            <span className="inline-block px-2 py-1 text-sm rounded-md bg-gray-800 text-gray-300">
              +{commands.length - 4} mais
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Diversão e Jogos",
      description: "Comandos para entretenimento sem limites para os servidores.",
      commands: ["!rolar", "!bola8", "!meme", "!cat", "!dog", "!wordbomb"],
      color: "bg-cyan-500",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Apostas",
      description: "Sistema de economia virtual incentivando a interação e competição.",
      commands: ["!apostar", "!slot", "!roleta", "!loteria", "!saldo", "!loja", "!ranking"],
      color: "bg-green-500",
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Inteligência Artificial",
      description: "Integração com modelos avançados de IA para diversas funcionalidades.",
      commands: ["!ollama", "!img", "!embed", "!chat", "!resumo"],
      color: "bg-purple-500",
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Música",
      description: "Comandos para tocar músicas diretamente no Discord.",
      commands: ["!play", "!pause", "!resume", "!stop", "!lyrics", "!volume"],
      color: "bg-pink-500",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Utilitários",
      description: "Ferramentas essenciais para gerenciar seu servidor.",
      commands: ["!ping", "!userinfo", "!serverinfo", "!remind", "!poll", "!afk", "!filme", "!série"],
      color: "bg-blue-500",
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: "Administração",
      description: "Comandos administrativos poderosos para controle total.",
      commands: ["!ban", "!kick", "!clear", "!lock", "!unlock", "!uptime"],
      color: "bg-red-500",
    },
  ];

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Recursos Poderosos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Algorhythm oferece uma ampla gama de funcionalidades para personalizar e aprimorar sua experiência no Discord.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              commands={feature.commands}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;