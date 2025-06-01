import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  Bot,
  Rocket,
  Star,
  Users,
  MessageSquare,
  Timer,
  Activity,
  Music,
  GitBranch,
  Heart,
  Twitter,
  Link as LinkIcon,
  Volume2,
  VolumeX
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import useSound from 'use-sound';

const Anniversary: React.FC = () => {
  // Estado do cronômetro
  const calculateTimeLeft = useCallback(() => {
    const birthday = new Date('2025-06-08T00:00:00');
    const now = new Date();
    const difference = birthday.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isBirthday: true
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isBirthday: false
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  // Ref para guardar o valor anterior de segundos, para tocar o tick quando mudar
  const prevSecondsRef = useRef<number>(timeLeft.seconds);

  // Estado para habilitar/desabilitar sons
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [playTick] = useSound('/tick.mp3', { volume: 0.5 });
  const [playCoin] = useSound('/coin.mp3', { volume: 0.5 });
  const [playSuccess] = useSound('/success.mp3', { volume: 0.5 });

  // Carregamento das partículas
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  // Opções das partículas de fundo
  const particleOptions = useMemo(() => ({
    fullScreen: false,
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: {
            enable: true,
            force: 15,
            smooth: 80
          }
        },
        resize: true,
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 150, duration: 3 },
      },
    },
    particles: {
      color: { value: ["#ec4899", "#a855f7", "#22d3ee"] },
      links: {
        color: "#ec4899",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  // Uso de efeitos colaterais para atualizar o cronômetro a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // Efeito que toca o som de tick sempre que o valor de "seconds" muda
  useEffect(() => {
    if (timeLeft.seconds !== prevSecondsRef.current) {
      if (soundEnabled) {
        playTick();
      }
      prevSecondsRef.current = timeLeft.seconds;
    }
  }, [timeLeft.seconds, playTick, soundEnabled]);

  // Lógica do Konami Code
  const [konamiIndex, setKonamiIndex] = useState(0);
  const KONAMI_CODE = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        if (konamiIndex === KONAMI_CODE.length - 1) {
          for (let i = 0; i < 10; i++) {
            setTimeout(() => {
              shootConfetti('birthday');
              shootConfetti('music');
              shootConfetti('lucky');
            }, i * 1000);
          }
          setKonamiIndex(0);
          if (soundEnabled) playSuccess();
        } else {
          setKonamiIndex(konamiIndex + 1);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex, soundEnabled]);

  // Contador de cliques no logo
  const [logoClicks, setLogoClicks] = useState(0);
  const handleLogoClick = () => {
    setLogoClicks(prev => {
      if (prev === 9) {
        shootConfetti('birthday');
        shootConfetti('music');
        shootConfetti('lucky');
        if (soundEnabled) playSuccess();
        return 0;
      }
      return prev + 1;
    });
  };

  // Detecção de "PARABENS" em inputs (este exemplo retorna sempre valor em maiúsculas)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (value.includes("PARABENS")) {
      shootConfetti('birthday');
      if (soundEnabled) playSuccess();
    }
    return value;
  };

  // Magic 8 Ball
  const MAGIC_8_BALL_RESPONSES = [
    "É certo", "Pergunte novamente mais tarde", "Não conte com isso", /* ... mais respostas ... */
  ];
  const [magic8Question, setMagic8Question] = useState("");
  const [magic8Answer, setMagic8Answer] = useState("");
  const askMagic8Ball = () => {
    if (!magic8Question.trim()) return;
    setMagic8Answer("");
    setTimeout(() => {
      const answer = MAGIC_8_BALL_RESPONSES[
        Math.floor(Math.random() * MAGIC_8_BALL_RESPONSES.length)
      ];
      setMagic8Answer(answer);
      if (soundEnabled) playSuccess();
    }, 1000);
  };

  // Gerador de piadas
  const JOKES = [
    "Por que o JavaScript se separou do Java? Porque JavaScript não é Java!",
    "Como o HTML cumprimenta o CSS? – 'Opa, estilo!'",
    /* ... mais piadas ... */
  ];
  const [currentJoke, setCurrentJoke] = useState("");
  const generateJoke = () => {
    let newJoke;
    do {
      newJoke = JOKES[Math.floor(Math.random() * JOKES.length)];
    } while (newJoke === currentJoke);
    setCurrentJoke(newJoke);
    if (soundEnabled) playSuccess();
  };

  // Flip de moeda
  const [coinFlipResult, setCoinFlipResult] = useState<null | "cara" | "coroa">(null);
  const [coinFlipping, setCoinFlipping] = useState(false);
  const flipCoin = (choice: 'cara' | 'coroa') => {
    if (coinFlipping) return;
    setCoinFlipping(true);
    if (soundEnabled) playCoin();
    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'cara' : 'coroa';
      setCoinFlipResult(result);
      setCoinFlipping(false);
    }, 1500);
  };

  // Escolha rápida
  const [quickChoiceInput, setQuickChoiceInput] = useState("");
  const [quickChoiceResult, setQuickChoiceResult] = useState("");
  const makeQuickChoice = () => {
    const options = quickChoiceInput.split(',').map(opt => opt.trim()).filter(opt => opt);
    if (options.length < 2) return;
    const choice = options[Math.floor(Math.random() * options.length)];
    setQuickChoiceResult(choice);
    if (soundEnabled) playSuccess();
  };

  // Notificações do navegador
  useEffect(() => {
    const requestNotificationPermission = async () => {
      if (Notification.permission !== "granted") {
        await Notification.requestPermission();
      }
    };
    requestNotificationPermission();
  }, []);

  // Lembra o usuário uma hora antes do aniversário
  useEffect(() => {
    const checkTime = () => {
      const birthday = new Date('2025-06-08T00:00:00');
      const now = new Date();
      const diff = birthday.getTime() - now.getTime();
      if (diff <= 3600000 && diff > 3540000) {
        if (Notification.permission === "granted") {
          new Notification("🎉 Algorhythm faz aniversário em 1 hora!");
        }
      }
    };
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Função genérica para disparar confetes
  const shootConfetti = useCallback((type: 'birthday' | 'music' | 'lucky' = 'birthday') => {
    const colors = type === 'birthday'
      ? ['#FFD700', '#FF6B6B', '#4ECDC4']
      : type === 'music'
      ? ['#45B7D1', '#96CEB4', '#FFEAA7']
      : ['#FF6B6B', '#4ECDC4', '#FFD700'];

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
      shapes: ['circle', 'square'],
      gravity: 1.2,
      scalar: 0.8,
      ticks: 100
    });
  }, []);

  // Dados de conquistas, depoimentos e roadmap (inalterados)
  const milestones = [
    { date: "8 Jun 2024", title: "Algorhythm nasce! 🐣", description: "O início de uma nova era na diversão do Discord" },
    { date: "Jul 2024", title: "Entra em atividade 📈", description: "Primeiros servidores começam a usar o bot" },
    { date: "Nov 2024", title: "Recurso de música adicionado 🎵", description: "Agora com suporte a música e playlists" },
    { date: "Fev 2025", title: "IA adicionada! 🤖", description: "Integração com modelos avançados de IA" },
    { date: "Mar 2025", title: "Maior atualização do Algorhythm 🛠️", description: "Sistema de apostas e economia virtual" },
    { date: "Abr 2025", title: "10K comandos executados 🚀", description: "Uma marca incrível alcançada" }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "34", label: "Servidores Conquistados", color: "from-cyan-500 to-cyan-600" },
    { icon: <MessageSquare className="h-6 w-6" />, value: "10.000", label: "Comandos Executados", color: "from-purple-500 to-purple-600" },
    { icon: <Star className="h-6 w-6" />, value: "100", label: "Piadas Que Fizeram Rir", color: "from-yellow-500 to-yellow-600" },
    { icon: <Activity className="h-6 w-6" />, value: "250", label: "Memes Mostrados", color: "from-green-500 to-green-600" },
    { icon: <Bot className="h-6 w-6" />, value: "500", label: "Chats com IA", color: "from-blue-500 to-blue-600" },
    { icon: <Users className="h-6 w-6" />, value: "100", label: "Novos Usuários", color: "from-pink-500 to-pink-600" },
    { icon: <Timer className="h-6 w-6" />, value: "95.3%", label: "Tempo Online", color: "from-indigo-500 to-indigo-600" }
  ];

  const testimonials = [
    {
      text: "É um bot muito interessante, um grande potencial de substituir muitos outros Bots, se você conseguir usar a IA para automatizar muitas tarefas, vai se tornar um bot essencial em qualquer server.",
      author: "Wev",
      avatar: "W"
    },
    {
      text: "Eu acho que o site é muito bom, ele é bonito e prático, além que ele explica tudo oque nós precisamos, só acho que falta coloca uma aba de avisos e notícias, mas de tudo acho muito bom, e também gosto muito do bot, as IAs são engraçadas, bot rápido e preciso, e tudo que é de bom, daria nota 8 de tão bom.",
      author: "Phonk",
      avatar: "P"
    },
    {
      text: "Não esperava muito quando vi que tinha IA, mas caramba... o Ollama do bot responde umas coisas muito inteligentes! Uso mais ele que o ChatGPT às vezes kkkkk. E o gerador de imagens? Perfeito pra fazer memes internos do servidor. Bot completo demais!",
      author: "Phoenix",
      avatar: "P"
    },
    {
      text: "É um bot que junta muitos comandos em um só lugar, o que facilita muito no uso diário, e tem muitas coisas pra se divertir.",
      author: "Marquos",
      avatar: "M"
    }
  ];

  const roadmap = [
    { icon: <Bot className="h-6 w-6" />, title: "🎮 Novos mini-games", description: "Jogos ainda mais divertidos" },
    { icon: <Bot className="h-6 w-6" />, title: "🤖 IAs mais inteligentes", description: "Modelos mais avançados" },
    { icon: <Music className="h-6 w-6" />, title: "🎵 Sistema de música", description: "Novas funcionalidades" },
    { icon: <GitBranch className="h-6 w-6" />, title: "🔧 Mais comandos", description: "Expansão geral" }
  ];

  const shareOnTwitter = () => {
    const text = encodeURIComponent("O bot Algorhythm faz 1 ano! 🎉 Vem celebrar: ");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="absolute inset-0"
          options={particleOptions}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
              🎉 ALGORHYTHM FAZ 1 ANO! 🎉
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            365 dias trazendo diversão para o Discord!
          </p>

          {timeLeft.isBirthday ? (
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-8 rounded-2xl animate-pulse">
                <h3 className="text-4xl md:text-6xl font-bold text-white">
                  🎂 PARABÉNS ALGORHYTHM! 🎂
                </h3>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Dias', value: timeLeft.days },
                { label: 'Horas', value: timeLeft.hours },
                { label: 'Minutos', value: timeLeft.minutes },
                { label: 'Segundos', value: timeLeft.seconds }
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center justify-center transition-all hover:transform hover:scale-105"
                >
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                  <span className="text-gray-400 mt-2">{item.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => shootConfetti('birthday')}
              className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              🎊 FESTA DE CONFETES! 🎊
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => shootConfetti('music')}
                className="px-4 py-2 rounded-full font-medium bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                🎵
              </button>
              <button
                onClick={() => shootConfetti('lucky')}
                className="px-4 py-2 rounded-full font-medium bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                🎲
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={shareOnTwitter}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300"
            >
              <Twitter className="h-4 w-4" />
              Compartilhar
            </button>
            <button
              onClick={copyLink}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300"
            >
              <LinkIcon className="h-4 w-4" />
              Copiar Link
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Rocket className="h-6 w-6 text-gray-400" />
        </div>
      </div>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Nossas Conquistas
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              A Jornada de 1 Ano
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500" />
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-pink-500 -translate-x-[3px]" />
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="text-sm text-gray-400 mb-2">{milestone.date}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              O que a comunidade diz
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-gray-300 mb-4">{testimonial.text}</p>
                    <p className="text-gray-400">- {testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              O que vem por aí no Ano 2
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-[1px] rounded-2xl">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Faça parte desta história!
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Adicione o Algorhythm ao seu servidor e venha celebrar com a gente!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1249143105786220584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                >
                  Adicionar ao Servidor
                </a>
                <a
                  href="https://discord.gg/dzR9EvFtye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-medium bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  Servidor de Suporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={() => setSoundEnabled(prev => !prev)}
        className="fixed bottom-4 right-4 p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
      >
        {soundEnabled ? (
          <Volume2 className="h-6 w-6 text-white" />
        ) : (
          <VolumeX className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default Anniversary;
