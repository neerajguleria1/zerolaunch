import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const ProcessContent = dynamic(() => import('./content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'Process', description: 'Our battle-tested process for delivering world-class software.' };

export default function ProcessPage() {
  return (
    <>
      <Header />
      <ProcessContent />
      <Footer />
    </>
  );
}
