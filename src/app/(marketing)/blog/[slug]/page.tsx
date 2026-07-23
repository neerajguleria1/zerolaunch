import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { blogPosts } from '@/data/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostContent from './blog-post-content';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <BlogPostContent post={post} />
      <Footer />
    </>
  );
}
