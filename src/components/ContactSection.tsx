
import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Let's Connect
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="glass-panel p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-blue">
                Get In Touch
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                I'm always excited to collaborate on innovative projects, discuss new opportunities, 
                or share insights about AI and web development. Let's build something amazing together!
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <a 
                    href="mailto:codewithchythanya@gmail.com"
                    className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
                  >
                    codewithchythanya@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">Social Links</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/SaiChythanyaGB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 glass-button px-4 py-3 hover:scale-105 transition-transform duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://in.linkedin.com/in/sai-chythanya-g-b-402424300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 glass-button px-4 py-3 hover:scale-105 transition-transform duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full glass-button py-4 font-semibold transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
