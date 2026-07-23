import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = { title: 'Book a Call', description: 'Schedule a free consultation with ZeroToLaunch.' };

export default function BookACallPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Free Consultation</h1>
          <p className="text-lg text-white/50 mb-12">Pick a time that works for you. We&apos;ll discuss your project and explore how we can help.</p>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/40 mb-4">Calendly embed will appear here</p>
              <p className="text-sm text-white/30">Connect your Calendly account to enable scheduling</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
