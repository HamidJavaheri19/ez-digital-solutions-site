import { motion } from 'motion/react';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { CTASection } from '../components/CTASection';

export default function CaseStudies() {
  const caseStudies = [
    {
      category: 'Automation Systems',
      title: 'Enterprise Workflow Automation',
      summary: 'Reduced manual processing time by 75% through intelligent automation systems for a Fortune 500 company, handling thousands of documents daily with 99% accuracy.'
    },
    {
      category: 'AI Platform Development',
      title: 'Smart City Traffic Platform',
      summary: 'Built real-time AI traffic management system processing millions of data points for urban planning, improving traffic flow by 40% and reducing congestion.'
    },
    {
      category: 'Enterprise Infrastructure',
      title: 'AI-Powered Customer Service',
      summary: 'Deployed autonomous AI agents handling 10,000+ customer queries daily with 95% satisfaction rate, reducing response time from hours to seconds.'
    },
    {
      category: 'Automation Systems',
      title: 'Financial Document Processing',
      summary: 'Automated invoice and document processing for a financial services firm, reducing processing time by 85% and eliminating data entry errors.'
    },
    {
      category: 'AI Product Development',
      title: 'Healthcare Diagnostic Assistant',
      summary: 'Developed AI diagnostic support tool for healthcare providers, improving diagnostic accuracy by 30% and reducing assessment time by 60%.'
    },
    {
      category: 'Enterprise Systems',
      title: 'Supply Chain Optimization',
      summary: 'Implemented AI-powered supply chain management system for global manufacturer, reducing inventory costs by 35% and improving delivery times by 25%.'
    },
    {
      category: 'Automation Systems',
      title: 'Legal Document Analysis',
      summary: 'Created intelligent document analysis system for law firm, automating contract review and reducing legal research time by 70%.'
    },
    {
      category: 'AI Platform Development',
      title: 'Real Estate Valuation Platform',
      summary: 'Built AI platform for automated property valuation with 95% accuracy, processing valuations in minutes instead of days.'
    },
    {
      category: 'Enterprise Infrastructure',
      title: 'HR Recruitment Automation',
      summary: 'Deployed AI recruitment assistant for enterprise HR, screening 5,000+ candidates monthly and reducing time-to-hire by 50%.'
    }
  ];

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
              Case Studies
            </h1>
            <p className="text-xl text-[#8fa5c9]">
              Real-world success stories showcasing the transformative impact of our AI solutions across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl text-[#5b7fc7] mb-2">50+</div>
              <p className="text-[#6b7fa8]">Projects Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl text-[#5b7fc7] mb-2">70%</div>
              <p className="text-[#6b7fa8]">Avg. Cost Reduction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl text-[#5b7fc7] mb-2">95%</div>
              <p className="text-[#6b7fa8]">Client Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl text-[#5b7fc7] mb-2">10+</div>
              <p className="text-[#6b7fa8]">Industries Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                category={study.category}
                title={study.title}
                summary={study.summary}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-[#6b7fa8] max-w-3xl mx-auto">
              Our AI solutions have delivered results across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Financial Services',
              'Healthcare',
              'Manufacturing',
              'Retail & E-commerce',
              'Real Estate',
              'Legal Services',
              'Transportation',
              'Technology',
              'Education',
              'Supply Chain',
              'HR & Recruitment',
              'Customer Service'
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-white to-gray-light rounded-xl p-6 border border-gray-border text-center hover:border-[#5b7fc7]/30 transition-all duration-300 hover:shadow-lg"
              >
                <span className="text-[#0f1729]">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 md:p-16 border border-gray-border shadow-xl"
          >
            <div className="text-6xl text-[#5b7fc7] mb-6">"</div>
            <p className="text-2xl text-[#0f1729] mb-8 leading-relaxed">
              EZ Digital Solutions transformed our operations with their AI automation system. What used to take days now happens in minutes, and the accuracy is remarkable. Their team delivered exactly what we needed.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f]" />
              <div>
                <div className="text-[#0f1729]">Sarah Johnson</div>
                <div className="text-[#6b7fa8]">CTO, Fortune Company</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Write Your Success Story?"
        description="Let's discuss how we can help transform your business with AI."
        primaryButtonText="Book Strategy Call"
        primaryButtonLink="/contact"
        secondaryButtonText="View Solutions"
        secondaryButtonLink="/solutions"
      />
    </div>
  );
}
