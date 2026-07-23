'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingTiers } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';
import Button from '@/components/ui/button';
import PageWrapper from '@/components/layout/page-wrapper';
import Link from 'next/link';

export default function PricingContent() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Transparent Pricing</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">Choose the plan that fits your needs. No hidden fees, no surprises.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-blue-500/30 shadow-2xl shadow-blue-500/10 md:scale-105'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-white/40 text-sm ml-2">/ {tier.period}</span>}
                </div>
                <p className="text-white/50 text-sm mb-8">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                      <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/book-a-call">
                  <Button variant={tier.highlighted ? 'gradient' : 'outline'} className="w-full">
                    {tier.cta} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/40 text-sm">Need something custom? <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact us</Link> for a tailored solution.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
