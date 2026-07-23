'use client';

import { motion } from 'framer-motion';
import { teamMembers, stats } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';
import AnimatedCounter from '@/components/ui/animated-counter';
import PageWrapper from '@/components/layout/page-wrapper';

export default function AboutContent() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About ZeroToLaunch</h1>
            <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              We&apos;re a team of passionate technologists, designers, and strategists dedicated to helping founders and businesses build world-class software products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl font-bold text-white mb-1"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <p className="text-sm text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/50 leading-relaxed mb-4">
                At ZeroToLaunch, we believe every great idea deserves exceptional execution. Our mission is to bridge the gap between vision and reality through world-class engineering and design.
              </p>
              <p className="text-white/50 leading-relaxed">
                We combine deep technical expertise with a founder-friendly approach to deliver software products that don&apos;t just work — they thrive in the market.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Build</h3>
                <p className="text-white/50 text-sm">We design and develop your product with cutting-edge technology and proven engineering practices.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
                <p className="text-white/50 text-sm">We ensure a smooth, successful launch with thorough testing, deployment, and monitoring.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Scale</h3>
                <p className="text-white/50 text-sm">We provide ongoing support and optimization to help your product grow and evolve.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Team" title="Meet the Team" description="The people behind the products." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
