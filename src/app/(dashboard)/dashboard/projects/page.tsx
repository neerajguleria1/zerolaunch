'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const projects = [
  { name: 'E-commerce Platform', description: 'Full-stack e-commerce solution with React and Node.js', status: 'in_progress', progress: 75, deadline: 'Mar 15, 2024' },
  { name: 'Mobile App v2', description: 'React Native mobile app redesign', status: 'in_progress', progress: 45, deadline: 'Apr 20, 2024' },
  { name: 'Analytics Dashboard', description: 'Real-time analytics dashboard with data visualization', status: 'review', progress: 90, deadline: 'Feb 28, 2024' },
];

const statusColors: Record<string, string> = { in_progress: 'text-blue-400', review: 'text-yellow-400', completed: 'text-green-400' };
const statusIcons: Record<string, React.ReactNode> = { in_progress: <Clock className="w-4 h-4" />, review: <AlertCircle className="w-4 h-4" />, completed: <CheckCircle2 className="w-4 h-4" /> };

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Projects</h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, i) => (
          <motion.div key={project.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                <p className="text-sm text-white/50 mb-3">{project.description}</p>
                <div className="flex items-center gap-4">
                  <span className={`flex items-center gap-1 text-sm capitalize ${statusColors[project.status]}`}>
                    {statusIcons[project.status]} {project.status.replace('_', ' ')}
                  </span>
                  <span className="text-sm text-white/30">Due: {project.deadline}</span>
                </div>
              </div>
              <div className="w-full sm:w-48">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/40">Progress</span>
                  <span className="text-white/60">{project.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
