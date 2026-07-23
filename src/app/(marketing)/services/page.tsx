import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const ServicesPageContent = dynamic(() => import('./services-content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'Services', description: 'Comprehensive technology services from MVP development to enterprise solutions.' };

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesPageContent />
      <Footer />
    </>
  );
}
