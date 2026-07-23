'use client';

const logs = [
  { user: 'Alex Rivera', action: 'Updated project status', target: 'E-commerce Platform', time: '2 min ago' },
  { user: 'Sam Chen', action: 'Deployed version', target: 'v2.4.1', time: '15 min ago' },
  { user: 'Jordan Lee', action: 'Uploaded design files', target: 'UI Mockups v3', time: '1 hour ago' },
  { user: 'Priya Patel', action: 'Created new ticket', target: 'TK-005', time: '2 hours ago' },
  { user: 'Maya Sharma', action: 'Published blog post', target: 'AI Integration Guide', time: '3 hours ago' },
];

export default function ActivityLogsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Activity Logs</h1>
      <div className="space-y-3">
        {logs.map((log, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {log.user.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <p className="text-sm text-white"><span className="font-medium">{log.user}</span> <span className="text-white/50">{log.action}</span> <span className="text-blue-400">{log.target}</span></p>
            </div>
            <span className="text-xs text-white/30 flex-shrink-0">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
