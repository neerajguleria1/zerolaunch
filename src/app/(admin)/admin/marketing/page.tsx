'use client';

export default function MarketingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Marketing Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Website Visitors', value: '12,450' },
          { label: 'Leads Generated', value: '89' },
          { label: 'Conversion Rate', value: '3.2%' },
          { label: 'Cost per Lead', value: '$42' },
        ].map(s => (
          <div key={s.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="text-sm text-white/40 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 h-64 flex items-center justify-center">
        <p className="text-white/30">Marketing analytics - Connect GA4, Meta Pixel, etc.</p>
      </div>
    </div>
  );
}
