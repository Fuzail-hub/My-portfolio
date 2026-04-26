import { BarChart3, Database, PieChart, Code, FileSpreadsheet, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    title: 'Data Analysis',
    icon: BarChart3,
    skills: ['Statistical Analysis', 'A/B Testing', 'Predictive Modeling', 'Data Mining']
  },
  {
    title: 'Visualization',
    icon: PieChart,
    skills: ['Tableau', 'Power BI', 'D3.js', 'Matplotlib']
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'R', 'SQL', 'JavaScript']
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery']
  },
  {
    title: 'Tools',
    icon: FileSpreadsheet,
    skills: ['Excel', 'Google Sheets', 'Jupyter', 'Git']
  },
  {
    title: 'Business Intelligence',
    icon: TrendingUp,
    skills: ['KPI Development', 'Dashboard Design', 'Reporting', 'Data Strategy']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Tools and technologies I use to analyze and visualize data</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title} 
                className="p-6 bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/40 transition-all hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-lg group-hover:from-yellow-500/30 group-hover:to-yellow-600/20 transition-all">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-400 flex items-center gap-2 group-hover:text-gray-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full group-hover:shadow-lg group-hover:shadow-yellow-500/50"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}