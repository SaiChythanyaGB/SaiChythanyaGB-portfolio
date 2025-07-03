
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="glass-panel p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-blue">
                My Journey
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                I'm a passionate AI and Full Stack Developer with a deep fascination for 
                creating intelligent solutions that make a real impact. My journey began 
                with curiosity about how machines can learn and adapt, leading me to 
                explore the fascinating worlds of AI, Data Science, and modern web development.
              </p>
              <p className="text-white/80 leading-relaxed">
                Today, I specialize in building end-to-end applications that leverage 
                machine learning algorithms, neural networks, and cutting-edge web technologies 
                to solve complex problems and create meaningful user experiences.
              </p>
            </div>

            <div className="glass-panel p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-purple">
                What Drives Me
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Innovation:</span> 
                    Always exploring new technologies and pushing boundaries
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mt-2"></div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Impact:</span> 
                    Building solutions that make a difference in people's lives
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2"></div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Learning:</span> 
                    Continuously expanding knowledge in AI and emerging technologies
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mt-2"></div>
                  <p className="text-white/80">
                    <span className="font-semibold text-white">Collaboration:</span> 
                    Working with teams to turn innovative ideas into reality
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              When I'm not coding, you'll find me exploring the latest AI research papers, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
