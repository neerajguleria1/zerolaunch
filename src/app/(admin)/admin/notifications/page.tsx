'use client';

const notifications = [
  { title: 'New lead acquired', message: 'Acme Corp submitted a contact form', type: 'info', time: '5 min ago', read: false },
  { title: 'Payment received', message: 'INV-0042 payment of $15,000 confirmed', type: 'success', time: '1 hour ago', read: false },
  { title: 'Ticket escalated', message: 'TK-001 marked as urgent', type: 'warning', time: '3 hours ago', read: true },
];

const typeColors: Record<string, string> = { info: 'bg-blue-400', success: 'bg-green-400', warning: 'bg-yellow-400', error: 'bg-red-400' };

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Notifications</h1>
      <div className="space-y-3">
        {notifications.map((n, i) => (
          <div key={i} className={`p-4 rounded-xl border ${n.read ? 'bg-white/5 border-white/10' : 'bg-blue-500/5 border-blue-500/20'} flex items-start gap-4`}>
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${typeColors[n.type]}`} />
            <div className="flex-1">
              <p className="text-sm text-white font-medium">{n.title}</p>
              <p className="text-xs text-white/40 mt-1">{n.message}</p>
            </div>
            <span className="text-xs text-white/30 flex-shrink-0">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
