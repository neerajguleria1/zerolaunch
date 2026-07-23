import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const CareersContent = dynamic(() => import('./content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'Careers', description: 'Join the ZeroToLaunch team and help build the future of technology.' };

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersContent />
      <Footer />
    </>
  );
}
