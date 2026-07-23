import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'gradient' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        {
          'bg-blue-500/10 text-blue-500 border border-blue-500/20': variant === 'default',
          'bg-surface-05 text-foreground-70 border border-border-main': variant === 'secondary',
          'bg-gradient-to-r from-blue-500 to-purple-500 text-white': variant === 'gradient',
          'border border-border-main text-foreground-70': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
