'use client';

const projects = [
  { id: 'P001', name: 'E-commerce Platform', client: 'Acme Corp', status: 'in_progress', progress: 75, team: ['Alex', 'Sam', 'Jordan'] },
  { id: 'P002', name: 'Mobile App v2', client: 'TechStartup Inc', status: 'in_progress', progress: 45, team: ['Priya', 'Maya'] },
  { id: 'P003', name: 'Analytics Dashboard', client: 'GlobalCo', status: 'review', progress: 90, team: ['Sam', 'Chris'] },
];

const statusColors: Record<string, string> = { planning: 'text-blue-400 bg-blue-400/10', in_progress: 'text-yellow-400 bg-yellow-400/10', review: 'text-purple-400 bg-purple-400/10', completed: 'text-green-400 bg-green-400/10' };

export default function AdminProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Projects</h1>
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Project</th>
              <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Client</th>
              <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Status</th>
              <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Progress</th>
              <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Team</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                <td className="px-6 py-4"><p className="text-sm text-white font-medium">{p.name}</p><p className="text-xs text-white/30 font-mono">{p.id}</p></td>
                <td className="px-6 py-4 text-sm text-white/60">{p.client}</td>
                <td className="px-6 py-4"><span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[p.status]}`}>{p.status.replace('_', ' ')}</span></td>
                <td className="px-6 py-4">
                  <div className="w-24"><div className="h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${p.progress}%` }} /></div></div>
                </td>
                <td className="px-6 py-4"><div className="flex -space-x-2">{p.team.map(t => <div key={t} className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] text-white border-2 border-background">{t[0]}</div>)}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
