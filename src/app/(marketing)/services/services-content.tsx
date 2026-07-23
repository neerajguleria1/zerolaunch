'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code2, Brain, Globe, Smartphone, TrendingUp, Shield, Rocket } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import Badge from '@/components/ui/badge';
import { services } from '@/data/site';
import PageWrapper from '@/components/layout/page-wrapper';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-8 h-8" />,
  Code2: <Code2 className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
};

export default function ServicesPageContent() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology Services for
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Every Stage
              </span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              From ideation to scale, we provide end-to-end technology solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="group p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                          {iconMap[service.icon] || <Code2 className="w-8 h-8" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-white/50 mb-6 max-w-2xl">{service.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                          {service.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-sm text-white/60">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              {f}
                            </div>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
