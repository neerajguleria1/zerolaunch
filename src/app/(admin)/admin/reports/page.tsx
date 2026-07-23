'use client';

const reports = [
  { title: 'Monthly Revenue Report', date: 'Jan 31, 2024', type: 'Financial' },
  { title: 'Client Satisfaction Survey', date: 'Jan 28, 2024', type: 'Client' },
  { title: 'Project Delivery Report', date: 'Jan 25, 2024', type: 'Operations' },
  { title: 'Marketing Performance Q4', date: 'Jan 20, 2024', type: 'Marketing' },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Reports</h1>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-xl text-sm hover:bg-purple-600 transition-colors">Generate Report</button>
      </div>
      <div className="space-y-3">
        {reports.map(r => (
          <div key={r.title} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-white/20 transition-all cursor-pointer">
            <div>
              <p className="text-sm text-white font-medium">{r.title}</p>
              <p className="text-xs text-white/30">{r.date}</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/50">{r.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
