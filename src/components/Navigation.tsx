
import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
            <span className="text-white font-orbitron font-bold text-lg">S</span>
          </div>
          <span className="font-orbitron font-bold text-xl gradient-text">
            Sai Chythanya GB
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium transition-all duration-300 hover:text-neon-blue ${
                activeSection === item.id ? 'text-neon-blue' : 'text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/SaiChythanyaGB"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-panel hover:scale-110 transition-transform duration-300"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://in.linkedin.com/in/sai-chythanya-g-b-402424300"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-panel hover:scale-110 transition-transform duration-300"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
