import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, RetailCorp',
    company: 'RetailCorp',
    image: 'https://images.unsplash.com/photo-1643656090647-ba85185222b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NzY2MTcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: "Alex's analytical expertise transformed our business. The predictive models and dashboards he built gave us unprecedented visibility into our operations. Our revenue increased by 34% in just 6 months!",
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'VP of Product, TechFlow SaaS',
    company: 'TechFlow SaaS',
    image: 'https://images.unsplash.com/photo-1643656090647-ba85185222b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NzY2MTcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: "The churn prediction model Alex developed saved us over $1.2M in retained revenue. His ability to translate complex data into actionable insights is remarkable. Highly recommend!",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Operations, GlobalLogistics',
    company: 'GlobalLogistics Inc',
    image: 'https://images.unsplash.com/photo-1643656090647-ba85185222b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NzY2MTcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: "Working with Alex was a game-changer. His supply chain optimization project reduced our costs by $3.5M annually. Professional, thorough, and results-driven.",
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'CMO, MarketingPro',
    company: 'MarketingPro',
    image: 'https://images.unsplash.com/photo-1643656090647-ba85185222b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NzY2MTcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: "Alex doesn't just deliver numbers—he tells compelling stories with data. The marketing analytics framework he built helped us optimize our campaigns and double our ROI.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">What clients say about working with me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all group relative"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-yellow-500" />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500/30 group-hover:border-yellow-500/50 transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10"></div>
                </div>
                <div>
                  <h4 className="text-lg text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-yellow-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
