import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/layout/smooth-scroll-provider';
import Analytics from '@/components/layout/analytics';
import Global3D from '@/components/three/global-3d';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'ZeroToLaunch | Build. Launch. Scale.',
    template: '%s | ZeroToLaunch',
  },
  description: 'Premium technology partner that helps founders and businesses go from idea to launch. MVP development, custom software, AI solutions, and growth services.',
  keywords: ['software agency', 'MVP development', 'custom software', 'AI development', 'web development', 'mobile apps', 'startup', 'technology partner'],
  authors: [{ name: 'ZeroToLaunch' }],
  creator: 'ZeroToLaunch',
  metadataBase: new URL('https://zerotolaunch.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zerotolaunch.dev',
    siteName: 'ZeroToLaunch',
    title: 'ZeroToLaunch | Build. Launch. Scale.',
    description: 'Premium technology partner that helps founders and businesses go from idea to launch.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ZeroToLaunch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeroToLaunch | Build. Launch. Scale.',
    description: 'Premium technology partner that helps founders and businesses go from idea to launch.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Global3D />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ZeroToLaunch',
              url: 'https://zerotolaunch.dev',
              logo: 'https://zerotolaunch.dev/logo.png',
              description: 'Premium technology partner that helps founders and businesses go from idea to launch.',
              sameAs: [
                'https://twitter.com/zerotolaunch',
                'https://linkedin.com/company/zerotolaunch',
                'https://github.com/zerotolaunch',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-8091043893',
                contactType: 'customer service',
                email: 'hello@zerotolaunch.dev',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '',
                addressLocality: 'Chandigarh',
                addressRegion: 'Chandigarh',
                postalCode: '160001',
                addressCountry: 'IN',
              },
            }),
          }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
