"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error: ", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center z-50 relative overflow-hidden">
      {/* Background glowing layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-md w-full glass rounded-2xl border-zinc-800 p-8 space-y-6 md:p-10 shadow-2xl relative z-10">
        <div className="inline-flex p-3 rounded-full bg-red-500/15 border border-red-500/30 text-red-400">
          <AlertCircle className="h-8 w-8 animate-pulse" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-white">Something went wrong</h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            An unexpected error occurred while executing this route. We are logging the issue, please try reloading or navigate back home.
          </p>
        </div>

        {error.digest && (
          <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-[10px] text-zinc-500 text-left overflow-x-auto whitespace-pre-wrap select-all">
            Digest: {error.digest}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 font-mono text-sm font-bold active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 mr-2" /> Retry
          </button>
          
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-mono text-sm font-bold active:scale-95 transition-all duration-200 shadow-lg shadow-indigo-500/20"
          >
            <Home className="h-4 w-4 mr-2" /> Home
          </Link>
        </div>
      </div>
    </div>
  );
}
