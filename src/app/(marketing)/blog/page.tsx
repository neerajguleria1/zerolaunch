import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const BlogContent = dynamic(() => import('./content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'Blog', description: 'Insights, tutorials, and thought leadership from the ZeroToLaunch team.' };

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogContent />
      <Footer />
    </>
  );
}
