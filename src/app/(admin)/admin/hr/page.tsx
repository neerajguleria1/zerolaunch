'use client';

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', department: 'Leadership', status: 'active' },
  { name: 'Priya Patel', role: 'CTO', department: 'Engineering', status: 'active' },
  { name: 'Jordan Lee', role: 'Head of Design', department: 'Design', status: 'active' },
  { name: 'Sam Chen', role: 'Lead Engineer', department: 'Engineering', status: 'active' },
  { name: 'Maya Sharma', role: 'Head of Growth', department: 'Marketing', status: 'active' },
];

export default function HRPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">HR - Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map(m => (
          <div key={m.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">
              {m.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-white font-medium">{m.name}</p>
              <p className="text-sm text-white/50">{m.role}</p>
              <p className="text-xs text-white/30">{m.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
