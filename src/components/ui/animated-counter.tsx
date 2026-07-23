'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ target, suffix = '', className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericTarget = parseFloat(target);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  return (
    <span ref={ref} className={className}>
      {target.includes('.') ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
}
