'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/site';
import Badge from '@/components/ui/badge';
import PageWrapper from '@/components/layout/page-wrapper';

export default function BlogContent() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Blog</h1>
            <p className="text-lg text-foreground-50 max-w-2xl mx-auto">Insights, tutorials, and thought leadership from our team.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="p-8 rounded-2xl bg-surface-05 border border-border-main hover:border-blue-500/30 transition-all h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge>{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-foreground-40"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-foreground-50 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border-main">
                    <div><p className="text-sm text-foreground-60">{post.author}</p><p className="text-xs text-foreground-30">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p></div>
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">Read <ArrowRight className="w-4 h-4" /></Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
