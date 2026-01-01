import { Rocket, TrendingUp, Building2 } from 'lucide-react';

export default function WhoWeWorkWith() {
  const clients = [
    {
      icon: Rocket,
      title: 'Early-Stage Startups',
      description: 'Building your first data infrastructure from the ground up with scalability in mind',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Stage Companies',
      description: 'Scaling your data systems to handle increasing complexity and volume',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Building2,
      title: 'Enterprise Data Teams',
      description: 'Modernizing legacy systems and implementing cloud-native architectures',
      gradient: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <section id="clients" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Who We <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Work With</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We scale with you, from startup to enterprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group hover:transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${client.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{client.title}</h3>
                <p className="text-slate-400 leading-relaxed">{client.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-blue-500/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            We grow <span className="text-blue-500">with you</span>
          </h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're validating your first product or managing petabytes of data,
            we provide the technical expertise and strategic guidance to build data systems
            that support your business at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}
