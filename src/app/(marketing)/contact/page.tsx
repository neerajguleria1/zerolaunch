import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const ContactContent = dynamic(() => import('./content'), { loading: () => <div className="min-h-screen" /> });

export const metadata = { title: 'Contact', description: 'Get in touch with ZeroToLaunch. Book a call or send us a message.' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactContent />
      <Footer />
    </>
  );
}
