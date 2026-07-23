import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';

const Stats = dynamic(() => import('@/components/sections/stats'), { loading: () => <div className="h-32" /> });
const ServicesPreview = dynamic(() => import('@/components/sections/services-preview'), { loading: () => <div className="h-96" /> });
const FeaturedProjects = dynamic(() => import('@/components/sections/featured-projects'), { loading: () => <div className="h-96" /> });
const ProcessPreview = dynamic(() => import('@/components/sections/process-preview'), { loading: () => <div className="h-96" /> });
const TechStackPreview = dynamic(() => import('@/components/sections/tech-stack-preview'), { loading: () => <div className="h-64" /> });
const Testimonials = dynamic(() => import('@/components/sections/testimonials'), { loading: () => <div className="h-96" /> });
const CTASection = dynamic(() => import('@/components/sections/cta-section'), { loading: () => <div className="h-64" /> });

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <ServicesPreview />
        <FeaturedProjects />
        <ProcessPreview />
        <TechStackPreview />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
