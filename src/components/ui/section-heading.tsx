'use client';

import { motion } from 'framer-motion';
import Badge from './badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ badge, title, description, align = 'center', className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      {badge && <Badge className="mb-4">{badge}</Badge>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-foreground-50 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
