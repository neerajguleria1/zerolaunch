'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import PageWrapper from '@/components/layout/page-wrapper';
import { useState } from 'react';

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}${form.company ? ` from ${form.company}` : ''}.%0A%0A${form.message ? `Project: ${form.message}%0A` : ''}${form.budget ? `Budget: ${form.budget}%0A` : ''}${form.email ? `Email: ${form.email}` : ''}`;
    window.open(`https://wa.me/918091043893?text=${text}`, '_blank');
    setSubmitted(true);
  };

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
                <div><h3 className="text-white font-medium mb-1">Office</h3><p className="text-white/50 text-sm">{siteConfig.address.city}, {siteConfig.address.country}</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-blue-400" /></div>
                <div><h3 className="text-white font-medium mb-1">Business Hours</h3><p className="text-white/50 text-sm">{siteConfig.businessHours}</p></div>
              </div>
              <a href={`https://wa.me/918091043893`} target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="lg" className="w-full mt-4">
                  <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                </Button>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2">
              {submitted ? (
                <div className="p-12 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"><Send className="w-8 h-8 text-green-400" /></div>
                  <h3 className="text-2xl font-bold text-white mb-2">Opening WhatsApp...</h3>
                  <p className="text-white/50 mb-6">Your message has been prepared and sent via WhatsApp.</p>
                  <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', budget: '', message: '' }); }}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Name" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
                    <Input label="Email" name="email" type="email" placeholder="you@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                  <Input label="Company" name="company" placeholder="Your company name" value={form.company} onChange={handleChange} />
                  <Input label="Project Budget" name="budget" placeholder="e.g. $10,000 - $50,000" value={form.budget} onChange={handleChange} />
                  <Textarea label="Tell us about your project" name="message" placeholder="Describe your project, goals, and timeline..." rows={5} required value={form.message} onChange={handleChange} />
                  <Button type="submit" variant="gradient" size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" /> Send via WhatsApp
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
