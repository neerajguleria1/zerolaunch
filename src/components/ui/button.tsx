'use client';

import { cn } from '@/lib/utils';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40': variant === 'primary',
            'bg-surface-05 text-foreground hover:bg-surface-10 backdrop-blur-sm border border-border-main': variant === 'secondary',
            'border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10': variant === 'outline',
            'text-foreground hover:bg-surface-05': variant === 'ghost',
            'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40': variant === 'gradient',
          },
          {
            'text-sm px-4 py-2': size === 'sm',
            'text-sm px-6 py-3': size === 'md',
            'text-base px-8 py-4': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
