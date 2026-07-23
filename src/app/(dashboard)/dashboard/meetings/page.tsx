'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';

const meetings = [
  { title: 'Sprint Review', date: 'Feb 15, 2024', time: '10:00 AM PST', type: 'video' },
  { title: 'Design Walkthrough', date: 'Feb 18, 2024', time: '2:00 PM PST', type: 'video' },
  { title: 'Monthly Check-in', date: 'Feb 25, 2024', time: '11:00 AM PST', type: 'video' },
];

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Meetings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {meetings.map((meeting, i) => (
          <motion.div key={meeting.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Video className="w-5 h-5 text-blue-400" />
              <h3 className="text-white font-medium">{meeting.title}</h3>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {meeting.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {meeting.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
