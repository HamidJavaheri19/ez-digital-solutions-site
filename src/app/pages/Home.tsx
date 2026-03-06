import { motion } from 'motion/react';
import {
  Bot, Workflow, Rocket, Users, Building2,
  Search, Lightbulb, Zap, Calendar, ClipboardCheck,
  ArrowRight, MapPin, BookOpen, Home as HomeIcon, Network
} from 'lucide-react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ProductCard } from '../components/ProductCard';
import { MetricCard } from '../components/MetricCard';
import { ProcessStep } from '../components/ProcessStep';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { CTASection } from '../components/CTASection';
import heroImage from '../../assets/0888a695fd6859a520c7fd6dd886cc9410cf4031.png';

// ─── SVG Tech Icons ───────────────────────────────────────────────────────────
const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.896zm16.597 3.855l-5.843-3.368 2.02-1.164a.076.076 0 01.071 0l4.83 2.786a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.402-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="currentColor"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.887S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.13V3.19S18.304 0 11.914 0zm-3.21 1.848a1.051 1.051 0 110 2.103 1.051 1.051 0 010-2.103z" fill="currentColor"/>
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.134S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.13v5.343S5.696 24 12.086 24zm3.21-1.848a1.051 1.051 0 110-2.103 1.051 1.051 0 010 2.103z" fill="currentColor"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.015.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.58L11.9 1.036z" fill="currentColor"/>
  </svg>
);

const N8nIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="19" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12h4M12 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 12h-4M12 16v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const VectorDBIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 10v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const AIAgentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="9" r="1.5" fill="currentColor"/>
    <path d="M7.5 15c.75 1.5 2.25 2 4.5 2s3.75-.5 4.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LLMIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const APIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 6l-4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LangChainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 8h10M7 12h6M7 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const technologies = [
  { name: 'OpenAI', description: 'Advanced LLMs & GPT-4', Icon: OpenAIIcon },
  { name: 'n8n', description: 'Workflow Automation', Icon: N8nIcon },
  { name: 'Supabase', description: 'Backend Platform', Icon: SupabaseIcon },
  { name: 'Python', description: 'AI Development', Icon: PythonIcon },
  { name: 'Vector Databases', description: 'Embeddings & Search', Icon: VectorDBIcon },
  { name: 'AI Agents', description: 'Autonomous Systems', Icon: AIAgentIcon },
  { name: 'LLM Systems', description: 'Language Model Ops', Icon: LLMIcon },
  { name: 'API Integrations', description: 'Seamless Connectivity', Icon: APIIcon },
  { name: 'LangChain', description: 'LLM Orchestration', Icon: LangChainIcon },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden bg-[#f7f9fe]">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#eef3fc] to-[#e4ecf9]" />
        {/* Ambient glow blobs */}
        <div className="absolute top-[-120px] left-[10%] w-[700px] h-[700px] bg-[#5b7fc7]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[5%] w-[500px] h-[500px] bg-[#4a5f8f]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Brand badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#5b7fc7]/20 shadow-sm text-[#5b7fc7] text-sm mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5b7fc7] animate-pulse" />
                Building AI Platforms, Products, and Automation Systems at EZ Digital Solutions
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] text-[#0f1729] mb-6 leading-[1.08] tracking-tight">
                Build AI Agents, Automation Systems, and Intelligent Products
              </h1>
              <p className="text-xl text-[#6b7fa8] mb-10 leading-relaxed max-w-[480px]">
                Design, build, and deploy AI-powered systems that transform modern businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/services" variant="primary" icon>
                  Explore Services
                </Button>
                <Button to="/products" variant="outline">
                  See Our Products
                </Button>
              </div>
            </motion.div>

            {/* Right — visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0f1729]/20 ring-1 ring-[#5b7fc7]/12">
                <img
                  src={heroImage}
                  alt="AI Automation Pipeline"
                  className="w-full h-[440px] object-cover object-center"
                />
                {/* Cinematic grade overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1729]/40 via-transparent to-[#5b7fc7]/15" />
              </div>

              {/* Floating glass cards */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 md:-right-8 bg-white/75 backdrop-blur-lg rounded-2xl px-5 py-3.5 shadow-xl shadow-[#0f1729]/12 border border-white/80"
              >
                <div className="text-[22px] font-semibold text-[#0f1729] leading-none mb-0.5">100+</div>
                <div className="text-xs text-[#6b7fa8] tracking-wide">AI Deployments</div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 md:-left-8 bg-white/75 backdrop-blur-lg rounded-2xl px-5 py-3.5 shadow-xl shadow-[#0f1729]/12 border border-white/80"
              >
                <div className="text-[22px] font-semibold text-[#0f1729] leading-none mb-0.5">15+</div>
                <div className="text-xs text-[#6b7fa8] tracking-wide">Years Experience</div>
              </motion.div>

              {/* Glow blobs behind image */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#5b7fc7]/18 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#4a5f8f]/12 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">AI Services</h2>
            <p className="text-xl text-[#6b7fa8] max-w-2xl mx-auto">
              We help organizations design, build, and deploy AI systems, automation platforms, and intelligent applications
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <ServiceCard icon={Bot} title="AI Agents" description="Build intelligent AI agents that handle complex tasks autonomously, from customer support to data analysis." delay={0} />
            <ServiceCard icon={Workflow} title="AI Automation" description="Streamline operations with intelligent automation systems that reduce manual work and increase efficiency." delay={0.08} />
            <ServiceCard icon={Rocket} title="AI Product Development" description="Design and develop AI-powered products that deliver exceptional user experiences and business value." delay={0.16} />
            <ServiceCard icon={Users} title="Startup Mentoring" description="Guide startups through technical challenges with expert mentoring and strategic AI implementation." delay={0.24} />
            <ServiceCard icon={Building2} title="Enterprise Systems" description="Build scalable AI infrastructure for large organizations with robust security and compliance." delay={0.32} />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#f7f9fe] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">AI Products</h2>
            <p className="text-xl text-[#6b7fa8] max-w-2xl mx-auto">
              Platforms developed by EZ Digital Solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <ProductCard 
              name="Navixi" 
              description="AI traffic intelligence platform that provides real-time insights and predictive analytics for smart city management." 
              delay={0}
              icon={MapPin}
              link="https://navixi.ezdigitalsolutions.nl/"
            />
            <ProductCard 
              name="EZHomeFinder" 
              description="AI-powered real estate platform that helps users find their perfect home through intelligent matching and predictive analytics." 
              delay={0.1}
              icon={HomeIcon}
              link="https://www.ezhomefinder.nl/"
            />
            <ProductCard 
              name="EZ Learning Language" 
              description="AI-powered language learning platform that adapts to individual learning styles and accelerates language acquisition through intelligent personalization." 
              delay={0.2}
              icon={BookOpen}
              link="https://ezlearninglanguage.nl/"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7"
          >
            <ProductCard 
              name="Custom AI Platforms" 
              description="Bespoke AI platforms designed and built specifically for your organization's unique requirements, workflows, and business objectives." 
              delay={0}
              icon={Network}
              link="/contact"
            />
          </motion.div>
        </div>
      </section>

      {/* ── PROVEN IMPACT ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">Proven Impact</h2>
            <p className="text-xl text-[#6b7fa8] max-w-2xl mx-auto">
              Years of expertise delivering transformative AI solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <MetricCard metric="15+" description="Years Enterprise Experience" delay={0} />
            <MetricCard metric="50+" description="Automation Systems Built" delay={0.1} />
            <MetricCard metric="100+" description="AI Deployments" delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES WE USE ───────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#f7f9fe] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5b7fc7]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">Technologies We Use</h2>
            <p className="text-xl text-[#6b7fa8] max-w-2xl mx-auto">
              Leveraging cutting-edge tools to build robust AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {technologies.map(({ name, description, Icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-border hover:border-[#5b7fc7]/35 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#5b7fc7]/8 overflow-hidden cursor-default"
              >
                {/* Hover sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b7fc7]/0 to-[#4a5f8f]/0 group-hover:from-[#5b7fc7]/4 group-hover:to-[#4a5f8f]/6 transition-all duration-500 rounded-2xl pointer-events-none" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#5b7fc7]/18 group-hover:to-[#4a5f8f]/18 transition-all duration-300">
                    <span className="text-[#5b7fc7]"><Icon /></span>
                  </div>
                  <div>
                    <h4 className="text-[#0f1729] mb-0.5">{name}</h4>
                    <p className="text-[#6b7fa8] text-sm">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">Our Process</h2>
            <p className="text-xl text-[#6b7fa8] max-w-2xl mx-auto">
              A proven methodology for delivering successful AI solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProcessStep icon={Search} step="1" title="Discover" description="We analyze your business needs, identify opportunities, and create a tailored AI strategy that aligns with your goals." delay={0} />
            <ProcessStep icon={Lightbulb} step="2" title="Design" description="Our team designs intelligent solutions with user-centric interfaces and robust architecture for optimal performance." delay={0.1} />
            <ProcessStep icon={Zap} step="3" title="Deploy" description="We build, test, and deploy your AI solution with ongoing support to ensure continuous success and optimization." delay={0.2} />
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#f7f9fe] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0f1729] mb-4">Case Studies</h2>
            <p className="text-xl text-[#6b7fa8] max-w-2xl mx-auto">
              Real-world success stories from our AI implementations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <CaseStudyCard category="Automation Systems" title="Enterprise Workflow Automation" summary="Reduced manual processing time by 75% through intelligent automation systems for a Fortune 500 company." delay={0} />
            <CaseStudyCard category="AI Platform Development" title="Smart City Traffic Platform" summary="Built real-time AI traffic management system processing millions of data points for urban planning." delay={0.1} />
            <CaseStudyCard category="Enterprise Infrastructure" title="AI-Powered Customer Service" summary="Deployed autonomous AI agents handling 10,000+ customer queries daily with 95% satisfaction rate." delay={0.2} />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button to="/case-studies" variant="outline" icon>
              View All Case Studies
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── AI STRATEGY CONSULTATION ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-[#0b1120] via-[#101a30] to-[#1e2d52] rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Ambient glows */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#5b7fc7]/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#3a4f8a]/25 rounded-full blur-[60px] pointer-events-none" />
              {/* Grid texture */}
              <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px'}} />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10 justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5b7fc7]/18 border border-[#5b7fc7]/25 text-[#8fa5c9] text-sm mb-6">
                    <Calendar size={13} />
                    AI Strategy Consultation
                  </div>
                  <h2 className="text-3xl md:text-4xl text-white mb-4 max-w-lg leading-snug">
                    Get a Personalized AI Strategy for Your Business
                  </h2>
                  <p className="text-[#8fa5c9] text-lg max-w-md leading-relaxed">
                    Work directly with our AI engineers to map out a custom roadmap that aligns with your growth goals and technical needs.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button to="/contact" variant="secondary" icon>
                    Book Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FREE AI AUDIT ─────────────────────────────────────────────────── */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-[#4a6fc4] via-[#5b7fc7] to-[#3d5499] rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Glows */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/12 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white/6 rounded-full blur-[60px] pointer-events-none" />
              {/* Dot grid */}
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px'}} />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10 justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-sm mb-6">
                    <ClipboardCheck size={13} />
                    Free AI Automation Audit
                  </div>
                  <h2 className="text-3xl md:text-4xl text-white mb-4 max-w-lg leading-snug">
                    Discover Untapped AI Automation Opportunities
                  </h2>
                  <p className="text-white/80 text-lg max-w-md leading-relaxed">
                    Get a personalized audit report with actionable insights on where AI can save time, reduce costs, and boost output in your business.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button to="/contact" variant="outline" className="bg-white text-[#5b7fc7] hover:bg-white/90 border-white shadow-lg" icon>
                    Request Free Audit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        title="Start Your AI Transformation"
        description="Let's discuss how AI can transform your business operations and drive growth."
        primaryButtonText="Book Strategy Call"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
}