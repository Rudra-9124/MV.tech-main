import { ArrowRight, Mail, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl border border-blue-500/30 shadow-2xl shadow-blue-500/20">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build Data Systems
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                You Can Trust?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how MV.tech can transform your data infrastructure
              into a strategic business advantage.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
              <a
                href="mailto:contact@mv.tech"
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30"
              >
                <Mail className="mr-2" size={20} />
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="mailto:contact@mv.tech?subject=Consultation Request"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white text-lg font-semibold rounded-lg border border-blue-500 hover:bg-slate-700 transition-all"
              >
                <Calendar className="mr-2" size={20} />
                Schedule a Consultation
              </a>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm mb-3">Trusted by startups, growth companies, and enterprises</p>
              <div className="flex justify-center items-center gap-8 text-blue-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm">AWS & GCP Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm">Production-Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
