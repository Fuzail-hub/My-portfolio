import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ExternalLink } from 'lucide-react';

const salesData = [
  { month: 'Jan', revenue: 45000, expenses: 32000 },
  { month: 'Feb', revenue: 52000, expenses: 35000 },
  { month: 'Mar', revenue: 48000, expenses: 33000 },
  { month: 'Apr', revenue: 61000, expenses: 38000 },
  { month: 'May', revenue: 58000, expenses: 36000 },
  { month: 'Jun', revenue: 65000, expenses: 40000 },
];

const customerData = [
  { name: 'Organic', value: 400 },
  { name: 'Paid Ads', value: 300 },
  { name: 'Referral', value: 200 },
  { name: 'Social', value: 100 },
];

const userGrowth = [
  { quarter: 'Q1 2025', users: 12000 },
  { quarter: 'Q2 2025', users: 19000 },
  { quarter: 'Q3 2025', users: 25000 },
  { quarter: 'Q4 2025', users: 32000 },
  { quarter: 'Q1 2026', users: 42000 },
];

const COLORS = ['#eab308', '#fbbf24', '#facc15', '#fde047'];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black relative">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Data-driven insights from real-world analysis</p>
        </div>

        <div className="space-y-12">
          {/* Project 1 */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl shadow-yellow-500/10 p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.02] group">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl mb-2 text-white">Revenue & Expense Analysis</h3>
                  <p className="text-gray-400">Financial performance tracking and trend analysis for Q1-Q2 2026</p>
                </div>
                <button className="p-2 hover:bg-yellow-500/10 rounded-lg transition-colors border border-yellow-500/30">
                  <ExternalLink className="w-5 h-5 text-yellow-500" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">Python</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">Pandas</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">Financial Analysis</span>
              </div>
            </div>
            <div className="h-80 bg-black/50 rounded-xl p-4 border border-yellow-500/10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #eab308', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ color: '#fff' }} />
                  <Bar dataKey="revenue" fill="#eab308" name="Revenue" />
                  <Bar dataKey="expenses" fill="#6b7280" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-500">Key Insights:</strong> Revenue increased 44% from January to June, with April showing the highest growth. Profit margin improved from 28% to 38% over the period.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl shadow-yellow-500/10 p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.02] group">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl mb-2 text-white">Customer Acquisition Channel Analysis</h3>
                  <p className="text-gray-400">Marketing attribution model to optimize channel investment</p>
                </div>
                <button className="p-2 hover:bg-yellow-500/10 rounded-lg transition-colors border border-yellow-500/30">
                  <ExternalLink className="w-5 h-5 text-yellow-500" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">SQL</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">Tableau</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">Marketing Analytics</span>
              </div>
            </div>
            <div className="h-80 flex items-center justify-center bg-black/50 rounded-xl p-4 border border-yellow-500/10">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {customerData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #eab308', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-500">Key Insights:</strong> Organic search drives 40% of customer acquisitions. Recommended 30% increase in SEO budget based on ROI analysis.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl shadow-yellow-500/10 p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.02] group">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl mb-2 text-white">User Growth Forecast</h3>
                  <p className="text-gray-400">Predictive modeling for user base expansion using historical trends</p>
                </div>
                <button className="p-2 hover:bg-yellow-500/10 rounded-lg transition-colors border border-yellow-500/30">
                  <ExternalLink className="w-5 h-5 text-yellow-500" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">R</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">Time Series</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm border border-yellow-500/30">Forecasting</span>
              </div>
            </div>
            <div className="h-80 bg-black/50 rounded-xl p-4 border border-yellow-500/10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="quarter" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #eab308', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ color: '#fff' }} />
                  <Area type="monotone" dataKey="users" stroke="#eab308" fill="rgba(234, 179, 8, 0.2)" name="Active Users" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-500">Key Insights:</strong> 250% user growth over 5 quarters. Predicted to reach 60,000 users by Q2 2026 based on current trajectory and seasonal patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}