"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

export function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for a fluid, premium delay effect
  const auraSpringX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.8 });
  const auraSpringY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.8 });

  const dotSpringX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.2 });
  const dotSpringY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.2 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <>
      {/* Ambient glowing aura in the background */}
      <motion.div
        className="fixed top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none z-0 blur-[90px]"
        style={{
          x: auraSpringX,
          y: auraSpringY,
          translateX: "-50%",
          translateY: "-50%",
          background: isLight
            ? "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 100%)"
            : "radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(6, 182, 212, 0.4) 50%, transparent 100%)",
          opacity: isLight ? 0.35 : 0.15,
          mixBlendMode: isLight ? "normal" : "screen",
        }}
      />

      {/* Tiny glowing dot trace element */}
      <motion.div
        className={
          isLight
            ? "fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-70 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
            : "fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-60 mix-blend-screen shadow-[0_0_10px_rgba(99,102,241,0.8)]"
        }
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
