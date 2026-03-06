import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  delay?: number;
}

export function ProcessStep({ icon: Icon, step, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      {/* Step number badge */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#5b7fc7] to-[#4a5f8f] text-white font-bold mb-6">
        {step}
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5b7fc7]/10 to-[#4a5f8f]/10 flex items-center justify-center mb-6">
        <Icon size={32} className="text-[#5b7fc7]" />
      </div>

      {/* Content */}
      <h3 className="text-2xl text-[#0f1729] mb-4">
        {title}
      </h3>
      <p className="text-[#6b7fa8] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
