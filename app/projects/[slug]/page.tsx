import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Cpu, Layout, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/lib/data/projects";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getProject(slug: string) {
  // 1. Check Convex database first (allows dynamic live overrides from dashboard)
  try {
    const cp = await fetchQuery(api.projects.getBySlug, { slug });
    if (cp) {
      return {
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
        category: (cp.category as any) || "AI & SaaS",
        isLongScreenshot: cp.isLongScreenshot || false,
      };
    }
  } catch (err) {
    console.error("Failed to fetch project from Convex:", err);
  }

  // 2. Fallback to static projects list default
  return projects.find((p) => p.slug === slug) || null;
}

// Generate static parameters for Next.js build optimization
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Frontend Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Portfolio Case Study`,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.heroImage,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  // Get related projects (excluding current one)
  const relatedProjects = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="relative w-full flex-grow py-12 md:py-20 overflow-hidden bg-grid">
      {/* Decorative Glow */}
      <div className="ambient-glow glow-indigo w-[400px] h-[400px] top-[10%] left-[5%]" />
      <div className="ambient-glow glow-cyan w-[400px] h-[400px] bottom-[15%] right-[5%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        {/* Back Link */}
        <div className="text-left">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs font-mono font-bold text-zinc-500 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
            Back to Projects Showcase
          </Link>
        </div>

        {/* Hero Section Header */}
        <div className="glass rounded-3xl overflow-hidden border-zinc-800 relative bg-zinc-950/40 p-8 md:p-12 text-left space-y-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans pt-1">
              {project.title}
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={project.liveDemoUrl}
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-mono text-xs font-bold shadow-lg shadow-indigo-500/20 active:scale-95 transition-all duration-200"
            >
              Launch Live Application <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
            </Link>
            
            <Link
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-200 font-mono text-xs font-bold active:scale-95 transition-all duration-200"
            >
              View Repository <GithubIcon className="h-3.5 w-3.5 ml-1.5" />
            </Link>
          </div>
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content (Overview + Features) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Overview */}
            <div className="glass p-6 md:p-8 rounded-2xl border-zinc-800/80 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-white font-sans flex items-center">
                <Layout className="h-5 w-5 mr-2 text-indigo-400" />
                Project Case Overview
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans pt-1">
                {project.longDescription}
              </p>
            </div>

            {/* Core Features */}
            <div className="glass p-6 md:p-8 rounded-2xl border-zinc-800/80 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-white font-sans flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-indigo-400" />
                Highlighted Capabilities
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="p-3 bg-zinc-950/40 rounded-xl border border-zinc-900 flex items-start space-x-3 text-sm text-zinc-400 leading-relaxed font-sans shadow-inner"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Info (Tech Stack) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="glass p-6 rounded-2xl border-zinc-800/80 space-y-4">
              <h2 className="text-md font-bold tracking-tight text-white font-mono flex items-center">
                <Cpu className="h-4.5 w-4.5 mr-2 text-indigo-400" />
                TECHNICAL ARSENAL
              </h2>
              <div className="h-[1px] w-full bg-zinc-900" />
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 shadow-inner"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-4">
          {/* Challenge card */}
          <div className="glass p-6 md:p-8 rounded-2xl border-zinc-800/80 space-y-4 relative overflow-hidden bg-red-500/2">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/2 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center space-x-3 border-b border-zinc-900 pb-3">
              <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                <HelpCircle className="h-4.5 w-4.5" />
              </div>
              <span className="font-bold text-white text-base">Key Problem Statement</span>
            </div>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans pt-1">
              {project.challenges}
            </p>
          </div>

          {/* Solution card */}
          <div className="glass p-6 md:p-8 rounded-2xl border-zinc-800/80 space-y-4 relative overflow-hidden bg-emerald-500/2">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/2 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center space-x-3 border-b border-zinc-900 pb-3">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
                <CheckCircle className="h-4.5 w-4.5" />
              </div>
              <span className="font-bold text-white text-base">Strategic Engineering Solution</span>
            </div>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans pt-1">
              {project.solutions}
            </p>
          </div>
        </div>

        {/* Related Projects */}
        <div className="pt-12 border-t border-zinc-900 text-left space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
              Keep Discovering
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
              Related Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rp) => (
              <div
                key={rp.slug}
                className="glass p-6 rounded-2xl border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-indigo-400 bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-850">
                      {rp.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{rp.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{rp.description}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-zinc-900">
                  <Link
                    href={`/projects/${rp.slug}`}
                    className="inline-flex items-center text-xs font-mono font-bold text-white hover:text-indigo-400 transition-colors group/link"
                  >
                    View Project Study{" "}
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
