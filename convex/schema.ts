import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contactMessages: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),
  projects: defineTable({
    slug: v.optional(v.string()),
    title: v.string(),
    description: v.string(),
    longDescription: v.optional(v.string()),
    heroImage: v.string(),
    techStack: v.optional(v.array(v.string())),
    features: v.optional(v.array(v.string())),
    challenges: v.optional(v.string()),
    solutions: v.optional(v.string()),
    liveDemoUrl: v.string(),
    githubUrl: v.optional(v.string()),
    category: v.optional(v.string()),
    isLongScreenshot: v.optional(v.boolean()),
    createdAt: v.number(),
  }),
  aboutMe: defineTable({
    photo: v.string(),
    bio: v.array(v.string()),
    title: v.optional(v.string()),
    createdAt: v.number(),
  }),
});
