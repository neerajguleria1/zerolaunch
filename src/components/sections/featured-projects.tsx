'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { caseStudies } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';

export default function FeaturedProjects() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Case Studies"
          title="Featured Projects"
          description="Explore some of our most impactful work and the results we've delivered."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {caseStudies.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Link href={`/case-studies/${project.slug}`}>
                <div className="group relative rounded-2xl bg-surface-05 border border-border-main overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">{project.title.split(' ').map(w => w[0]).join('')}</span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <Badge>{project.industry}</Badge>
                      <Badge variant="secondary">{project.timeline}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground-50 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.overview}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded-md bg-surface-05 text-foreground-40">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <p className="text-lg font-bold text-foreground">{m.value}</p>
                          <p className="text-xs text-foreground-40">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies">
            <Button variant="outline">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
