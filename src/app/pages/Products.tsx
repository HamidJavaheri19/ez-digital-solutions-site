import { motion } from 'motion/react';
import { MapPin, BookOpen, Home, Network, CheckCircle2, ExternalLink } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import ezhomefinderImage from '../../assets/ezhomefinder.png';

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f1729] via-[#1a2238] to-[#2d3561] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              AI Products
            </h1>
            <p className="text-xl text-[#8fa5c9]">
              Platforms developed by EZ Digital Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navixi */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f] flex items-center justify-center mb-6">
                <MapPin size={40} className="text-white" />
              </div>
              
              <h2 className="text-5xl text-[#0f1729] mb-6">
                Navixi
              </h2>
              
              <p className="text-xl text-[#6b7fa8] mb-8 leading-relaxed">
                AI traffic intelligence platform that provides real-time insights and predictive analytics for smart city management and urban planning.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Real-Time Traffic Analysis</h4>
                    <p className="text-[#6b7fa8]">Monitor and analyze traffic patterns across the city in real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Predictive Analytics</h4>
                    <p className="text-[#6b7fa8]">AI-powered predictions for traffic congestion and incident detection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Smart City Integration</h4>
                    <p className="text-[#6b7fa8]">Seamlessly integrate with existing urban infrastructure systems</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://navixi.ezdigitalsolutions.nl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f1729] text-white rounded-xl hover:bg-[#1a2238] transition-all duration-200 shadow-lg shadow-[#0f1729]/10 hover:shadow-xl hover:shadow-[#0f1729]/20 group"
              >
                Visit Platform
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#5b7fc7]/20">
                <img 
                  src="https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0cmFmZmljJTIwaGVhdG1hcCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI4MDE5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Navixi Platform"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EZHomeFinder */}
      <section className="py-24 bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#5b7fc7]/20 relative">
                <img 
                  src={ezhomefinderImage} 
                  alt="EZHomeFinder Platform"
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f] flex items-center justify-center mb-6">
                <Home size={40} className="text-white" />
              </div>
              
              <h2 className="text-5xl text-[#0f1729] mb-6">
                EZHomeFinder
              </h2>
              
              <p className="text-xl text-[#6b7fa8] mb-8 leading-relaxed">
                AI-powered real estate platform that helps users find their perfect home through intelligent matching and predictive analytics.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Smart Property Matching</h4>
                    <p className="text-[#6b7fa8]">AI algorithms match properties to your preferences and lifestyle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Market Intelligence</h4>
                    <p className="text-[#6b7fa8]">Real-time insights on pricing trends and neighborhood analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Personalized Experience</h4>
                    <p className="text-[#6b7fa8]">Tailored search experience that learns from your behavior</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.ezhomefinder.nl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f1729] text-white rounded-xl hover:bg-[#1a2238] transition-all duration-200 shadow-lg shadow-[#0f1729]/10 hover:shadow-xl hover:shadow-[#0f1729]/20 group"
              >
                Explore Platform
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EZ Learning Language */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f] flex items-center justify-center mb-6">
                <BookOpen size={40} className="text-white" />
              </div>
              
              <h2 className="text-5xl text-[#0f1729] mb-6">
                EZ Learning Language
              </h2>
              
              <p className="text-xl text-[#6b7fa8] mb-8 leading-relaxed">
                AI-powered language learning platform that adapts to individual learning styles and accelerates language acquisition through intelligent personalization.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Adaptive Learning Path</h4>
                    <p className="text-[#6b7fa8]">AI adapts content and difficulty based on your progress and learning style</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Conversational Practice</h4>
                    <p className="text-[#6b7fa8]">Practice speaking with AI tutors for natural conversation practice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Progress Analytics</h4>
                    <p className="text-[#6b7fa8]">Detailed insights into your learning journey and mastery levels</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://ezlearninglanguage.nl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f1729] text-white rounded-xl hover:bg-[#1a2238] transition-all duration-200 shadow-lg shadow-[#0f1729]/10 hover:shadow-xl hover:shadow-[#0f1729]/20 group"
              >
                Learn More
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#5b7fc7]/20">
                <img 
                  src="https://images.unsplash.com/photo-1759752394243-9a1592d13f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwYXBwJTIwZGlnaXRhbCUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MjgwMTkxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="EZ Learning Language Platform"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom AI Platforms */}
      <section className="py-24 bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#5b7fc7]/20">
                <img 
                  src="https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwZW5naW5lZXJpbmclMjB0ZWFtJTIwc2NyZWVucyUyMGNvZGV8ZW58MXx8fHwxNzcyNzk3NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Custom AI Platforms"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f] rounded-3xl opacity-20 blur-2xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-[#4a5f8f] to-[#2d3561] rounded-3xl opacity-20 blur-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f] flex items-center justify-center mb-6">
                <Network size={40} className="text-white" />
              </div>
              
              <h2 className="text-5xl text-[#0f1729] mb-6">
                Custom AI Platforms
              </h2>
              
              <p className="text-xl text-[#6b7fa8] mb-8 leading-relaxed">
                Bespoke AI platforms designed and built specifically for your organization's unique requirements, workflows, and business objectives.
              </p>

              <div className="bg-white rounded-2xl p-8 border border-gray-border space-y-6 mb-8">
                <div>
                  <h3 className="text-xl text-[#0f1729] mb-4">
                    Our Approach
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#5b7fc7] flex-shrink-0 mt-2" />
                      <span className="text-[#6b7fa8]">Deep discovery of your business needs and processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#5b7fc7] flex-shrink-0 mt-2" />
                      <span className="text-[#6b7fa8]">Custom architecture designed for scalability and performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#5b7fc7] flex-shrink-0 mt-2" />
                      <span className="text-[#6b7fa8]">Integration with your existing systems and workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#5b7fc7] flex-shrink-0 mt-2" />
                      <span className="text-[#6b7fa8]">Ongoing support and continuous optimization</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl text-[#0f1729] mb-4">
                    Example Use Cases
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="px-4 py-3 bg-gray-light rounded-lg border border-gray-border">
                      <span className="text-[#6b7fa8]">Document Processing</span>
                    </div>
                    <div className="px-4 py-3 bg-gray-light rounded-lg border border-gray-border">
                      <span className="text-[#6b7fa8]">Customer Analytics</span>
                    </div>
                    <div className="px-4 py-3 bg-gray-light rounded-lg border border-gray-border">
                      <span className="text-[#6b7fa8]">Supply Chain AI</span>
                    </div>
                    <div className="px-4 py-3 bg-gray-light rounded-lg border border-gray-border">
                      <span className="text-[#6b7fa8]">Predictive Maintenance</span>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f1729] text-white rounded-xl hover:bg-[#1a2238] transition-all duration-200 shadow-lg shadow-[#0f1729]/10 hover:shadow-xl hover:shadow-[#0f1729]/20 group"
              >
                Discuss Your Project
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a Product Idea?"
        description="Let's discuss how we can help bring your AI product vision to life."
        primaryButtonText="Schedule a Call"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
}