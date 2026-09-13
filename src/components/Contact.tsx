import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Copy, Check, Send, Linkedin, Github, MapPin } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { useForm, ValidationError } from '@formspree/react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const [state, handleSubmit] = useForm((import.meta as any).env.VITE_FORMSPREE_KEY || "");

return(
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            Let's Discuss Opportunities
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Interested in full-stack Python development roles, freelance work, or technical collaborations? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Button */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                      Email Address
                    </h3>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-slate-100 light:text-slate-900 hover:text-blue-400 transition-colors truncate block"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 transition-colors relative"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-[10px] text-emerald-400 font-semibold text-right">
                  Copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                    Phone / Call
                  </h3>
                  <a
                    href={`tel:${personalData.phoneFormatted.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-100 light:text-slate-900 hover:text-blue-400 transition-colors"
                  >
                    {personalData.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 light:border-black/10 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                      WhatsApp Chat
                    </h3>
                    <div className="text-sm font-semibold text-slate-100 light:text-slate-900">
                      Instant Message
                    </div>
                  </div>
                </div>
                <a
                  href={personalData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-transform hover:scale-105"
                >
                  Start Chat
                </a>
              </div>
            </div>

            {/* Location & Social links */}
            <div className="glass-card rounded-2xl p-6 space-y-4 border border-white/10 light:border-black/10">
              <div className="flex items-center gap-3 text-xs text-slate-300 light:text-slate-700">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Location: {personalData.location}</span>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-white/10 light:border-black/10 hover:border-blue-500/40 bg-white/5 light:bg-black/5 text-slate-200 light:text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-white/10 light:border-black/10 hover:border-blue-500/40 bg-white/5 light:bg-black/5 text-slate-200 light:text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Chat Bot Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 border border-white/10 light:border-black/10 flex flex-col h-[450px] shadow-2xl relative overflow-hidden">
              
              {/* Chat Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-white/10 light:border-black/10 shrink-0">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0f172a] rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-100 light:text-slate-900">
                    Midhun's Assistant
                  </h3>
                  <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Online</p>
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 pr-2">
                
                {/* Step 0: Name Question */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex shrink-0 items-center justify-center mt-1"><MessageSquare className="w-3 h-3 text-blue-400" /></div>
                  <div className="bg-white/10 light:bg-black/5 p-3 rounded-2xl rounded-tl-sm text-xs text-slate-200 light:text-slate-800 max-w-[80%]">
                    Hi! I'm Midhun's virtual assistant. What's your name?
                  </div>
                </motion.div>
                
                {/* Step 0: Name Answer */}
                {chatStep > 0 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex gap-3 justify-end">
                    <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm text-xs max-w-[80%]">
                      {formState.name}
                    </div>
                  </motion.div>
                )}

                {/* Step 1: Email Question */}
                {chatStep >= 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex shrink-0 items-center justify-center mt-1"><MessageSquare className="w-3 h-3 text-blue-400" /></div>
                    <div className="bg-white/10 light:bg-black/5 p-3 rounded-2xl rounded-tl-sm text-xs text-slate-200 light:text-slate-800 max-w-[80%]">
                      Nice to meet you, {formState.name}! What's your email address?
                    </div>
                  </motion.div>
                )}

                {/* Step 1: Email Answer */}
                {chatStep > 1 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex gap-3 justify-end">
                    <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm text-xs max-w-[80%]">
                      {formState.email}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Subject Question */}
                {chatStep >= 2 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex shrink-0 items-center justify-center mt-1"><MessageSquare className="w-3 h-3 text-blue-400" /></div>
                    <div className="bg-white/10 light:bg-black/5 p-3 rounded-2xl rounded-tl-sm text-xs text-slate-200 light:text-slate-800 max-w-[80%]">
                      Got it. What's the subject of your inquiry?
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Subject Answer */}
                {chatStep > 2 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex gap-3 justify-end">
                    <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm text-xs max-w-[80%]">
                      {formState.subject}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Message Question */}
                {chatStep >= 3 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex shrink-0 items-center justify-center mt-1"><MessageSquare className="w-3 h-3 text-blue-400" /></div>
                    <div className="bg-white/10 light:bg-black/5 p-3 rounded-2xl rounded-tl-sm text-xs text-slate-200 light:text-slate-800 max-w-[80%]">
                      Awesome! Go ahead and write your message below.
                    </div>
                  </motion.div>
                )}

                {/* Success State */}
                {state.succeeded && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex shrink-0 items-center justify-center mt-1"><Check className="w-3 h-3 text-emerald-400" /></div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-2xl rounded-tl-sm text-xs text-emerald-400 max-w-[80%] font-medium">
                      Message sent successfully! Midhun will get back to you soon.
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Chat Input Area (The actual Form) */}
              {!state.succeeded && (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (chatStep === 0 && formState.name.trim()) setChatStep(1);
                    else if (chatStep === 1 && formState.email.trim()) setChatStep(2);
                    else if (chatStep === 2 && formState.subject.trim()) setChatStep(3);
                    else if (chatStep === 3 && formState.message.trim()) {
                      handleSubmit(e);
                    }
                  }}
                  className="mt-2 relative shrink-0"
                >
                  {/* Hidden inputs to capture data for Formspree */}
                  <input type="hidden" name="name" value={formState.name} />
                  <input type="hidden" name="email" value={formState.email} />
                  <input type="hidden" name="subject" value={formState.subject} />
                  <input type="hidden" name="message" value={formState.message} />

                  <div className="relative flex items-end gap-2 bg-white/5 light:bg-black/5 p-2 rounded-2xl border border-white/10 light:border-black/10 focus-within:border-blue-500/50 transition-colors">
                    
                    {chatStep === 0 && (
                      <input 
                        type="text" autoFocus
                        value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="Type your name..." 
                        className="w-full bg-transparent border-none text-xs text-white p-2 focus:outline-none" 
                      />
                    )}
                    {chatStep === 1 && (
                      <input 
                        type="email" autoFocus
                        value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="Type your email..." 
                        className="w-full bg-transparent border-none text-xs text-white p-2 focus:outline-none" 
                      />
                    )}
                    {chatStep === 2 && (
                      <input 
                        type="text" autoFocus
                        value={formState.subject} onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        placeholder="Type a subject..." 
                        className="w-full bg-transparent border-none text-xs text-white p-2 focus:outline-none" 
                      />
                    )}
                    {chatStep === 3 && (
                      <textarea 
                        autoFocus rows={1}
                        value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="Type your message..." 
                        className="w-full bg-transparent border-none text-xs text-white p-2 focus:outline-none resize-none min-h-[40px] max-h-[120px]" 
                      />
                    )}
                    
                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex shrink-0 items-center justify-center transition-colors disabled:opacity-50 mb-0.5"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
