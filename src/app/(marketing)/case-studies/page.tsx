import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const CaseStudiesContent = dynamic(() => import('./content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'Case Studies', description: 'Explore our portfolio of successful projects and client outcomes.' };

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <CaseStudiesContent />
      <Footer />
    </>
  );
}
