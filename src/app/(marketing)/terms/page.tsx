import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = { title: 'Terms of Service', description: 'ZeroToLaunch terms of service.' };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-8 text-white/60 leading-relaxed">
            <p>Last updated: January 1, 2024</p>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using ZeroToLaunch services, you agree to be bound by these Terms of Service.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
              <p>We provide software development, consulting, and related technology services. Scope and deliverables are defined in individual project agreements.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
              <p>Upon full payment, all code, designs, and deliverables created for your project become your intellectual property.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Payment Terms</h2>
              <p>Payment terms are defined in individual project agreements. Late payments may incur additional fees.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact</h2>
              <p>For questions about these Terms, contact us at hello@zerotolaunch.dev.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
