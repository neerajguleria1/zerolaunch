'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code2, Brain, Globe, Smartphone, TrendingUp, Shield, Rocket } from 'lucide-react';
import { services } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

export default function ServicesPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Everything You Need to Build & Scale"
          description="From MVP development to enterprise solutions, we offer comprehensive technology services tailored to your needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="group relative p-8 rounded-2xl bg-surface-05 border border-border-main hover:border-blue-500/30 transition-all duration-300 h-full hover:bg-surface-10">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                      {iconMap[service.icon] || <Code2 className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground-50 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 4).map((f) => (
                        <span key={f} className="text-xs px-2 py-1 rounded-md bg-surface-05 text-foreground-40">
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm text-blue-400 group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
