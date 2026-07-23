import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { industries } from '@/data/site';
import Icon from '@/components/ui/icon';

export const metadata = { title: 'Industries', description: 'Industry-specific technology solutions from ZeroToLaunch.' };

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-20">
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries</h1>
            <p className="text-lg text-white/50">Specialized solutions for every industry.</p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                  <Icon name={industry.icon} size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-white/50 text-sm mb-6">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.solutions.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
