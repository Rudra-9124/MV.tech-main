import { Database, Cloud, Box, BarChart3, Plug } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Database,
      title: 'Data Engineering & ETL Pipelines',
      description: 'Designing, building, and maintaining reliable data pipelines that automate data flow and ensure data quality.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Data Platforms (AWS & GCP)',
      description: 'Scalable cloud architectures optimized for performance, cost-efficiency, and seamless integration.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Box,
      title: 'Data Warehousing & Modeling',
      description: 'Clean, normalized schemas built specifically for analytics, reporting, and business intelligence.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting Systems',
      description: 'High-performance dashboards and reporting systems powered by advanced SQL and modern BI tools.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Plug,
      title: 'API & External Data Integrations',
      description: 'Seamless data ingestion from third-party platforms, APIs, and external data sources.',
      gradient: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            End-to-end data solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
