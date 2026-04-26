import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <footer className="py-8 bg-black text-white text-center border-t border-yellow-500/20">
        <p className="text-gray-400">© 2026 Alex Martinez. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-1">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </footer>
    </div>
  );
}