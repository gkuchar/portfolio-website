"use client";

import { useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    // re-baseline scroll progress when the route changes
    scrollYProgress.set(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) || 0);
  }, [pathname, scrollYProgress]);

  if (pathname !== "/") return null;

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}