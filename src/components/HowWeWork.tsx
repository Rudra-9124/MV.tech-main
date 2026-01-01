import { Target, PenTool, Code, Gauge, CheckCircle } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      icon: Target,
      title: 'Understand Business Goals',
      description: 'Deep dive into your objectives, challenges, and success metrics',
      number: '01',
    },
    {
      icon: PenTool,
      title: 'Design Scalable Architecture',
      description: 'Create robust, future-proof data infrastructure tailored to your needs',
      number: '02',
    },
    {
      icon: Code,
      title: 'Build Automated Pipelines',
      description: 'Develop clean, maintainable code with comprehensive error handling',
      number: '03',
    },
    {
      icon: Gauge,
      title: 'Optimize Performance',
      description: 'Fine-tune for speed, reliability, and cost-efficiency',
      number: '04',
    },
    {
      icon: CheckCircle,
      title: 'Deliver Measurable Results',
      description: 'Launch with full documentation, monitoring, and ongoing support',
      number: '05',
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How We <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            An execution-first approach focused on delivering real value
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800 hover:border-blue-500 transition-all group">
                      <div className="flex items-center gap-4 mb-4 lg:justify-end lg:flex-row-reverse">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="text-white" size={24} />
                        </div>
                        <span className="text-5xl font-bold text-blue-500/20">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 z-10"></div>

                  <div className="lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
