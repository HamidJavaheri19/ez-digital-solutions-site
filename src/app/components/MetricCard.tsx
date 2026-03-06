import { motion } from 'motion/react';

interface MetricCardProps {
  metric: string;
  description: string;
  delay?: number;
}

export function MetricCard({ metric, description, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group text-center bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-gray-border hover:border-[#5b7fc7]/30 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[#5b7fc7]/10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b7fc7]/0 via-transparent to-[#4a5f8f]/0 group-hover:from-[#5b7fc7]/5 group-hover:to-[#4a5f8f]/5 transition-all duration-500 rounded-3xl pointer-events-none" />
      
      <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-[#0f1729] to-[#5b7fc7] bg-clip-text text-transparent relative z-10">
        {metric}
      </div>
      <p className="text-[#6b7fa8] text-lg relative z-10">
        {description}
      </p>
    </motion.div>
  );
}
