"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrolled } = useScroll(20);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-4 md:px-8 py-4",
          scrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-xl py-3 shadow-lg"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center space-x-3 text-lg font-bold tracking-tight text-foreground group"
          >
            <Logo className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            <span className="font-sans font-black tracking-tight transition-colors duration-300 group-hover:text-indigo-400">
              Eyad Odeh
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:text-foreground",
                    isActive 
                      ? (theme === "light" ? "text-primary font-bold" : "text-white") 
                      : (theme === "light" ? "text-zinc-600" : "text-zinc-400")
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className={cn(
                        "absolute inset-0 border rounded-lg -z-0 active-nav-indicator",
                        theme === "light"
                          ? "bg-indigo-500/10 border-indigo-500/20"
                          : "bg-zinc-900 border-zinc-800"
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Availability badge */}
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            <ThemeToggle />

            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-mono font-bold text-white rounded-lg group bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group-hover:from-indigo-500 group-hover:to-pink-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-800 transition-all duration-300 mt-2"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-zinc-950 rounded-md group-hover:bg-opacity-0 navbar-talk-btn">
                Let&apos;s Talk <ArrowUpRight className="inline h-3 w-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </Link>
          </div>

          {/* Mobile controls: Theme toggle + Menu trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-950 hover:bg-zinc-200/50 border border-transparent hover:border-zinc-300 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-6"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />

            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "block text-3xl font-bold tracking-tight py-2 transition-colors hover:text-white",
                        isActive ? "text-indigo-400" : "text-zinc-500"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                className="pt-8 flex flex-col items-center space-y-4"
              >
                <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Hire</span>
                </div>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="w-full max-w-[200px] text-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-mono text-sm font-bold shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
