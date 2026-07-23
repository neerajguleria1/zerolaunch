'use client';

import { motion } from 'framer-motion';
import { FileText, Image, Folder, Download, Eye } from 'lucide-react';

const files = [
  { name: 'Project Requirements.pdf', type: 'pdf', size: '2.4 MB', date: 'Jan 10, 2024' },
  { name: 'UI Mockups v2.fig', type: 'design', size: '15.2 MB', date: 'Jan 18, 2024' },
  { name: 'API Documentation.md', type: 'doc', size: '420 KB', date: 'Jan 25, 2024' },
  { name: 'Brand Guidelines.pdf', type: 'pdf', size: '8.1 MB', date: 'Feb 1, 2024' },
  { name: 'Database Schema.png', type: 'image', size: '1.8 MB', date: 'Feb 5, 2024' },
];

const typeIcons: Record<string, React.ReactNode> = { pdf: <FileText className="w-5 h-5 text-red-400" />, design: <Image className="w-5 h-5 text-purple-400" />, doc: <FileText className="w-5 h-5 text-blue-400" />, image: <Image className="w-5 h-5 text-green-400" /> };

export default function FilesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Files</h1>
      <div className="grid grid-cols-1 gap-3">
        {files.map((file, i) => (
          <motion.div key={file.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            {typeIcons[file.type]}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{file.name}</p>
              <p className="text-xs text-white/30">{file.size} • {file.date}</p>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-all"><Eye className="w-4 h-4" /></button>
              <button className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-all"><Download className="w-4 h-4" /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
