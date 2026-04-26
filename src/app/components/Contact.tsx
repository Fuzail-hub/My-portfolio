import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Let's discuss how data can drive your business forward</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">alex.martinez@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4">Available for:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Freelance Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Full-time Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Consulting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Speaking Engagements
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-500/30 shadow-2xl shadow-yellow-500/10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 text-white placeholder-gray-500 resize-none transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}