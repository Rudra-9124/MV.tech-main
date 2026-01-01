import { TrendingUp, Shield, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">MV.tech</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Data-Driven</h3>
            <p className="text-slate-400">Transforming raw data into reliable, decision-ready insights</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Production-Grade</h3>
            <p className="text-slate-400">Building systems that perform reliably at scale</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Execution-Focused</h3>
            <p className="text-slate-400">Delivering measurable business outcomes</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm p-10 rounded-2xl border border-slate-700">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            <span className="font-semibold text-white">MV.tech</span> is a data-powered solution company helping businesses
            build dependable and scalable data systems. With <span className="text-blue-500 font-semibold">5+ years</span> of
            hands-on experience, we focus on designing clean data models, robust pipelines, and cloud-native architectures
            that perform reliably in production.
          </p>
          <p className="text-slate-400 text-base">
            Founded by <span className="text-blue-500 font-medium">Meet Vaghasia</span>, we specialize in turning complex
            data challenges into strategic advantages through technical excellence and proven methodologies.
          </p>
        </div>
      </div>
    </section>
  );
}
