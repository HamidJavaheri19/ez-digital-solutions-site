import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href,
  onClick, 
  className = '',
  icon = false 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 font-medium';
  
  const variants = {
    primary: 'bg-[#0f1729] text-white hover:bg-[#1a2238] shadow-lg shadow-[#0f1729]/10 hover:shadow-xl hover:shadow-[#0f1729]/20',
    secondary: 'bg-[#5b7fc7] text-white hover:bg-[#4a5f8f] shadow-lg shadow-[#5b7fc7]/10 hover:shadow-xl hover:shadow-[#5b7fc7]/20',
    outline: 'border-2 border-[#0f1729] text-[#0f1729] hover:bg-[#0f1729] hover:text-white'
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
        {icon && <ArrowRight size={18} />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
        {icon && <ArrowRight size={18} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
}
