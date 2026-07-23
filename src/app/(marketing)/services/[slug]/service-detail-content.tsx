'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Code2, Brain, Globe, Smartphone, TrendingUp, Shield, Rocket } from 'lucide-react';
import { services } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import PageWrapper from '@/components/layout/page-wrapper';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-10 h-10" />,
  Code2: <Code2 className="w-10 h-10" />,
  Brain: <Brain className="w-10 h-10" />,
  Globe: <Globe className="w-10 h-10" />,
  Smartphone: <Smartphone className="w-10 h-10" />,
  TrendingUp: <TrendingUp className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
};

export default function ServiceDetailContent({ slug }: { slug: string }) {
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
            <Link href="/services"><Button>Back to Services</Button></Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4">Service</Badge>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 mb-6">
              {iconMap[service.icon] || <Code2 className="w-10 h-10" />}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-lg text-white/50 max-w-2xl mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-a-call"><Button variant="gradient">Book a Call</Button></Link>
              <Link href="/pricing"><Button variant="outline">View Pricing</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="What We Deliver" title="Capabilities" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {service.features.map((f, i) => (
              <motion.div key={f} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-white/80">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {service.subServices.length > 0 && (
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="Deep Dive" title="Our Approach" description="How we deliver exceptional results for each service area." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {service.subServices.map((sub, i) => (
                <motion.div key={sub.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">{sub.title}</h3>
                  <p className="text-white/50 mb-6">{sub.description}</p>
                  <ul className="space-y-3">
                    {sub.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-blue-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/50 mb-8">Let&apos;s discuss how {service.title.toLowerCase()} can help your business.</p>
          <Link href="/book-a-call"><Button variant="gradient" size="lg">Book a Free Consultation <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
        </div>
      </section>
    </PageWrapper>
  );
}
