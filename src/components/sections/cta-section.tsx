'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/button';
import GradientText from '@/components/ui/gradient-text';

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Build
            <br />
            <GradientText>Something Amazing?</GradientText>
          </h2>
          <p className="text-lg text-foreground-50 max-w-xl mx-auto mb-10">
            Let&apos;s discuss your project and explore how we can bring your vision to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-a-call">
              <Button variant="gradient" size="lg">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Send a Message
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
