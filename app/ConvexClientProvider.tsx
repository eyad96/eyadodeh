"use client";

import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  console.warn("NEXT_PUBLIC_CONVEX_URL is not set. Using placeholder URL during build/prerender.");
}

const convex = new ConvexReactClient(convexUrl || "https://dummy-placeholder-convex-url.convex.cloud");

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}

