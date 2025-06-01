import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Volume2, Github, Disc as Discord, Cake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed w-full z-50">
      {/* Birthday Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-2 px-4 text-center relative overflow-hidden">
        <div className="animate-pulse-slow absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Cake className="h-5 w-5 text-white animate-bounce" />
          <span className="font-medium">Aniversário do Algorhythm • 8 de Jun</span>
          <Cake className="h-5 w-5 text-white animate-bounce" />
        </div>
      </div>
      
      <header 
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-pink-400" />
            <Volume2 className="h-6 w-6 text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Algorhythm
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {location.pathname === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  Recursos
                </button>
                <button 
                  onClick={() => scrollToSection('commands')}
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  Comandos
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  FAQ
                </button>
              </>
            ) : null}
            <Link 
              to="/changelog"
              className="text-white hover:text-pink-400 transition-colors"
            >
              Changelog
            </Link>
            <Link 
              to="/how-to-use"
              className="text-white hover:text-pink-400 transition-colors"
            >
              Como Usar
            </Link>
            <Link 
              to="/invite"
              className="text-white hover:text-pink-400 transition-colors"
            >
              Convidar
            </Link>
            <Link 
              to="/anniversary"
              className="text-white hover:text-pink-400 transition-colors flex items-center gap-1"
            >
              <Cake className="h-4 w-4" />
              1 Ano
            </Link>
            <div className="flex space-x-3">
              <a 
                href="https://discord.gg/dzR9EvFtye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
              >
                <Discord className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://github.com/Hansolox80/algorhythm-website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1249143105786220584" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Adicionar ao Servidor
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden bg-gray-900/95 backdrop-blur-md absolute w-full transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[400px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {location.pathname === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-white hover:text-pink-400 py-2 border-b border-gray-800"
                >
                  Recursos
                </button>
                <button 
                  onClick={() => scrollToSection('commands')}
                  className="text-white hover:text-pink-400 py-2 border-b border-gray-800"
                >
                  Comandos
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-white hover:text-pink-400 py-2 border-b border-gray-800"
                >
                  FAQ
                </button>
              </>
            ) : null}
            <Link 
              to="/changelog"
              className="text-white hover:text-pink-400 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Changelog
            </Link>
            <Link 
              to="/how-to-use"
              className="text-white hover:text-pink-400 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Usar
            </Link>
            <Link 
              to="/invite"
              className="text-white hover:text-pink-400 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Convidar
            </Link>
            <Link 
              to="/anniversary"
              className="text-white hover:text-pink-400 py-2 border-b border-gray-800 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Cake className="h-4 w-4" />
              1 Ano
            </Link>
            <div className="flex space-x-4 py-2">
              <a 
                href="https://discord.gg/dzR9EvFtye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600"
              >
                <Discord className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://github.com/Hansolox80/algorhythm-website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-600"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1249143105786220584" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white text-center my-2"
            >
              Adicionar ao Servidor
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header