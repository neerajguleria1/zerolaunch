import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { MessageCircle } from 'lucide-react';
import Button from '@/components/ui/button';

export const metadata = { title: 'Book a Call', description: 'Schedule a free consultation with ZeroToLaunch.' };

export default function BookACallPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Free Consultation</h1>
          <p className="text-lg text-white/50 mb-12">Let&apos;s discuss your project and explore how we can help bring your vision to life.</p>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-12">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Chat with us on WhatsApp</h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">Get instant responses. Tell us about your project, goals, and timeline — we&apos;ll take it from there.</p>
            <a href="https://wa.me/918091043893?text=Hi%2C%20I%27m%20interested%20in%20discussing%20a%20project." target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" /> Start WhatsApp Chat
              </Button>
            </a>
            <p className="text-white/30 text-sm mt-6">Or email us at neerajworking51@gmail.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
