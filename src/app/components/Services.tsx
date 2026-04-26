import { BarChart3, Brain, Database, LineChart, PieChart, Presentation } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with custom dashboards and reports. I create interactive visualizations that help stakeholders make informed decisions quickly.',
    features: ['Custom Dashboard Design', 'KPI Tracking Systems', 'Automated Reporting', 'Real-time Analytics'],
  },
  {
    icon: Brain,
    title: 'Predictive Analytics',
    description: 'Leverage machine learning algorithms to forecast trends and identify patterns. Build predictive models that help you stay ahead of the competition.',
    features: ['Forecasting Models', 'Churn Prediction', 'Demand Planning', 'Risk Assessment'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Design and implement robust data pipelines that ensure clean, accessible data. Optimize database performance and create efficient ETL processes.',
    features: ['Data Pipeline Development', 'Database Optimization', 'ETL Automation', 'Data Quality Assurance'],
  },
  {
    icon: LineChart,
    title: 'Statistical Analysis',
    description: 'Apply advanced statistical methods to uncover insights and validate hypotheses. Conduct rigorous analysis that stands up to scrutiny.',
    features: ['A/B Testing', 'Regression Analysis', 'Hypothesis Testing', 'Trend Analysis'],
  },
  {
    icon: PieChart,
    title: 'Data Visualization',
    description: 'Create compelling visualizations that tell your data story. Design charts and graphs that are both beautiful and informative.',
    features: ['Interactive Charts', 'Executive Presentations', 'Infographic Design', 'Storytelling with Data'],
  },
  {
    icon: Presentation,
    title: 'Consulting & Training',
    description: 'Provide strategic guidance on data strategy and analytics best practices. Train teams to become more data-literate and self-sufficient.',
    features: ['Strategy Consulting', 'Team Training', 'Tool Selection', 'Best Practices'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">What I Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive data analytics services to help your business thrive in a data-driven world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all hover:scale-105 group"
              >
                <div className="mb-6">
                  <div className="inline-block p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-xl group-hover:from-yellow-500/30 group-hover:to-yellow-600/20 transition-all mb-4">
                    <Icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>

                <div className="border-t border-yellow-500/10 pt-6">
                  <h4 className="text-sm text-yellow-500 uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 flex items-center gap-2 text-sm">
                        <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl text-white mb-4">Ready to unlock the power of your data?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how data analytics can transform your business operations and drive growth.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
