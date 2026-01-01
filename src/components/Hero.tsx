import { ArrowRight, Database, Cloud, BarChart3, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8 opacity-60">
            <Database className="text-blue-500 animate-float" size={32} style={{ animationDelay: '0s' }} />
            <Cloud className="text-blue-500 animate-float" size={32} style={{ animationDelay: '0.2s' }} />
            <BarChart3 className="text-blue-500 animate-float" size={32} style={{ animationDelay: '0.4s' }} />
            <Zap className="text-blue-500 animate-float" size={32} style={{ animationDelay: '0.6s' }} />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Scalable,{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Data-Powered Systems
            </span>
            <br />
            That Drive Real Business Decisions
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            MV.tech designs and manages modern data platforms—ETL pipelines, cloud architectures,
            and analytics systems—so businesses can trust their data.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center"
            >
              Talk to an Expert
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
