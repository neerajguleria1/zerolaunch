'use client';

const posts = [
  { title: 'How to Build a Successful MVP', status: 'published', date: 'Jan 15, 2024', views: 1250 },
  { title: 'Complete Guide to SaaS Development', status: 'published', date: 'Jan 10, 2024', views: 890 },
  { title: 'AI Integration: A Practical Guide', status: 'draft', date: 'Jan 5, 2024', views: 0 },
];

const statusColors: Record<string, string> = { published: 'text-green-400 bg-green-400/10', draft: 'text-yellow-400 bg-yellow-400/10' };

export default function BlogAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Blog CMS</h1>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-xl text-sm hover:bg-purple-600 transition-colors">New Post</button>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-white/5">
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Title</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Status</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Date</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Views</th>
          </tr></thead>
          <tbody>
            {posts.map(p => (
              <tr key={p.title} className="border-b border-white/5 last:border-0 hover:bg-white/5 cursor-pointer">
                <td className="px-6 py-4 text-sm text-white">{p.title}</td>
                <td className="px-6 py-4"><span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[p.status]}`}>{p.status}</span></td>
                <td className="px-6 py-4 text-sm text-white/40">{p.date}</td>
                <td className="px-6 py-4 text-sm text-white/50">{p.views.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
