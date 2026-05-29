import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Query to get the active CV / resume url
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("resume").order("desc").first();
  },
});

// Mutation to seed/update CV values
export const seedResume = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("resume").first();
    if (!existing) {
      await ctx.db.insert("resume", {
        resumeUrl: "https://github.com/eyad96/eyadodeh/raw/main/public/files/eyad-odeh-resume.pdf", // default link inside their repository
        createdAt: Date.now(),
      });
      return "Resume seeded successfully!";
    }
    return "Resume already exists.";
  },
});
