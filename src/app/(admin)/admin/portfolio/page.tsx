'use client';

const projects = [
  { title: 'TechFlow SaaS Platform', industry: 'SaaS', status: 'published', featured: true },
  { title: 'FitTrack Mobile App', industry: 'Health', status: 'published', featured: true },
  { title: 'DataSmart AI Platform', industry: 'Analytics', status: 'published', featured: false },
];

export default function PortfolioAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Portfolio CMS</h1>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-xl text-sm hover:bg-purple-600 transition-colors">Add Project</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p => (
          <div key={p.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white/10">{p.title.split(' ').map(w => w[0]).join('')}</span>
            </div>
            <h3 className="text-white font-medium">{p.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/50">{p.industry}</span>
              <span className="text-xs text-white/30">{p.status}</span>
              {p.featured && <span className="text-xs px-2 py-1 rounded-full bg-purple-400/10 text-purple-400">Featured</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
