'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

const messages = [
  { sender: 'Alex Rivera', message: 'Hi John! The latest design mockups are ready for your review.', time: '10:30 AM', isMe: false },
  { sender: 'You', message: 'Thanks Alex! Let me take a look.', time: '10:45 AM', isMe: true },
  { sender: 'Alex Rivera', message: 'Great! I also pushed the API changes to staging. Let me know if you have any questions.', time: '11:00 AM', isMe: false },
  { sender: 'You', message: 'The designs look fantastic. I have a few minor tweaks.', time: '2:15 PM', isMe: true },
];

export default function ChatPage() {
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-bold text-white mb-4">Chat</h1>
      <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-2xl ${msg.isMe ? 'bg-blue-500/20 text-white' : 'bg-white/10 text-white/80'}`}>
                <p className="text-sm">{msg.message}</p>
                <p className="text-xs text-white/30 mt-1">{msg.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="p-4 border-t border-white/5">
          <div className="flex gap-3">
            <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"><Send className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
