"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, Sparkles, Code2, Globe, Cpu, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="relative w-full flex-grow flex flex-col justify-center items-center overflow-hidden bg-grid py-12 md:py-24">
      {/* Decorative Glowing Orbs */}
      <div className="ambient-glow glow-indigo w-[400px] h-[400px] top-[-100px] left-[5%]" />
      <div className="ambient-glow glow-cyan w-[400px] h-[400px] bottom-[100px] right-[5%]" />

      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text copy & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-400 font-bold shadow-inner">
              <Sparkles className="h-3.5 w-3.5 animate-spin" />
              <span>Pioneering Next-Gen Web Solutions</span>
            </span>
          </motion.div>

          {/* Heading with Animated Text Reveal */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans"
          >
            Building elegant platforms with{" "}
            <span className="text-gradient-hero">
              flawless engineering.
            </span>
          </motion.h1>

          {/* Bio Copy */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            I am a high-end frontend engineer specializing in Next.js 15, responsive web layouts, interactive data dashboard systems, and fluid animations. Inspired by minimalist developer aesthetics.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-mono text-sm font-bold shadow-lg shadow-indigo-500/20 active:scale-95 transition-all duration-200 group"
            >
              View Projects{" "}
              <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-200 font-mono text-sm font-bold active:scale-95 transition-all duration-200 contact-btn-contrast"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Socials Connection */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 pt-6 border-t border-zinc-900 w-fit"
          >
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
              Find Me On
            </span>
            <div className="flex items-center space-x-2">
              <Link
                href="https://github.com/eyad96"
                target="_blank"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all duration-200"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/eyad-odeh/"
                target="_blank"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all duration-200"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </Link>
              <Link
                href="mailto:odeh.eyad96@gmail.com"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all duration-200"
              >
                <Mail className="h-4.5 w-4.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Interactive Code Frame Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
          className="lg:col-span-5 relative w-full"
        >
          {/* Card overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl -z-10" />

          <div className="w-full glass dark rounded-2xl border-zinc-800 shadow-2xl overflow-hidden font-mono">
            {/* Toolbar header */}
            <div className="px-4 py-3 bg-zinc-900/60 border-b border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <span className="text-[10px] text-zinc-400 bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-900">
                bash - stack_loader.sh
              </span>
            </div>

            {/* Code Body */}
            <div className="p-5 text-left text-xs sm:text-sm text-zinc-400 space-y-4 font-mono leading-relaxed bg-zinc-950/40">
              <div>
                <span className="text-zinc-600 font-bold mr-2">$</span>
                <span className="text-emerald-400">curl</span> https://eyad.dev/api/stack
              </div>
              <div className="pl-4 border-l-2 border-zinc-900 text-zinc-500 space-y-1 bg-zinc-950/20 py-2.5 px-3 rounded">
                <p className="text-indigo-400 font-bold">{"{"}</p>
                <p className="pl-3"><span className="text-pink-400">&quot;core&quot;</span>: <span className="text-amber-400">&quot;Next.js 15&quot;</span>,</p>
                <p className="pl-3"><span className="text-pink-400">&quot;logic&quot;</span>: <span className="text-amber-400">&quot;TypeScript&quot;</span>,</p>
                <p className="pl-3"><span className="text-pink-400">&quot;styles&quot;</span>: <span className="text-amber-400">&quot;Tailwind CSS v4&quot;</span>,</p>
                <p className="pl-3"><span className="text-pink-400">&quot;motion&quot;</span>: <span className="text-amber-400">&quot;Framer Motion&quot;</span>,</p>
                <p className="pl-3"><span className="text-pink-400">&quot;primitives&quot;</span>: <span className="text-amber-400">&quot;shadcn/ui&quot;</span></p>
                <p className="text-indigo-400 font-bold">{"}"}</p>
              </div>
              <div>
                <span className="text-zinc-600 font-bold mr-2">$</span>
                <span className="text-indigo-400 animate-pulse">npm run dev_portfolio</span>
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-600 font-bold pt-2 border-t border-zinc-900 flex justify-between items-center">
                <span>SYSTEM: COMPILER SUCCESS</span>
                <span className="text-emerald-500 animate-pulse">● LIVE PORT: 3000</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Showcase Grid Section */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 mt-24 relative z-10">
        <div className="text-center md:text-left mb-10 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
            Productivity Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
            Core Fields of Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass glass-hover p-6 rounded-2xl border-zinc-800/80 text-left space-y-4"
          >
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit rounded-xl">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">Premium Architecture</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Establishing standard folder structure, decoupled data pipelines, type definitions, and optimized caching layouts.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass glass-hover p-6 rounded-2xl border-zinc-800/80 text-left space-y-4"
          >
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit rounded-xl">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">Responsive Layouts</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Crafting state-managed drawer menus, flexible grid structures, active observers, and zero-shift layout configurations.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass glass-hover p-6 rounded-2xl border-zinc-800/80 text-left space-y-4"
          >
            <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit rounded-xl">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">Framer Animations</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Writing hardware-accelerated spring routines, list staggers, magnetic nodes, and responsive fade-in page transitions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
