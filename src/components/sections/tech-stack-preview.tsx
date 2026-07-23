'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';

export default function TechStackPreview() {
  const categories = [...new Set(techStack.map(t => t.category))];

  return (
    <section className="relative py-16 sm:py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technology"
          title="Built with Modern Technology"
          description="We use the latest tools and frameworks to deliver cutting-edge solutions."
        />

        <div className="mt-16 space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <p className="text-sm font-medium text-foreground-30 mb-4 uppercase tracking-wider">{category}</p>
              <div className="flex flex-wrap gap-3">
                {techStack.filter(t => t.category === category).map((tech) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-3 rounded-xl bg-surface-05 border border-border-main text-foreground-70 text-sm font-medium hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default"
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
