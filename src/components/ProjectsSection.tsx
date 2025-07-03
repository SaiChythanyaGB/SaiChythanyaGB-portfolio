
import { useState, useEffect, useRef } from 'react';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "AI-Powered Chat Application",
      description: "A real-time chat application powered by machine learning for intelligent responses and sentiment analysis.",
      technologies: ["Python", "React.js", "TensorFlow", "WebSocket", "Node.js"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      github: "https://github.com/SaiChythanyaGB",
      demo: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for complex data visualization with real-time analytics and machine learning insights.",
      technologies: ["React.js", "D3.js", "Python", "MongoDB", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/SaiChythanyaGB",
      demo: "#"
    },
    {
      title: "Computer Vision Platform",
      description: "Advanced image recognition system using deep learning for object detection and classification.",
      technologies: ["Python", "OpenCV", "PyTorch", "Flask", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      github: "https://github.com/SaiChythanyaGB",
      demo: "#"
    },
    {
      title: "E-Commerce AI Assistant",
      description: "Intelligent shopping assistant with personalized recommendations and natural language processing.",
      technologies: ["React.js", "Node.js", "Python", "NLP", "MySQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/SaiChythanyaGB",
      demo: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glass-panel p-6 group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-blue/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <h3 className="font-orbitron text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-white/80 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-button px-4 py-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button px-4 py-2 text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
