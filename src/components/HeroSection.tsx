import { useState, useEffect } from 'react';
import { ArrowDown, Hand } from 'lucide-react';
const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ['AI & Machine Learning Developer', 'Full Stack Developer', 'Data Science Enthusiast', 'Problem Solver'];
  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentPhrase) {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % phrases.length);
        } else {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, phrases]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const downloadPhoto = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/aba0deff-18cb-4f2f-86bf-c88f7dad8371.jpg';
    link.download = 'Sai_Chythanya_Photo.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="floating-shape top-20 left-10 w-32 h-32 bg-gradient-to-r from-neon-blue/20 to-transparent rounded-full blur-xl" />
      <div className="floating-shape top-40 right-20 w-48 h-48 bg-gradient-to-r from-neon-purple/20 to-transparent rounded-full blur-xl" />
      <div className="floating-shape bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-full blur-lg" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="glass-panel p-12 max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 py-[20px] my-[10px]">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-1 py-[4px]">
              <img alt="Sai Chythanya GB" className="w-full h-full rounded-full object-cover" src="/lovable-uploads/aba0deff-18cb-4f2f-86bf-c88f7dad8371.jpg" />
            </div>
          </div>

          <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 gradient-text flex items-center justify-center gap-4">
            Hi, I'm Sai Chythanya GB 
            <Hand className="w-12 h-12 md:w-16 md:h-16 text-neon-blue animate-wave animate-shake" />
          </h1>
          
          <div className="mb-8 h-16">
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              I build intelligent apps with
            </p>
            <div className="font-orbitron text-2xl md:text-3xl font-bold gradient-text h-12 flex items-center justify-center">
              {displayText}
              <span className="animate-blink border-r-2 border-neon-blue ml-1 h-8"></span>
            </div>
          </div>

          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating intelligent solutions through AI, Machine Learning, 
            and modern web technologies. Let's build the future together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={() => scrollToSection('projects')} className="glass-button px-8 py-4 text-lg font-semibold">
              View Projects
            </button>
            <button onClick={downloadPhoto} className="glass-button px-8 py-4 text-lg font-semibold">
              Download Photo
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default HeroSection;