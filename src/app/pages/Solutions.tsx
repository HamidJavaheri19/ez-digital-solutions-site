import { motion } from 'motion/react';
import { Bot, Workflow, Rocket, Users, Building2, CheckCircle2 } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export default function Solutions() {
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
              AI Solutions
            </h1>
            <p className="text-xl text-[#8fa5c9]">
              Comprehensive AI solutions designed to transform your business operations and drive measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agent Systems */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6">
                <Bot size={32} className="text-[#5b7fc7]" />
              </div>
              <h2 className="text-4xl text-[#0f1729] mb-6">
                AI Agent Systems
              </h2>
              <p className="text-lg text-[#6b7fa8] mb-8 leading-relaxed">
                Deploy intelligent AI agents that work autonomously to handle complex tasks, make decisions, and interact with your systems and customers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Customer Support Agents</h4>
                    <p className="text-[#6b7fa8]">24/7 AI-powered support that understands context and resolves queries instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Data Analysis Agents</h4>
                    <p className="text-[#6b7fa8]">Autonomous agents that process, analyze, and generate insights from your data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Process Orchestration</h4>
                    <p className="text-[#6b7fa8]">Intelligent agents that coordinate complex workflows across multiple systems</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-light to-white rounded-3xl p-8 border border-gray-border"
            >
              <h3 className="text-2xl text-[#0f1729] mb-6">Use Cases</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#5b7fc7]" />
                  <span className="text-[#6b7fa8]">Automated customer service and support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#5b7fc7]" />
                  <span className="text-[#6b7fa8]">Intelligent document processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#5b7fc7]" />
                  <span className="text-[#6b7fa8]">Personalized user experiences</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#5b7fc7]" />
                  <span className="text-[#6b7fa8]">Predictive maintenance systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#5b7fc7]" />
                  <span className="text-[#6b7fa8]">Automated quality assurance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Automation Systems */}
      <section className="py-24 bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 bg-white rounded-3xl p-8 border border-gray-border"
            >
              <h3 className="text-2xl text-[#0f1729] mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6b7fa8]">Reduce operational costs by up to 70%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6b7fa8]">Eliminate manual repetitive tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6b7fa8]">Improve accuracy and consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6b7fa8]">Scale operations effortlessly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6b7fa8]">24/7 automated operations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6">
                <Workflow size={32} className="text-[#5b7fc7]" />
              </div>
              <h2 className="text-4xl text-[#0f1729] mb-6">
                AI Automation Systems
              </h2>
              <p className="text-lg text-[#6b7fa8] mb-8 leading-relaxed">
                Transform manual processes into intelligent automated workflows that save time, reduce errors, and increase productivity across your organization.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">Workflow Automation</h4>
                  <p className="text-[#6b7fa8]">Automate complex business processes with intelligent decision-making and error handling</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">Integration Systems</h4>
                  <p className="text-[#6b7fa8]">Connect all your tools and platforms for seamless data flow and process automation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Product Development */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6">
                <Rocket size={32} className="text-[#5b7fc7]" />
              </div>
              <h2 className="text-4xl text-[#0f1729] mb-6">
                AI Product Development
              </h2>
              <p className="text-lg text-[#6b7fa8] mb-8 leading-relaxed">
                Build innovative AI-powered products from concept to launch with our full-cycle development expertise and proven methodology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-light to-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">Product Strategy</h4>
                  <p className="text-[#6b7fa8] text-sm">Define product vision and roadmap</p>
                </div>
                <div className="bg-gradient-to-br from-gray-light to-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">UX/UI Design</h4>
                  <p className="text-[#6b7fa8] text-sm">Create intuitive user experiences</p>
                </div>
                <div className="bg-gradient-to-br from-gray-light to-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">Development</h4>
                  <p className="text-[#6b7fa8] text-sm">Build scalable AI-powered systems</p>
                </div>
                <div className="bg-gradient-to-br from-gray-light to-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">Launch & Scale</h4>
                  <p className="text-[#6b7fa8] text-sm">Deploy and optimize for growth</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1765046255517-412341954c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGdyYWRpZW50JTIwbWVzaHxlbnwxfHx8fDE3NzI3NDg0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="AI Product Development"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Startup & Founder Support */}
      <section className="py-24 bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwd29ya3NwYWNlJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NzI3NDg0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Startup Support"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6">
                <Users size={32} className="text-[#5b7fc7]" />
              </div>
              <h2 className="text-4xl text-[#0f1729] mb-6">
                Startup & Founder Support
              </h2>
              <p className="text-lg text-[#6b7fa8] mb-8 leading-relaxed">
                Navigate technical challenges and accelerate growth with expert mentoring, strategic guidance, and hands-on technical support.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">Technical Architecture</h4>
                    <p className="text-[#6b7fa8]">Design scalable systems from day one</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">AI Strategy</h4>
                    <p className="text-[#6b7fa8]">Identify and implement the right AI solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#0f1729] mb-1">MVP Development</h4>
                    <p className="text-[#6b7fa8]">Launch faster with expert development support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Systems */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6">
                <Building2 size={32} className="text-[#5b7fc7]" />
              </div>
              <h2 className="text-4xl text-[#0f1729] mb-6">
                Enterprise Systems
              </h2>
              <p className="text-lg text-[#6b7fa8] mb-8 leading-relaxed">
                Deploy enterprise-grade AI infrastructure with robust security, compliance, and scalability for large-scale operations.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-light to-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">Enterprise AI Architecture</h4>
                  <p className="text-[#6b7fa8]">Scalable systems designed for mission-critical operations</p>
                </div>
                <div className="bg-gradient-to-br from-gray-light to-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">Security & Compliance</h4>
                  <p className="text-[#6b7fa8]">Enterprise-grade security with full regulatory compliance</p>
                </div>
                <div className="bg-gradient-to-br from-gray-light to-white rounded-xl p-6 border border-gray-border">
                  <h4 className="text-[#0f1729] mb-2">Integration & Migration</h4>
                  <p className="text-[#6b7fa8]">Seamlessly integrate with existing enterprise systems</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0f1729] to-[#2d3561] rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl mb-6">Enterprise Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span>Custom AI model training and deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span>Multi-region deployment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span>Dedicated support and SLAs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                  <span>Continuous monitoring and optimization</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss which AI solution is right for your organization."
        primaryButtonText="Book Strategy Call"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
}
