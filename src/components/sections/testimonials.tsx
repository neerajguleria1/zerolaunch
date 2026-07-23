'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our clients have to say about working with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-surface-05 border border-border-main hover:border-surface-10 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground-50 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-foreground font-medium">{testimonial.author}</p>
                <p className="text-foreground-40 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
