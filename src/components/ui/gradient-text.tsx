import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export default function GradientText({ children, className, from = 'from-blue-400', to = 'to-purple-400' }: GradientTextProps) {
  return (
    <span className={cn(`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent`, className)}>
      {children}
    </span>
  );
}
