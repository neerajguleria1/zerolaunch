'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowingCard({ children, className, glowColor = 'blue' }: GlowingCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const colors: Record<string, string> = {
    blue: 'from-blue-500/20',
    purple: 'from-purple-500/20',
    cyan: 'from-cyan-500/20',
    pink: 'from-pink-500/20',
  };

  return (
    <motion.div
      className={cn('relative rounded-2xl overflow-hidden', className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 300ms',
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${colors[glowColor] || colors.blue}, transparent 40%)`,
        }}
      />
      <div className="relative bg-surface-05 backdrop-blur-xl border border-border-main rounded-2xl p-6 h-full">
        {children}
      </div>
    </motion.div>
  );
}
