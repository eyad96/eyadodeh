import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const seedLocalProjects = mutation({
  args: {},
  handler: async (ctx) => {
    const localProjects = [
      {
        slug: "alhewwari-salon",
        title: "Al-Hewwari Salon Booking",
        description: "An elegant, interactive appointment scheduling application built with React and TypeScript for modern barber salons.",
        longDescription: "Al-Hewwari Salon Booking is a highly optimized scheduling application crafted to deliver premium reservation workflows. Built with a fluid calendar grid, it simplifies time slot selection while providing active queue observers, customer information processing, and micro-interactions that elevate the booking experience.",
        heroImage: "/images/projects/alhewwari-salon.png",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "date-fns"],
        features: [
          "Fluid interactive calendar dashboard for date & slot selections",
          "Dynamic service list with real-time total price calculators",
          "Responsive profile registration and contact detailing panels",
          "Rich state-managed active slot availability checking loops",
          "Sleek and polished design utilizing dark/light contrast styling"
        ],
        challenges: "Ensuring consistent and seamless slot availability checks on client-side grids without double-booking or state drift.",
        solutions: "Created a centralized React state manager using custom Hooks to sync appointments and normalized date strings to prevent time-zone overlap.",
        liveDemoUrl: "https://alhewwari-salon.vercel.app/",
        githubUrl: "https://github.com/eyad96/alhewwari-salon",
        category: "Booking Systems",
        isLongScreenshot: false
      },
      {
        slug: "dashboard",
        title: "Enterprise Analytics Dashboard",
        description: "A premium data intelligence and analytics monitoring panel showcasing high-fidelity dynamic layouts and stateful widgets.",
        longDescription: "This Enterprise Analytics Dashboard is a comprehensive developer asset optimized for multi-dimensional data tracking. It implements dynamic grid controls, high-performance charting plugins, and responsive table modules designed to process massive state objects fluidly.",
        heroImage: "/images/projects/dashboard.png",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
        features: [
          "Dynamic grid layout adjusting seamlessly to any device size",
          "High-fidelity visual representations utilizing SVGs and canvas plotting",
          "Comprehensive filtering inputs and real-time query updates",
          "Clean typescript interface mapping securing complete type safety"
        ],
        challenges: "Managing frequent chart updates and heavy re-renders of SVG items on low-powered mobile browsers.",
        solutions: "Decoupled interactive components using performance-optimized React memo structures and decoupled data queries from the layout thread.",
        liveDemoUrl: "https://dashboard-coral-seven-24.vercel.app/",
        githubUrl: "https://github.com/eyad96/dashboard",
        category: "AI & SaaS",
        isLongScreenshot: false
      },
      {
        slug: "eyad-portfolio",
        title: "Eyad Developer Portfolio",
        description: "The high-end, responsive developer portfolio showcasing premium CSS animations, state management, and custom glassmorphic aesthetics.",
        longDescription: "The official portfolio platform built with Next.js 15 to showcase modern frontend techniques. Utilizing Tailwind CSS v4 and Framer Motion, it features dynamic mouse-movement glows, interactive terminal card visualizers, full route transitions, and responsive page structures optimized for SEO and core web vitals.",
        heroImage: "/images/projects/eyad-portfolio.png",
        techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lucide Icons"],
        features: [
          "Interactive mouse-tracking glow components enhancing interactivity",
          "Terminal simulator widget built with animated bash mock inputs",
          "Fluid page routing and spring-driven layout animations",
          "Highly modular and semantic React design system implementation"
        ],
        challenges: "Preventing visual lag during complex card animations and tracking glows on heavy viewports.",
        solutions: "Optimized CSS layouts to leverage GPU acceleration via transform/opacity properties, achieving an optimal 60 FPS profile.",
        liveDemoUrl: "https://eyad96.github.io/eyad-portfolio/",
        githubUrl: "https://github.com/eyad96/eyad-portfolio",
        category: "Landing Pages",
        isLongScreenshot: false
      },
      {
        slug: "edusity-react-app",
        title: "Edusity E-Learning Platform",
        description: "An immersive academic portal showcasing interactive courses, dynamic sliders, and high-conversion landing assets.",
        longDescription: "Edusity is a premium web layout designed for schools, universities, and online learning platforms. Incorporating dynamic image slideshows, tabbed curriculum guides, interactive course cards, and customer feedback blocks, it provides a seamless user journey optimized for modern devices.",
        heroImage: "/images/projects/edusity-react-app.jpg",
        techStack: ["React", "JavaScript", "Tailwind CSS", "CSS Modules", "Lucide Icons"],
        features: [
          "Custom course visual navigation selectors and maps",
          "Smooth dynamic reviews showcase slider with touch support",
          "Fully styled admission inquiry forms with real-time feedback loops",
          "Fluid CSS keyframe hover graphics for interactive elements"
        ],
        challenges: "Synchronizing slider transition states across different layout aspect ratios and mobile sizes.",
        solutions: "Engineered active touch listeners and custom CSS transition hooks that dynamically calculate item heights.",
        liveDemoUrl: "https://eyad96.github.io/edusity-react-app/",
        githubUrl: "https://github.com/eyad96/edusity-react-app",
        category: "Landing Pages",
        isLongScreenshot: false
      }
    ];

    let count = 0;
    for (const p of localProjects) {
      const existing = await ctx.db
        .query("projects")
        .filter((q) => q.eq(q.field("slug"), p.slug))
        .first();
      if (!existing) {
        await ctx.db.insert("projects", {
          ...p,
          category: p.category as any,
          createdAt: Date.now() - (count * 1000), // maintain ordering order
        });
        count++;
      }
    }
    return count;
  },
});

// Query to get all projects sorted by creation date descending
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").order("desc").collect();
  },
});

// Query to fetch a project by slug (with ID fallback)
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    // Try to find by slug first
    const bySlug = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .first();
    if (bySlug) return bySlug;

    // Fallback: try by ID if slug is not defined/unique
    try {
      const byId = await ctx.db.get(args.slug as any);
      if (byId) return byId;
    } catch {
      // ignore parsing errors
    }
    return null;
  },
});
