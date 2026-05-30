"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-transparent bg-zinc-900/10 dark:bg-zinc-900/60" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-900/60 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-800 focus:outline-none transition-all duration-300 active:scale-90 w-9 h-9 flex items-center justify-center overflow-hidden cursor-pointer"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25, type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center justify-center"
        >
          {theme === "light" ? (
            <Sun className="h-[18px] w-[18px] text-amber-500 fill-amber-500/20" />
          ) : (
            <Moon className="h-[18px] w-[18px] text-indigo-400 fill-indigo-400/20" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
