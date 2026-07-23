import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { caseStudies } from '@/data/site';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Badge from '@/components/ui/badge';

export const metadata = { title: 'Projects', description: 'Explore our portfolio of projects.' };

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
            <p className="text-lg text-white/50">Our work speaks for itself.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <Link key={project.id} href={`/case-studies/${project.slug}`}>
                <div className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                    <span className="text-4xl font-bold text-white/10">{project.title.split(' ').map(w => w[0]).join('')}</span>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-5 h-5 text-white" /></div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3"><Badge>{project.industry}</Badge></div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">{project.title}</h3>
                    <p className="text-white/50 text-sm line-clamp-2">{project.overview}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
