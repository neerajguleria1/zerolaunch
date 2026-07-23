'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { siteConfig } from '@/data/site';
import SectionHeading from '@/components/ui/section-heading';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import PageWrapper from '@/components/layout/page-wrapper';
import { useState } from 'react';

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageWrapper>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">Have a project in mind? We&apos;d love to hear about it.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-blue-400" /></div>
                <div><h3 className="text-white font-medium mb-1">Email</h3><p className="text-white/50 text-sm">{siteConfig.email}</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-blue-400" /></div>
                <div><h3 className="text-white font-medium mb-1">Phone</h3><p className="text-white/50 text-sm">{siteConfig.phone}</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-blue-400" /></div>
                <div><h3 className="text-white font-medium mb-1">Office</h3><p className="text-white/50 text-sm">{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-blue-400" /></div>
                <div><h3 className="text-white font-medium mb-1">Business Hours</h3><p className="text-white/50 text-sm">{siteConfig.businessHours}</p></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2">
              {submitted ? (
                <div className="p-12 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"><Send className="w-8 h-8 text-green-400" /></div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Name" placeholder="Your name" required />
                    <Input label="Email" type="email" placeholder="you@company.com" required />
                  </div>
                  <Input label="Company" placeholder="Your company name" />
                  <Input label="Project Budget" placeholder="e.g. $10,000 - $50,000" />
                  <Textarea label="Tell us about your project" placeholder="Describe your project, goals, and timeline..." rows={5} required />
                  <Button type="submit" variant="gradient" size="lg" className="w-full">Send Message <Send className="w-4 h-4 ml-2" /></Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
