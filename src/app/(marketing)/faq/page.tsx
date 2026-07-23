import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const FAQContent = dynamic(() => import('./content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'FAQ', description: 'Frequently asked questions about ZeroToLaunch services.' };

export default function FAQPage() {
  return (
    <>
      <Header />
      <FAQContent />
      <Footer />
    </>
  );
}
