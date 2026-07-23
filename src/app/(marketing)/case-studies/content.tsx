'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { caseStudies } from '@/data/site';
import Badge from '@/components/ui/badge';
import PageWrapper from '@/components/layout/page-wrapper';

export default function CaseStudiesContent() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="mb-4">Our Work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Case Studies</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">Real results from real projects. Explore our portfolio of successful solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Link href={`/case-studies/${project.slug}`}>
                  <div className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                      <span className="text-6xl font-bold text-white/10">{project.title.split(' ').map(w => w[0]).join('')}</span>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex gap-2 mb-4">
                        <Badge>{project.industry}</Badge>
                        <Badge variant="secondary">{project.timeline}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-white/50 mb-6">{project.overview}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map(t => (
                          <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/40">{t}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/5">
                        {project.metrics.map(m => (
                          <div key={m.label}>
                            <p className="text-xl font-bold text-white">{m.value}</p>
                            <p className="text-xs text-white/40">{m.label}</p>
                          </div>
                        ))}
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
