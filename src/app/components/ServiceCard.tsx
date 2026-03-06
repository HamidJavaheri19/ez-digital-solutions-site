import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  to?: string;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0, to }: ServiceCardProps) {
  const cardContent = (
    <>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5b7fc7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/12 to-[#4a5f8f]/12 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#5b7fc7]/20 transition-all duration-300">
        <Icon size={26} className="text-[#5b7fc7]" />
      </div>

      {/* Content */}
      <h3 className="text-xl text-[#0f1729] mb-3">
        {title}
      </h3>
      <p className="text-[#6b7fa8] leading-relaxed">
        {description}
      </p>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/0 to-[#4a5f8f]/0 group-hover:from-[#5b7fc7]/4 group-hover:to-[#4a5f8f]/4 transition-all duration-500 pointer-events-none" />
    </>
  );

  const cardClasses = "block group relative bg-white rounded-2xl p-8 border border-gray-border hover:border-[#5b7fc7]/30 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[#5b7fc7]/10 overflow-hidden cursor-pointer";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {to ? (
        <Link to={to} className={cardClasses}>
          {cardContent}
        </Link>
      ) : (
        <div className={cardClasses}>
          {cardContent}
        </div>
      )}
    </motion.div>
  );
}
