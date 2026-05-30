"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/lib/data/projects";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const categories = ["All", "AI & SaaS", "Booking Systems", "Landing Pages", "E-Commerce"] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>("All");

  const dbProjects = useQuery(api.projects.get) || [];

  const normalizedDbProjects = dbProjects.map((cp) => ({
    slug: cp.slug || cp._id,
    title: cp.title,
    description: cp.description,
    longDescription: cp.longDescription || cp.description,
    heroImage: cp.heroImage,
    techStack: cp.techStack || ["React", "TypeScript", "Tailwind CSS"],
    features: cp.features || ["Fully functional dynamic layout mapping"],
    challenges: cp.challenges || "Dynamic data rendering on client threads.",
    solutions: cp.solutions || "Leveraged Convex real-time reactive schemas.",
    liveDemoUrl: cp.liveDemoUrl,
    githubUrl: cp.githubUrl || "#",
    category: cp.category || "AI & SaaS",
    isLongScreenshot: cp.isLongScreenshot || false,
  }));

  // Combine static and Convex database projects, prioritizing database overrides via slug de-duplication
  const allProjectsMap = new Map();
  projects.forEach((p) => allProjectsMap.set(p.slug, p));
  normalizedDbProjects.forEach((p) => allProjectsMap.set(p.slug, p));
  const allProjects = Array.from(allProjectsMap.values());

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <div className="relative w-full flex-grow py-12 md:py-20 overflow-hidden bg-grid">
      {/* Background glow effects */}
      <div className="ambient-glow glow-indigo w-[500px] h-[500px] top-[-100px] left-[10%]" />
      <div className="ambient-glow glow-cyan w-[500px] h-[500px] bottom-[100px] right-[10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        {/* Title block */}
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
            Work Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight">
            Premium Frontend Projects
          </h1>
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
            Explore a collection of highly responsive SaaS dashboards, schedule booking platforms, e-commerce stores, and high-conversion landing assets.
          </p>
          <div className="h-[2px] w-20 bg-indigo-500 mt-4" />
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900 pb-6 gap-4 text-left">
          <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs uppercase tracking-wider">
            <Filter className="h-4 w-4" />
            <span>Category Filters</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-lg border transition-all duration-300 cursor-pointer ${
                  activeFilter === category
                    ? "bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="glass rounded-2xl overflow-hidden border-zinc-800 flex flex-col group h-full shadow-2xl relative"
              >
                {/* Visual Top Glow */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none" />

                {/* Hero Header Representation */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-900 group-hover:opacity-95 transition-opacity @container">
                  {project.isLongScreenshot ? (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="absolute top-0 left-0 w-full h-auto object-top transition-transform duration-[4500ms] ease-in-out group-hover:-translate-y-[calc(100%-56.25cqw)]"
                    />
                  ) : (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-400 bg-zinc-950/80 border border-zinc-800/80 px-2.5 py-1 rounded-lg backdrop-blur-md uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Text Details & Badges */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow text-left space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-200">
                        {project.title}
                      </h2>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-400 shadow-inner"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button triggers */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-900/60">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-xs font-mono font-bold text-white hover:text-indigo-400 transition-colors group/link"
                    >
                      Explore Details{" "}
                      <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                    </Link>

                    <div className="flex items-center space-x-2">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="p-2 bg-zinc-900 border border-zinc-850 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.liveDemoUrl}
                        target="_blank"
                        className="p-2 bg-zinc-900 border border-zinc-850 hover:border-indigo-500/50 rounded-lg text-zinc-400 hover:text-indigo-400 transition-all"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
