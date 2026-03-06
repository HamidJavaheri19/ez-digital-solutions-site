import { motion } from 'motion/react';
import { Target, Users, Award, Zap } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export default function About() {
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
              About Us
            </h1>
            <p className="text-xl text-[#8fa5c9]">
              Building the future of intelligent automation, one system at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                <Target size={32} className="text-[#5b7fc7]" />
              </div>
              <h2 className="text-4xl text-[#0f1729] mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-[#6b7fa8] mb-6 leading-relaxed">
                At EZ Digital Solutions, we're on a mission to make AI accessible and practical for businesses of all sizes. We believe that intelligent automation should empower people, not replace them.
              </p>
              <p className="text-lg text-[#6b7fa8] leading-relaxed">
                Our goal is to build AI systems that solve real problems, deliver measurable value, and transform how modern businesses operate. We focus on creating solutions that are not just technologically advanced, but also practical, scalable, and impactful.
              </p>
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
                  src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBzdGFydHVwJTIwb2ZmaWNlJTIwRXVyb3BlfGVufDF8fHx8MTc3Mjc5NzQzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern tech team collaboration"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b7fc7]/15 to-transparent" />
              </div>
              {/* Decorative glow */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#5b7fc7]/12 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-[#6b7fa8] max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on delivering measurable business impact, not just technology for its own sake.'
              },
              {
                icon: Users,
                title: 'Client-Centric',
                description: 'Your success is our success. We partner closely with clients to ensure optimal outcomes.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we build and deliver.'
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We stay at the forefront of AI technology to bring you the best solutions.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-border hover:border-[#5b7fc7]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#5b7fc7]/5"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-[#5b7fc7]" />
                </div>
                <h3 className="text-xl text-[#0f1729] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#6b7fa8] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">
                Leadership
              </h2>
              <p className="text-xl text-[#6b7fa8]">
                Guided by deep expertise and a passion for innovation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-gray-light rounded-3xl p-8 md:p-12 border border-gray-border"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f]" />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl text-[#0f1729] mb-2">
                    Founder & Technical Director
                  </h3>
                  <p className="text-[#6b7fa8] text-lg">
                    EZ Digital Solutions B.V.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[#6b7fa8] leading-relaxed">
                <p>
                  With over 15 years of experience in enterprise technology, the founder has led the development of AI systems, automation platforms, and intelligent digital products across multiple industries.
                </p>
                <p>
                  EZ Digital Solutions was founded with the vision of making AI practical and accessible for businesses. The company focuses on designing and building AI-powered systems, automation workflows, and intelligent platforms that help organizations improve efficiency and unlock new capabilities.
                </p>
                <p>
                  Our approach combines deep technical expertise with a practical, results-oriented mindset. We build AI systems that integrate with real business operations and deliver measurable value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
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
              Experience Highlights
            </h2>
            <p className="text-xl text-[#6b7fa8] max-w-3xl mx-auto">
              Proven track record across industries and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '15+ Years',
                subtitle: 'Enterprise Technology',
                description: 'Deep expertise in building and deploying enterprise-scale systems'
              },
              {
                title: '50+ Projects',
                subtitle: 'AI Implementations',
                description: 'Successfully delivered automation and AI systems across industries'
              },
              {
                title: '100+ Deployments',
                subtitle: 'AI Systems',
                description: 'Deployed and scaled AI solutions serving millions of users'
              },
              {
                title: 'Fortune 500',
                subtitle: 'Client Experience',
                description: 'Worked with leading global enterprises on critical systems'
              },
              {
                title: 'Startup Advisory',
                subtitle: 'Technical Mentoring',
                description: 'Guided numerous startups through technical challenges and scaling'
              },
              {
                title: 'Full-Stack',
                subtitle: 'AI Expertise',
                description: 'End-to-end capabilities from strategy to deployment and scaling'
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-border text-center hover:border-[#5b7fc7]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#5b7fc7]/5"
              >
                <div className="text-3xl text-[#5b7fc7] mb-2">
                  {highlight.title}
                </div>
                <div className="text-lg text-[#0f1729] mb-3">
                  {highlight.subtitle}
                </div>
                <p className="text-[#6b7fa8]">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-6">
              Our Approach to AI Systems
            </h2>
            <p className="text-xl text-[#6b7fa8] mb-12 leading-relaxed">
              We believe that successful AI implementation requires more than just technical expertise. It requires understanding your business, your challenges, and your goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-border">
                <div className="text-4xl text-[#5b7fc7] mb-4">01</div>
                <h3 className="text-xl text-[#0f1729] mb-3">Business First</h3>
                <p className="text-[#6b7fa8]">
                  We start with your business objectives, not the technology. AI is a tool to achieve your goals.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-border">
                <div className="text-4xl text-[#5b7fc7] mb-4">02</div>
                <h3 className="text-xl text-[#0f1729] mb-3">Practical Solutions</h3>
                <p className="text-[#6b7fa8]">
                  We build systems that work in the real world, integrating seamlessly with your operations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 border border-gray-border">
                <div className="text-4xl text-[#5b7fc7] mb-4">03</div>
                <h3 className="text-xl text-[#0f1729] mb-3">Long-term Partnership</h3>
                <p className="text-[#6b7fa8]">
                  We're committed to your success beyond deployment, with ongoing support and optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Build Something Great Together"
        description="Ready to transform your business with AI? Let's start the conversation."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/case-studies"
      />
    </div>
  );
}