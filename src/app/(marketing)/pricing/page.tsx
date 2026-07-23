import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const PricingContent = dynamic(() => import('./content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'Pricing', description: 'Transparent pricing for startups, growth companies, and enterprises.' };

export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingContent />
      <Footer />
    </>
  );
}
