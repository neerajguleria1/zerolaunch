'use client';

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Analytics</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Revenue', value: '$245.8K' },
          { label: 'Clients', value: '32' },
          { label: 'Projects', value: '18' },
          { label: 'Team', value: '12' },
        ].map(s => (
          <div key={s.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="text-sm text-white/40 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 h-64 flex items-center justify-center">
        <p className="text-white/30">Analytics dashboard - Connect your data source</p>
      </div>
    </div>
  );
}
