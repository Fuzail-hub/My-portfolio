import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Data Analyst',
    organization: 'TechCorp Solutions',
    period: 'Jan 2024 - Present',
    description: 'Leading data analytics initiatives for product development and customer insights. Built automated reporting pipelines reducing manual work by 70%.',
    achievements: [
      'Developed predictive models improving customer retention by 25%',
      'Created executive dashboards serving 50+ stakeholders',
      'Led team of 3 junior analysts'
    ]
  },
  {
    type: 'work',
    title: 'Data Analyst',
    organization: 'DataFlow Analytics',
    period: 'Mar 2022 - Dec 2023',
    description: 'Analyzed customer behavior patterns and market trends to drive business strategy and revenue growth.',
    achievements: [
      'Identified $2M in cost savings through operational analytics',
      'Designed A/B testing framework adopted company-wide',
      'Reduced report generation time by 60%'
    ]
  },
  {
    type: 'work',
    title: 'Junior Data Analyst',
    organization: 'StartupHub Inc',
    period: 'Jun 2020 - Feb 2022',
    description: 'Supported data collection, cleaning, and analysis for various business units.',
    achievements: [
      'Built SQL queries for daily KPI tracking',
      'Created visualizations for marketing campaigns',
      'Automated data quality checks'
    ]
  },
  {
    type: 'education',
    title: 'M.S. in Data Science',
    organization: 'University of Technology',
    period: '2018 - 2020',
    description: 'Focus on machine learning, statistical modeling, and big data analytics.',
    achievements: [
      'GPA: 3.9/4.0',
      'Thesis: "Predictive Analytics for E-commerce"',
      'Graduate Research Assistant'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05),transparent_50%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">My professional journey in data analytics</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-black border-4 border-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:scale-110 transition-transform">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-yellow-500" />
                  )}
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-6 hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/40 transition-all hover:scale-[1.02] group">
                  <div className="mb-4">
                    <h3 className="text-2xl mb-1 text-white">{exp.title}</h3>
                    <p className="text-yellow-500 mb-1">{exp.organization}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2 group-hover:text-gray-300 transition-colors">
                        <span className="mt-2 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0 group-hover:shadow-lg group-hover:shadow-yellow-500/50"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}