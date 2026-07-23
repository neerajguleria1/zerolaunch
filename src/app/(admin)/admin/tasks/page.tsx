'use client';

const columns = [
  { title: 'To Do', tasks: ['Update onboarding flow', 'Write API docs', 'Design error states'] },
  { title: 'In Progress', tasks: ['Payment integration', 'Mobile responsive fixes'] },
  { title: 'Review', tasks: ['Auth flow refactor'] },
  { title: 'Done', tasks: ['Database migration', 'CI/CD pipeline setup'] },
];

const columnColors: Record<string, string> = { 'To Do': 'border-white/20', 'In Progress': 'border-blue-500/50', 'Review': 'border-yellow-500/50', 'Done': 'border-green-500/50' };

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col.title} className="space-y-3">
            <div className={`pb-2 border-b-2 ${columnColors[col.title]}`}>
              <span className="text-sm font-medium text-white">{col.title}</span>
              <span className="text-xs text-white/30 ml-2">{col.tasks.length}</span>
            </div>
            {col.tasks.map((task) => (
              <div key={task} className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:border-white/20 transition-all cursor-pointer">
                {task}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
