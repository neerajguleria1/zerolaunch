'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { caseStudies } from '@/data/site';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import PageWrapper from '@/components/layout/page-wrapper';

export default function CaseStudyDetail({ slug }: { slug: string }) {
  const project = caseStudies.find(c => c.slug === slug);
  if (!project) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Not Found</h1>
            <Link href="/case-studies"><Button>Back to Case Studies</Button></Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 text-sm"><ArrowLeft className="w-4 h-4" /> Back to Case Studies</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex gap-2 mb-4"><Badge>{project.industry}</Badge><Badge variant="secondary">{project.timeline}</Badge></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-lg text-white/50 mb-8">{project.overview}</p>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><Button variant="secondary">Visit Live Site <ExternalLink className="w-4 h-4 ml-2" /></Button></a>}
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-16">
            <span className="text-6xl font-bold text-white/10">{project.title.split(' ').map(w => w[0]).join('')}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {project.metrics.map(m => (
              <div key={m.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-white mb-1">{m.value}</p>
                <p className="text-sm text-white/40">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
              <p className="text-white/60 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
              <p className="text-white/60 leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map(t => (
                  <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {project.testimonial && (
            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/60 italic text-lg mb-4">&ldquo;{project.testimonial.quote}&rdquo;</p>
              <p className="text-white font-medium">{project.testimonial.author}</p>
              <p className="text-white/40 text-sm">{project.testimonial.role}</p>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
