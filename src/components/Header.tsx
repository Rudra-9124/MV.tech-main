import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="h-10 transition-transform hover:scale-110"
            >
              <img src="/image.png" alt="MV.tech" className="h-full" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-blue-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-blue-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-slate-300 hover:text-blue-500 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
            >
              Get in Touch
            </button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-slate-300 hover:text-blue-500 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-slate-300 hover:text-blue-500 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-slate-300 hover:text-blue-500 transition-colors py-2"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Get in Touch
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
