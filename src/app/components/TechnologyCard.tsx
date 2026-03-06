import { motion } from 'motion/react';

interface TechnologyCardProps {
  name: string;
  description: string;
  icon: string;
  delay?: number;
}

export function TechnologyCard({ name, description, icon, delay = 0 }: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-border hover:border-[#5b7fc7]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#5b7fc7]/10 overflow-hidden cursor-default"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b7fc7]/0 to-[#4a5f8f]/0 group-hover:from-[#5b7fc7]/5 group-hover:to-[#4a5f8f]/8 transition-all duration-500 rounded-2xl pointer-events-none" />

      {/* Icon */}
      <div className="text-3xl mb-4">{icon}</div>

      <h4 className="text-base text-[#0f1729] mb-1">
        {name}
      </h4>
      <p className="text-[#6b7fa8] text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
