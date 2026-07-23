'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';
import Icon from '@/components/ui/icon';
import PageWrapper from '@/components/layout/page-wrapper';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProcessContent() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Our Process</h1>
            <p className="text-lg text-foreground-50 max-w-2xl mx-auto">A proven methodology refined over hundreds of successful projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-transparent" />

            <div className="space-y-16">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center shadow-lg shadow-blue-500/25 z-10">
                    <Icon name={step.icon} size={28} className="text-white" />
                  </div>

                  <div className={`flex-1 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24'}`}>
                    <div className="flex items-center gap-3 mb-2 md:justify-end">
                      <span className="text-sm font-medium text-blue-400">Step {step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-foreground-50 leading-relaxed">{step.description}</p>
                  </div>

                  <div className="flex-1 hidden md:block" />

                  <div className="md:hidden absolute left-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 z-10">
                    <Icon name={step.icon} size={20} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-20">
            <Link href="/book-a-call">
              <Button variant="gradient" size="lg">Start Your Project <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
