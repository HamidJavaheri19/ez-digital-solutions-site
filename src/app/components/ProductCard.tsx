import { motion } from 'motion/react';
import { ArrowRight, Sparkles, LucideIcon } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  delay?: number;
  icon?: LucideIcon;
  link?: string;
}

export function ProductCard({ name, description, delay = 0, icon: Icon = Sparkles, link }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-2xl p-8 border border-gray-border hover:border-[#5b7fc7]/35 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[#5b7fc7]/12 overflow-hidden flex flex-col"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5b7fc7]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon mark */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6 group-hover:from-[#5b7fc7]/18 group-hover:to-[#4a5f8f]/18 group-hover:scale-105 transition-all duration-300">
        <Icon size={20} className="text-[#5b7fc7]" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl text-[#0f1729] mb-3 leading-snug">
          {name}
        </h3>
        <p className="text-[#6b7fa8] leading-relaxed mb-7 flex-1">
          {description}
        </p>

        {/* CTA link */}
        <button className="inline-flex items-center gap-2 text-[#5b7fc7] text-sm group/btn w-fit">
          <span className="group-hover/btn:underline underline-offset-2 transition-all">Explore</span>
          <ArrowRight
            size={15}
            className="group-hover/btn:translate-x-1 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/0 to-[#4a5f8f]/0 group-hover:from-[#5b7fc7]/4 group-hover:to-[#4a5f8f]/5 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}