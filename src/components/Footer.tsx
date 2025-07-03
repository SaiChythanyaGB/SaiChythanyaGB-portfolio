
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
              <span className="text-white font-orbitron font-bold">S</span>
            </div>
            <span className="font-orbitron font-bold text-xl gradient-text">
              Sai Chythanya GB
            </span>
          </div>
          
          <p className="text-white/60 mb-4">
            Building the future with AI, one line of code at a time.
          </p>
          
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Sai Chythanya GB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
