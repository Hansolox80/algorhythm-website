import React from 'react';
import { Bot, Heart, Github, Twitter, Disc as Discord } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Bot className="h-8 w-8 text-cyan-400 mr-2" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              Algorhythm
            </h2>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://discord.gg/dzR9EvFtye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-discord hover:bg-discord/80 transition-colors"
              aria-label="Discord"
            >
              <Discord className="h-5 w-5 text-white" />
            </a>
            <a 
              href="https://x.com/BotAlgorhythm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-twitter hover:bg-twitter/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
            <a 
              href="https://github.com/Hansolox80/algorhythm-website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Algorhythm</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">Recursos</a></li>
              <li><a href="#commands" className="text-gray-400 hover:text-cyan-400 transition-colors">Comandos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><Link to="/changelog" className="text-gray-400 hover:text-cyan-400 transition-colors">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Documentação</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Guia de Início</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Lista de Comandos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Tutoriais</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Comunidade</h3>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/dzR9EvFtye" className="text-gray-400 hover:text-cyan-400 transition-colors">Servidor Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contribuidores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Feedback</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Termos de Serviço</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Diretrizes da Comunidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Algorhythm. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Feito com <Heart className="h-4 w-4 text-red-500 mx-1" /> por SoloDev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;