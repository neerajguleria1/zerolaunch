'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { jobOpenings } from '@/data/site';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import PageWrapper from '@/components/layout/page-wrapper';

export default function CareersContent() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">Help us build world-class software. We&apos;re always looking for talented people.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {jobOpenings.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge>{job.department}</Badge>
                      <Badge variant="secondary"><MapPin className="w-3 h-3 mr-1" />{job.location}</Badge>
                      <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />{job.type}</Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Apply <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
