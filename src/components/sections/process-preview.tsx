'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';
import Icon from '@/components/ui/icon';
import Button from '@/components/ui/button';

export default function ProcessPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="How We Bring Your Vision to Life"
          description="A battle-tested process refined over hundreds of successful projects."
        />

        <div className="relative mt-20">
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.slice(0, 6).map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:py-8`}
              >
                <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'} pl-16 lg:pl-0`}>
                  <div className="flex items-center gap-3 mb-3 lg:justify-end">
                    <span className="text-sm font-medium text-blue-400">Step {step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground-50 leading-relaxed">{step.description}</p>
                </div>
                <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center shadow-lg shadow-blue-500/25 z-10`}>
                  <Icon name={step.icon} size={24} className="text-white" />
                </div>
                <div className={`lg:hidden absolute left-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25`}>
                  <Icon name={step.icon} size={20} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/process">
              <Button variant="outline">
                View Full Process
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
