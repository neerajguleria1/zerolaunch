'use client';

const users = [
  { name: 'John Doe', email: 'john@example.com', role: 'admin', lastActive: '2 min ago' },
  { name: 'Jane Smith', email: 'jane@acme.com', role: 'client', lastActive: '1 hour ago' },
  { name: 'Bob Wilson', email: 'bob@tech.io', role: 'client', lastActive: '3 days ago' },
];

const roleColors: Record<string, string> = { admin: 'text-purple-400 bg-purple-400/10', client: 'text-blue-400 bg-blue-400/10', team: 'text-green-400 bg-green-400/10' };

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">User Management</h1>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-xl text-sm hover:bg-purple-600 transition-colors">Add User</button>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-white/5">
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">User</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Role</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Last Active</th>
          </tr></thead>
          <tbody>
            {users.map(u => (
              <tr key={u.email} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                <td className="px-6 py-4"><p className="text-sm text-white">{u.name}</p><p className="text-xs text-white/30">{u.email}</p></td>
                <td className="px-6 py-4"><span className={`text-xs px-2 py-1 rounded-full capitalize ${roleColors[u.role]}`}>{u.role}</span></td>
                <td className="px-6 py-4 text-sm text-white/40">{u.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
