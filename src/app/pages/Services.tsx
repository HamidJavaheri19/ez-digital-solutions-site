import { motion } from 'motion/react';
import { Search, Zap, Rocket, Users, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/CTASection';

interface ServicePackage {
  id?: string;
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
  duration: string;
}

const services: ServicePackage[] = [
  {
    id: 'ai-opportunity-scan',
    icon: Search,
    title: 'AI Opportunity Scan',
    description: 'Comprehensive analysis of your business to identify high-impact AI automation opportunities and create a strategic implementation roadmap.',
    deliverables: [
      'Business process audit',
      'AI opportunity assessment',
      'ROI analysis and projections',
      'Implementation roadmap',
      'Technology recommendations'
    ],
    outcomes: [
      'Clear understanding of AI potential',
      'Prioritized list of opportunities',
      'Strategic implementation plan'
    ],
    duration: '2-3 weeks'
  },
  {
    id: 'ai-automation-implementation',
    icon: Zap,
    title: 'AI Automation Implementation',
    description: 'End-to-end implementation of AI automation systems tailored to your specific workflows and business processes.',
    deliverables: [
      'Custom automation design',
      'AI system development',
      'Integration with existing tools',
      'Testing and optimization',
      'Team training and documentation'
    ],
    outcomes: [
      '50-70% reduction in manual work',
      'Improved accuracy and consistency',
      'Scalable automated processes'
    ],
    duration: '6-12 weeks'
  },
  {
    id: 'ai-product-mvp',
    icon: Rocket,
    title: 'AI Product MVP',
    description: 'Rapid development of AI-powered product MVPs to validate your idea and get to market quickly with core functionality.',
    deliverables: [
      'Product strategy and planning',
      'UX/UI design',
      'Core feature development',
      'AI model integration',
      'Launch support'
    ],
    outcomes: [
      'Working AI-powered product',
      'Market validation capability',
      'Foundation for scaling'
    ],
    duration: '8-16 weeks'
  },
  {
    id: 'startup-technical-mentoring',
    icon: Users,
    title: 'Startup Technical Mentoring',
    description: 'Ongoing technical mentorship and guidance to help startups navigate technical challenges and build robust AI systems.',
    deliverables: [
      'Weekly strategy sessions',
      'Architecture review and guidance',
      'Technical problem-solving',
      'Code and system reviews',
      'Best practices training'
    ],
    outcomes: [
      'Accelerated technical progress',
      'Avoided costly mistakes',
      'Improved technical capabilities'
    ],
    duration: 'Ongoing'
  },
  {
    id: 'enterprise-transformation',
    icon: Building2,
    title: 'Enterprise Transformation',
    description: 'Large-scale AI transformation programs for enterprises, including strategy, implementation, and change management.',
    deliverables: [
      'Enterprise AI strategy',
      'Multi-phase implementation',
      'Change management support',
      'Training programs',
      'Ongoing optimization'
    ],
    outcomes: [
      'Organization-wide AI adoption',
      'Measurable business impact',
      'Sustainable competitive advantage'
    ],
    duration: '6-18 months'
  }
];

export default function Services() {
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
              AI Services
            </h1>
            <p className="text-xl text-[#8fa5c9]">
              We help organizations design, build, and deploy AI systems, automation platforms, and intelligent applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Info */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-[#5b7fc7]" />
                  </div>
                  
                  <h2 className="text-3xl text-[#0f1729] mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-[#6b7fa8] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#5b7fc7]/10 to-[#4a5f8f]/10 text-[#5b7fc7] mb-8">
                    <span className="text-sm">Duration: {service.duration}</span>
                  </div>
                </div>

                {/* Deliverables & Outcomes */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-white to-gray-light rounded-2xl p-8 border border-gray-border space-y-8">
                    {/* Deliverables */}
                    <div>
                      <h3 className="text-xl text-[#0f1729] mb-4">
                        Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6b7fa8]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expected Outcomes */}
                    <div>
                      <h3 className="text-xl text-[#0f1729] mb-4">
                        Expected Outcomes
                      </h3>
                      <ul className="space-y-3">
                        {service.outcomes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#5b7fc7] flex-shrink-0 mt-2" />
                            <span className="text-[#6b7fa8]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://calendly.com/hamid-javaheri/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0f1729] text-white rounded-xl hover:bg-[#1a2238] transition-all duration-200 shadow-lg shadow-[#0f1729]/10 hover:shadow-xl hover:shadow-[#0f1729]/20 group"
                    >
                      Get Started
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">
              How We Work
            </h2>
            <p className="text-xl text-[#6b7fa8] max-w-3xl mx-auto">
              Our proven process ensures successful delivery and long-term value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Discovery', description: 'Understand your goals, challenges, and requirements' },
              { step: '2', title: 'Strategy', description: 'Design the optimal solution and implementation plan' },
              { step: '3', title: 'Delivery', description: 'Build and deploy with agile methodology' },
              { step: '4', title: 'Support', description: 'Ongoing optimization and continuous improvement' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f] text-white text-2xl mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl text-[#0f1729] mb-3">
                  {phase.title}
                </h3>
                <p className="text-[#6b7fa8]">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Help Implementing AI in Your Business?"
        description="Ready to get started? Book a call to discuss your project and explore how we can help."
        primaryButtonText="Book Strategy Call"
        primaryButtonLink="/contact"
        secondaryButtonText="View Products"
        secondaryButtonLink="/products"
      />
    </div>
  );
}