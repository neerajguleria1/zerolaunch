import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = { title: 'Resources', description: 'Free resources, guides, and tools from ZeroToLaunch.' };

const resources = [
  { title: 'MVP Launch Checklist', description: 'A comprehensive checklist to validate and launch your MVP successfully.', category: 'Guide' },
  { title: 'Technology Selection Guide', description: 'How to choose the right technology stack for your project.', category: 'Guide' },
  { title: 'Startup Funding Playbook', description: 'Strategies for raising your first round of funding.', category: 'Playbook' },
  { title: 'Product Requirements Template', description: 'A ready-to-use PRD template for your next project.', category: 'Template' },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources</h1>
            <p className="text-lg text-white/50">Free guides, templates, and tools to help you succeed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group cursor-pointer">
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">{resource.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors">{resource.title}</h3>
                <p className="text-white/50 text-sm mb-4">{resource.description}</p>
                <span className="inline-flex items-center gap-2 text-sm text-blue-400 group-hover:gap-3 transition-all">Download <ArrowRight className="w-4 h-4" /></span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
