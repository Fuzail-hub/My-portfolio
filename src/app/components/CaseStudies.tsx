import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-Commerce Revenue Optimization',
    client: 'RetailCorp',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzY2NjUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    challenge: 'RetailCorp was experiencing declining conversion rates and needed to understand customer behavior patterns to optimize their online sales funnel.',
    solution: 'Implemented a comprehensive analytics framework using Python and SQL to analyze 2M+ customer transactions. Built predictive models to identify high-value customers and designed real-time dashboards in Tableau for monitoring KPIs.',
    results: [
      { icon: TrendingUp, metric: '34%', description: 'Increase in conversion rate' },
      { icon: DollarSign, metric: '$2.8M', description: 'Additional annual revenue' },
      { icon: Users, metric: '28%', description: 'Reduction in cart abandonment' },
    ],
    tags: ['Python', 'Tableau', 'SQL', 'Predictive Analytics'],
  },
  {
    title: 'Customer Churn Prediction Model',
    client: 'TechFlow SaaS',
    image: 'https://images.unsplash.com/photo-1758518727929-4506fc031e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzc2Njc3NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    challenge: 'TechFlow was losing 18% of their customer base annually and needed to identify at-risk customers before they churned.',
    solution: 'Developed a machine learning model using Random Forest and XGBoost algorithms to predict churn probability. Created an early warning system that alerts the customer success team 30 days before potential churn.',
    results: [
      { icon: Target, metric: '89%', description: 'Model accuracy rate' },
      { icon: Users, metric: '42%', description: 'Reduction in churn rate' },
      { icon: DollarSign, metric: '$1.2M', description: 'Retained revenue' },
    ],
    tags: ['Machine Learning', 'Python', 'R', 'Feature Engineering'],
  },
  {
    title: 'Supply Chain Optimization',
    client: 'GlobalLogistics Inc',
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NjcxMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    challenge: 'GlobalLogistics needed to reduce operational costs while maintaining service levels across their distribution network.',
    solution: 'Analyzed 3 years of logistics data to identify inefficiencies in routing and inventory management. Built optimization models and created automated reporting systems using Power BI.',
    results: [
      { icon: DollarSign, metric: '$3.5M', description: 'Annual cost savings' },
      { icon: TrendingUp, metric: '25%', description: 'Efficiency improvement' },
      { icon: Target, metric: '15%', description: 'Faster delivery times' },
    ],
    tags: ['Power BI', 'SQL', 'Optimization', 'ETL'],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-black relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">Case Studies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Real-world impact through data-driven solutions</p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500/40 transition-all group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-4 py-2 bg-yellow-500 text-black rounded-full text-sm">
                      Case Study
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl text-white mb-2">{study.title}</h3>
                    <p className="text-yellow-500 text-sm uppercase tracking-wider">Client: {study.client}</p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-yellow-500 uppercase text-sm tracking-wider mb-2">The Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-yellow-500 uppercase text-sm tracking-wider mb-2">The Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="mb-6">
                    <h4 className="text-yellow-500 uppercase text-sm tracking-wider mb-4">Key Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div key={idx} className="bg-black/50 border border-yellow-500/20 rounded-lg p-4 text-center">
                            <Icon className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
                            <div className="text-2xl text-white mb-1">{result.metric}</div>
                            <div className="text-xs text-gray-400">{result.description}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors group">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
