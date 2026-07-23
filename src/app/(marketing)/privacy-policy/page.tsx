import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = { title: 'Privacy Policy', description: 'ZeroToLaunch privacy policy.' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-8 text-white/60 leading-relaxed">
            <p>Last updated: January 1, 2024</p>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>ZeroToLaunch (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the zerotolaunch.dev website and provides software development and related services. This page informs you of our policies regarding the collection, use, and disclosure of personal information.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information Collection</h2>
              <p>We collect information you provide directly, including name, email address, company name, and project details when you contact us or use our services.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Information</h2>
              <p>We use collected information to provide and improve our services, communicate with you, and send relevant updates about your projects.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at hello@zerotolaunch.dev.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
