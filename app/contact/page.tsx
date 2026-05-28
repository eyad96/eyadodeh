"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, Send, CheckCircle2 } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendMessage = useMutation(api.contact.sendMessage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSending(true);

    try {
      await sendMessage({ name, email, message });
      setSuccess(true);
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Failed to transmit packet to Convex:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative w-full flex-grow py-12 md:py-20 overflow-hidden bg-grid">
      {/* Background glow highlights */}
      <div className="ambient-glow glow-indigo w-[450px] h-[450px] top-[-50px] right-[10%]" />
      <div className="ambient-glow glow-cyan w-[450px] h-[450px] bottom-[50px] left-[10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">
        {/* Title banner */}
        <div className="text-center md:text-left space-y-4 max-w-xl">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
            Let&apos;s Build Together
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight">
            Connect With Me
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Interested in building a responsive SaaS platform, mobile appointment scheduler, or optimization migration? Reach out below.
          </p>
          <div className="h-[2px] w-20 bg-indigo-500 mt-4" />
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Methods Info */}
          <div className="lg:col-span-4 text-left space-y-6">
            {/* Card 1 */}
            <div className="glass p-5 rounded-2xl border-zinc-900 bg-zinc-950/20 text-left space-y-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/2 rounded-full blur-2xl" />
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-white text-sm">Direct Mail</h3>
                <p className="text-zinc-500 text-xs font-mono font-bold">odeh.eyad96@gmail.com</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass p-5 rounded-2xl border-zinc-900 bg-zinc-950/20 text-left space-y-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/2 rounded-full blur-2xl" />
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-white text-sm">Office Location</h3>
                <p className="text-zinc-500 text-xs font-mono font-bold">Amman, Jordan</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass p-5 rounded-2xl border-zinc-900 bg-zinc-950/20 text-left space-y-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/2 rounded-full blur-2xl" />
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-white text-sm">Chat Schedule</h3>
                <p className="text-zinc-500 text-xs font-mono font-bold">Mon — Fri, 9am — 5pm CET</p>
              </div>
            </div>
          </div>

          {/* Right Column: Ingestion Form */}
          <div className="lg:col-span-8">
            <div className="glass rounded-2xl border-zinc-800 p-6 md:p-10 shadow-2xl relative bg-zinc-950/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full shadow-inner">
                    <CheckCircle2 className="h-12 w-12 animate-bounce" />
                  </div>
                  <h2 className="text-2xl font-black text-white font-sans tracking-tight">
                    Message Dispatched Successfully!
                  </h2>
                  <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                    Thank you. We have logged your request parameters. I will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 text-zinc-300 font-mono text-xs font-bold transition-all duration-200 cursor-pointer pt-2 mt-2"
                  >
                    Submit Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Input name */}
                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Marcus Vance"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-850 text-xs font-sans text-white focus:border-indigo-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Input Email */}
                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="marcus@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-850 text-xs font-sans text-white focus:border-indigo-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Input Message */}
                  <div className="space-y-2 relative">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                      Brief Message Copy *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about your SaaS project pipeline, required slots calendar locking, or specific stack targets..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-850 text-xs font-sans text-white focus:border-indigo-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Trigger */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-mono text-xs font-bold shadow-lg shadow-indigo-500/20 active:scale-95 disabled:opacity-50 transition-all duration-200 cursor-pointer pt-2"
                  >
                    {sending ? (
                      <>
                        Transmitting Packet...{" "}
                        <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin ml-2" />
                      </>
                    ) : (
                      <>
                        Transmit Packet <Send className="h-3.5 w-3.5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
