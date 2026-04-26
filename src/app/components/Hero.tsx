import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-yellow-500 uppercase tracking-widest text-sm animate-pulse">● Data Analyst</p>
            <h1 className="text-5xl md:text-7xl text-white leading-tight">
              Transforming Data Into <span className="text-yellow-500 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">Insights</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
           Fuzail Ali
Aspiring Data Analyst | BBA Student
Turning Raw Data into Real Decisions
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-full hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-full hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-full hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-105 inline-flex items-center gap-2 group"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
        <div className="relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-2xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1643656090647-ba85185222b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NzY2MTcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl shadow-yellow-500/20 border-4 border-yellow-500/30 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
