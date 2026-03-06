import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  summary: string;
  category: string;
  delay?: number;
}

export function CaseStudyCard({ title, summary, category, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-border hover:border-[#5b7fc7]/30 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[#5b7fc7]/10 flex flex-col"
    >
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-[#5b7fc7]/60 via-[#4a6bb5]/40 to-transparent" />

      <div className="p-8 flex flex-col flex-1">
        {/* Category badge */}
        <span className="inline-block px-3 py-1 rounded-full bg-[#5b7fc7]/8 border border-[#5b7fc7]/15 text-[#5b7fc7] text-xs tracking-wide mb-5 w-fit">
          {category}
        </span>

        <h3 className="text-xl text-[#0f1729] mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-[#6b7fa8] leading-relaxed mb-6 flex-1">
          {summary}
        </p>

        {/* View link */}
        <button className="inline-flex items-center gap-2 text-[#5b7fc7] text-sm group/btn w-fit">
          <span className="group-hover/btn:underline underline-offset-2 transition-all">View Case Study</span>
          <ArrowRight
            size={15}
            className="group-hover/btn:translate-x-1 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b7fc7]/0 to-transparent group-hover:from-[#5b7fc7]/4 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
