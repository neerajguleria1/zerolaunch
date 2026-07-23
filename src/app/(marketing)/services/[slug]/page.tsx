import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const ServiceDetailContent = dynamic(() => import('./service-detail-content'), { loading: () => <div className="min-h-screen" /> });

export function generateStaticParams() {
  return [
    { slug: 'mvp-development' },
    { slug: 'custom-software' },
    { slug: 'ai-development' },
    { slug: 'web-development' },
    { slug: 'mobile-apps' },
    { slug: 'growth-services' },
    { slug: 'maintenance' },
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <>
      <Header />
      <ServiceDetailContent slug={slug} />
      <Footer />
    </>
  );
}
