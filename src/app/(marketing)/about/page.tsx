import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const AboutContent = dynamic(() => import('./content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'About', description: 'Learn about ZeroToLaunch - your trusted technology partner.' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
}
