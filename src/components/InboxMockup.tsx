import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Inbox as InboxIcon,
  Star,
  Send,
  FileText,
  Archive,
  Trash2,
  Search,
  Reply,
  Forward,
  MoreHorizontal,
  Paperclip,
} from 'lucide-react';

interface Message {
  id: string;
  name: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
  active?: boolean;
}

const initialMessages: Message[] = [
  {
    id: '1',
    name: 'Linear',
    subject: 'Weekly product digest',
    preview: 'Your team shipped 23 issues this week...',
    time: '9:41 AM',
    unread: true,
    active: true,
  },
  {
    id: '2',
    name: 'Sophia Chen',
    subject: 'Re: Q3 roadmap review',
    preview: 'Thanks for sending the deck over. I had a few thoughts...',
    time: '8:12 AM',
    unread: true,
  },
  {
    id: '3',
    name: 'Figma',
    subject: 'Marcus commented on your file',
    preview: 'Love the new direction on the landing hero.',
    time: 'Yesterday',
  },
  {
    id: '4',
    name: 'Stripe',
    subject: 'Payout of $12,480.00 sent',
    preview: 'Your payout is on its way to your bank...',
    time: 'Yesterday',
  },
  {
    id: '5',
    name: 'Vercel',
    subject: 'Deployment ready for aura-web',
    preview: 'Preview is live at aura-web-g3f.vercel.app',
    time: 'Mon',
  },
  {
    id: '6',
    name: 'GitHub',
    subject: '[aura/core] PR #482 approved',
    preview: 'david-lim approved your pull request.',
    time: 'Mon',
  },
];

export const InboxMockup: React.FC = () => {
  const [activeMessageId, setActiveMessageId] = useState<string>('1');

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl shadow-2xl"
      >
        {/* Title bar */}
        <div className="h-10 bg-black/40 border-b border-white/10 px-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block" />
          </div>
          <span className="text-xs text-white/50 font-medium">Aura — Inbox</span>
          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* Body Grid */}
        <div className="grid grid-cols-12 h-[520px]">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-white/10 bg-black/30 p-4 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              {/* Compose Button */}
              <button className="w-full rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Compose with Aura</span>
              </button>

              {/* Navigation Items */}
              <nav className="space-y-1">
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium bg-white/10 text-white">
                  <div className="flex items-center gap-2.5">
                    <InboxIcon className="w-4 h-4 text-white" />
                    <span>Inbox</span>
                  </div>
                  <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded-full font-mono">
                    12
                  </span>
                </button>

                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Star className="w-4 h-4" />
                    <span>Starred</span>
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">3</span>
                </button>

                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Send className="w-4 h-4" />
                    <span>Sent</span>
                  </div>
                </button>

                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4" />
                    <span>Drafts</span>
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">2</span>
                </button>

                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Archive className="w-4 h-4" />
                    <span>Archive</span>
                  </div>
                </button>

                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Trash2 className="w-4 h-4" />
                    <span>Trash</span>
                  </div>
                </button>
              </nav>

              {/* Labels Section */}
              <div className="pt-2">
                <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-widest px-3 mb-2">
                  Labels
                </h4>
                <div className="space-y-1.5 px-3 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
                    <span>Work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A4F4FD]" />
                    <span>Personal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    <span>Travel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span>Finance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message List */}
          <div className="col-span-4 border-r border-white/10 flex flex-col bg-black/10">
            {/* Search Header */}
            <div className="p-3 border-b border-white/10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs border border-white/5">
                <Search className="w-3.5 h-3.5" />
                <span>Search mail</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto divide-y divide-white/5">
              {initialMessages.map((msg) => {
                const isActive = msg.id === activeMessageId;
                return (
                  <div
                    key={msg.id}
                    onClick={() => setActiveMessageId(msg.id)}
                    className={`p-3.5 cursor-pointer transition-colors ${
                      isActive ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold ${msg.unread ? 'text-white' : 'text-white/80'}`}>
                        {msg.name}
                      </span>
                      <span className="text-[10px] text-white/40">{msg.time}</span>
                    </div>
                    <h5 className="text-xs font-medium text-white/90 truncate mb-1">
                      {msg.subject}
                    </h5>
                    <p className="text-[11px] text-white/50 truncate leading-snug">
                      {msg.preview}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reader Pane */}
          <div className="col-span-5 flex flex-col bg-black/20 overflow-y-auto">
            {/* Reader Toolbar */}
            <div className="p-3 border-b border-white/10 flex items-center justify-between text-white/60">
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 rounded-md hover:bg-white/5 hover:text-white flex items-center justify-center transition-colors" aria-label="Reply">
                  <Reply className="w-4 h-4" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 hover:text-white flex items-center justify-center transition-colors" aria-label="Forward">
                  <Forward className="w-4 h-4" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 hover:text-white flex items-center justify-center transition-colors" aria-label="Archive">
                  <Archive className="w-4 h-4" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 hover:text-white flex items-center justify-center transition-colors" aria-label="Trash">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 hover:text-white flex items-center justify-center transition-colors" aria-label="More">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Email Header */}
            <div className="p-5 border-b border-white/5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    Weekly product digest
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-semibold text-white">
                      L
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white/90">Linear</div>
                      <div className="text-[10px] text-white/50">to me · 9:41 AM</div>
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#00d2ff]/20 text-[#00d2ff] font-medium border border-[#00d2ff]/30">
                  Work
                </span>
              </div>
            </div>

            {/* Email Body */}
            <div className="p-5 space-y-4 text-xs text-white/70 leading-relaxed">
              {/* Summary Card by Aura */}
              <div className="liquid-glass rounded-xl p-3.5 space-y-1.5 border border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <Sparkles className="w-3.5 h-3.5 text-[#A4F4FD]" />
                  <span>Summary by Aura</span>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.
                </p>
              </div>

              <p>Hi team,</p>
              <p>
                Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.
              </p>
              <p>
                Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.
              </p>
              <p>Let me know if you would like a deeper breakdown by project or contributor.</p>
              <p className="text-white/50">— The Linear team</p>

              {/* Attachment */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
                  <Paperclip className="w-3.5 h-3.5 text-white/50" />
                  <span>digest-may-6.pdf</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
