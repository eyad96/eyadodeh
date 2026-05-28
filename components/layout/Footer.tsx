import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";

const socialLinks = [
  { href: "https://github.com/eyad96", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/eyad-odeh/", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
  { href: "mailto:odeh.eyad96@gmail.com", icon: Mail, label: "Email" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[var(--footer-bg)] border-t border-[var(--footer-border)] py-12 md:py-16 overflow-hidden z-10">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[150px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-3 text-xl font-bold tracking-tight text-foreground group"
            >
              <Logo className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <span className="font-sans font-black tracking-tight transition-colors duration-300 group-hover:text-indigo-400">
                Eyad Odeh
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm font-sans leading-relaxed">
              Crafting premium digital platforms, responsive applications, and optimized user interfaces.
              Guided by minimalism, structural speed, and modern engineering aesthetics.
            </p>
            {/* Social handles */}
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-zinc-200 text-xs font-mono font-bold tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-indigo-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Hook */}
          <div>
            <h3 className="text-zinc-200 text-xs font-mono font-bold tracking-wider uppercase mb-4">
              Contact Hook
            </h3>
            <div className="space-y-4 text-sm font-sans">
              <p className="text-zinc-400">
                Interested in building a high-performance product together? Get in touch.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center text-white hover:text-indigo-400 font-mono text-sm font-bold transition-all duration-200"
              >
                Start a project{" "}
                <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-[var(--footer-border)] mb-8" />

        {/* Bottom Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <div>
            &copy; {currentYear} eyad.dev. All rights reserved. Designed and developed with care.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Terms of Use
            </Link>
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
