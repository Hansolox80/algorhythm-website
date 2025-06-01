import React from 'react';
import { Bot, ArrowRight, Cake } from 'lucide-react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const Hero: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0"
        options={{
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
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 150,
                duration: 3,
              },
            },
          },
          particles: {
            color: {
              value: ["#ec4899", "#a855f7", "#22d3ee"],
            },
            links: {
              color: "#ec4899",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              <div className="w-24 h-24 rounded-full border-2 border-pink-400/30 border-dashed"></div>
            </div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 shadow-lg shadow-purple-500/20">
              <Bot className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <Cake className="h-6 w-6 text-pink-400 animate-bounce" />
          <span className="text-pink-400 font-medium">Comemorando 1 ano em 8 de Jun</span>
          <Cake className="h-6 w-6 text-pink-400 animate-bounce" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
            O Bot Definitivo para
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-transparent bg-clip-text animate-gradient">
            seu Servidor Discord
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Diversão, inteligência e poder na ponta da língua!
        </p>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Transforme seu servidor em um lugar divertido, conectado e tecnológico.
          Combine jogos, apostas, IA, música e muito mais em uma única ferramenta poderosa.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1249143105786220584" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-3 rounded-full font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center"
          >
            Adicionar ao Servidor
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={scrollToFeatures}
            className="px-8 py-3 rounded-full font-medium bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 transition-all duration-300"
          >
            Ver Recursos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;