import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const CaseStudyDetail = dynamic(() => import('./detail'), { loading: () => <div className="min-h-screen" /> });

export function generateStaticParams() {
  return [
    { slug: 'zymeriq' },
    { slug: 'dripfeed' },
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
