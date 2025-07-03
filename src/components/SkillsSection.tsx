
import { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Python', level: 95, category: 'AI/ML' },
    { name: 'Machine Learning', level: 90, category: 'AI/ML' },
    { name: 'Deep Learning', level: 85, category: 'AI/ML' },
    { name: 'React.js', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'TensorFlow', level: 87, category: 'AI/ML' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills one by one
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, skills[index].name]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['AI/ML', 'Frontend', 'Backend', 'Database'];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML': return 'from-neon-blue to-blue-400';
      case 'Frontend': return 'from-neon-purple to-purple-400';
      case 'Backend': return 'from-green-400 to-emerald-500';
      case 'Database': return 'from-orange-400 to-red-500';
      default: return 'from-neon-blue to-neon-purple';
    }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Technical Skills
          </h2>

          <div className="max-w-4xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="mb-12">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-center">
                  <span className={`bg-gradient-to-r ${getCategoryColor(category)} bg-clip-text text-transparent`}>
                    {category}
                  </span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div 
                        key={skill.name}
                        className="glass-panel p-6"
                        style={{ animationDelay: `${(categoryIndex * 2 + index) * 0.1}s` }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-white">{skill.name}</span>
                          <span className="text-sm text-white/70">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${getCategoryColor(category)} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                              boxShadow: animatedSkills.includes(skill.name) ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Continuously learning and adapting to new technologies. 
              Currently exploring advanced AI techniques and cloud computing platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
