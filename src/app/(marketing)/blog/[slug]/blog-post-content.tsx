'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/ui/badge';
import type { BlogPost } from '@/types';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <main className="min-h-screen pb-20">
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-foreground-50 hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-xs text-foreground-40"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-foreground-50">
              <span>{post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-foreground-70 text-lg leading-relaxed mb-8">{post.excerpt}</p>
            {post.content ? (
              <div className="text-foreground-50 leading-relaxed whitespace-pre-wrap">{post.content}</div>
            ) : (
              <div className="p-12 rounded-2xl bg-surface-05 border border-border-main text-center">
                <p className="text-foreground-40 text-lg">Full article coming soon.</p>
                <p className="text-foreground-30 text-sm mt-2">Stay tuned for the complete write-up.</p>
              </div>
            )}
          </motion.article>

          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border-main">
              <p className="text-sm font-medium text-foreground-50 mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-surface-05 border border-border-main text-foreground-50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
