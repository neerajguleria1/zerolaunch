import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const CaseStudyDetail = dynamic(() => import('./detail'), { loading: () => <div className="min-h-screen" /> });

export function generateStaticParams() {
  return [
    { slug: 'techflow-saas-platform' },
    { slug: 'fittrack-mobile-app' },
    { slug: 'datasmart-ai-platform' },
  ];
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <>
      <Header />
      <CaseStudyDetail slug={slug} />
      <Footer />
    </>
  );
}
