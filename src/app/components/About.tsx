import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Coffee, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Coffee, value: '500+', label: 'Hours of Analysis' },
  { icon: TrendingUp, value: '40%', label: 'Average ROI Increase' },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Transforming raw data into strategic insights</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc3NjY3NjY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="relative rounded-2xl shadow-2xl shadow-yellow-500/20 border border-yellow-500/20 w-full h-[400px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-lg">
                With over <span className="text-yellow-500 font-semibold">5+ years of experience</span> in data analytics, I specialize in transforming complex datasets into actionable business strategies. My passion lies in uncovering hidden patterns and translating them into compelling visualizations that drive decision-making.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I combine technical expertise in <span className="text-yellow-500">Python, SQL, and advanced statistical methods</span> with strong business acumen to deliver insights that matter. Whether it's building predictive models, designing executive dashboards, or conducting A/B tests, I focus on creating tangible value.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My approach is <span className="text-yellow-500">data-driven yet human-centered</span>—I believe the best analytics tell a story that everyone can understand and act upon.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500">
                Machine Learning
              </div>
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500">
                Statistical Analysis
              </div>
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500">
                Data Storytelling
              </div>
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500">
                Business Intelligence
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-6 text-center hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all hover:scale-105 group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-all">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
                <div className="text-3xl text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
