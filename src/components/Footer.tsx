import { Database, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/image.png" alt="MV.tech" className="h-10" />
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Data-Powered Solutions for Scalable Growth. Building enterprise-grade
              data infrastructure that drives real business decisions.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:contact@mv.tech"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} className="text-slate-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-slate-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-slate-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Data Engineering</li>
              <li>Cloud Platforms</li>
              <li>Data Warehousing</li>
              <li>Analytics & BI</li>
              <li>API Integrations</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 MV.tech. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Founded by <span className="text-blue-500">Meet Vaghasia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
