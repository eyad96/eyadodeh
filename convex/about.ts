import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Query to get the latest about me profile data
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("aboutMe").order("desc").first();
  },
});

// Mutation to seed/populate default profile values
export const seedAboutMe = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("aboutMe").first();
    if (!existing) {
      await ctx.db.insert("aboutMe", {
        photo: "/images/eyad.jpg",
        bio: [
          "Hi, I am Eyad, a high-end frontend engineer with a deep passion for designing interfaces that feel fast, interactive, and beautifully responsive. I thrive at the intersection of aesthetic design and rigorous technical architecture.",
          "My journey began as a freelance developer, crafting custom templates and widgets for global clients. Over the years, I have standardized my stack around React, Next.js, and TypeScript, delivering production-ready, accessible, and fast web products that exceed user expectations.",
          "I believe in clean folder architecture, performance-driven styling, smooth hardware-accelerated animations, and responsive components. When I am not writing modular React code, I am auditing performance scores or experimenting with cutting-edge UI libraries."
        ],
        title: "Designing elegant solutions with modern web aesthetics.",
        createdAt: Date.now(),
      });
      return "Profile seeded successfully!";
    }
    return "Profile already exists.";
  },
});
