'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import Button from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <div className="text-[120px] md:text-[180px] font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 bg-clip-text text-transparent leading-none">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-white/50 max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/">
              <Button variant="gradient">
                <Home className="w-4 h-4 mr-2" /> Go Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
