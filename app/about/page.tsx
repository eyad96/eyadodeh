"use client";

import { motion } from "framer-motion";
import { Terminal, Users, Calendar, Award, Code, CheckCircle, Database, Layout, FileDown } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const stats = [
  { value: "4+", label: "Years Experience", icon: Calendar, color: "text-indigo-400 bg-indigo-500/10" },
  { value: "50+", label: "Projects Completed", icon: Code, color: "text-cyan-400 bg-cyan-500/10" },
  { value: "99%", label: "Client Satisfaction", icon: Users, color: "text-purple-400 bg-purple-500/10" },
  { value: "5+", label: "Open Source Tools", icon: Award, color: "text-pink-400 bg-pink-500/10" },
];

const skillGroups = [
  {
    title: "Core Stack",
    icon: Code,
    skills: ["React.js", "Next.js 15 (App Router)", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "Styling & Motion",
    icon: Layout,
    skills: ["Tailwind CSS v4", "Framer Motion", "Vanilla CSS", "CSS Modules", "shadcn/ui"],
  },
  {
    title: "Databases & Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase Auth", "REST APIs"],
  },
  {
    title: "Workflow & Cloud",
    icon: Terminal,
    skills: ["Git / GitHub", "Docker", "Vercel / Netlify", "Figma", "ESLint / Prettier"],
  },
];

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  const profile = useQuery(api.about.get);
  const resumeData = useQuery(api.resume.get);
  const resumeUrl = resumeData?.resumeUrl || "/Resume/Eyad Odeh Resume.pdf";

  const photo = profile?.photo || "/images/eyad.jpg";
  const bio = profile?.bio || [
    "Hi, I am Eyad, a high-end frontend engineer with a deep passion for designing interfaces that feel fast, interactive, and beautifully responsive. I thrive at the intersection of aesthetic design and rigorous technical architecture.",
    "My journey began as a freelance developer, crafting custom templates and widgets for global clients. Over the years, I have standardized my stack around React, Next.js, and TypeScript, delivering production-ready, accessible, and fast web products that exceed user expectations.",
    "I believe in clean folder architecture, performance-driven styling, smooth hardware-accelerated animations, and responsive components. When I am not writing modular React code, I am auditing performance scores or experimenting with cutting-edge UI libraries."
  ];
  const title = profile?.title || "Designing elegant solutions with modern web aesthetics.";

  return (
    <div className="relative w-full flex-grow py-12 md:py-20 overflow-hidden bg-grid">
      {/* Decorative Glow */}
      <div className="ambient-glow glow-purple w-[400px] h-[400px] top-[-50px] right-[5%]" />
      <div className="ambient-glow glow-indigo w-[400px] h-[400px] bottom-[50px] left-[5%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">
        {/* Title Banner */}
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
            Brief Background
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight leading-tight">
            {title}
          </h1>
          <div className="h-[2px] w-20 bg-indigo-500 mt-4" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Profile Photo */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="max-w-[320px] mx-auto lg:mx-0 relative group glass rounded-2xl overflow-hidden border border-zinc-850 shadow-2xl flex flex-col">
              {/* Visual Top Glow Line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none z-20" />

              {/* Image Container mirroring project cards */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 border-b border-zinc-900 group-hover:opacity-95 transition-opacity duration-300">
                <img
                  src={photo}
                  alt="Eyad Odeh"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Visual Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </div>

          {/* Bio Description */}
          <div className="lg:col-span-8 space-y-6 text-zinc-400 text-[18px] leading-relaxed text-left font-sans">
            {bio.map((paragraph, index) => {
              // Securely split and render highlights as native React nodes to avoid XSS injection risks
              const parts = paragraph.split(/(Hi, I am Eyad|Eyad,)/g);
              return (
                <p key={index}>
                  {parts.map((part, i) => {
                    if (part === "Hi, I am Eyad") {
                      return <span key={i}>Hi, I am <strong className="text-white font-bold">Eyad Odeh</strong></span>;
                    }
                    if (part === "Eyad,") {
                      return <strong key={i} className="text-white font-bold">Eyad,</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}

            {/* Premium Resume Download Button */}
            {resumeUrl && (
              <div className="pt-4">
                <a
                  href={resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 text-indigo-400 font-mono text-sm font-bold active:scale-95 transition-all duration-200"
                >
                  Download Complete CV <FileDown className="h-4 w-4 ml-1.5" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Skills Grid Section */}
        <div className="space-y-8">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
              Technical Arsenal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
              Technologies & Frameworks
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-2xl border-zinc-800/80 text-left space-y-4"
                >
                  <div className="flex items-center space-x-3 text-white border-b border-zinc-900 pb-3">
                    <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-indigo-400">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-bold tracking-tight text-sm">{group.title}</span>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center space-x-2 text-sm text-zinc-400">
                        <CheckCircle className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-zinc-900">
          <div className="lg:col-span-4 text-left space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
              Academic Background
            </span>
            <h2 className="text-2xl font-black text-white font-sans tracking-tight">
              Education & Log
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="glass p-6 rounded-2xl border-zinc-800/80 space-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-2">
                <span className="font-bold text-white text-base">B.S. in Software Engineering</span>
                <span className="font-mono text-zinc-500 bg-zinc-900 border border-zinc-800/60 px-3 py-1 rounded-full text-xs">
                  2018 — 2022
                </span>
              </div>
              <p className="text-indigo-400 text-xs font-mono">Global Engineering Institute</p>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans pt-2">
                Focused on core systems engineering, algorithm designs, data structures, and progressive compiler design principles. Specialized in modern Full-Stack Web Applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
