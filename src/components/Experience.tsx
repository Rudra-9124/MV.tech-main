import { Clock, Award, Target, Eye } from 'lucide-react';

export default function Experience() {
  const credentials = [
    {
      icon: Clock,
      title: '5+ Years',
      subtitle: 'Hands-on industry experience',
    },
    {
      icon: Award,
      title: 'Certified',
      subtitle: 'IBM & Google certified professional',
    },
    {
      icon: Target,
      title: 'Precision',
      subtitle: 'Focus on automation & accuracy',
    },
    {
      icon: Eye,
      title: 'Visibility',
      subtitle: 'End-to-end system monitoring',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience & <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Credibility</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Proven expertise in building enterprise-grade data infrastructure
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Expertise</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-300">AWS ecosystem architecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-300">Google Cloud Platform solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-300">Multi-cloud data integration</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-300">Production-grade reliability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-300">Measurable business outcomes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-300">Transparent execution process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
