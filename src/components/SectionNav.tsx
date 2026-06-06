"use client";

import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function SectionNav() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <nav className="flex items-center gap-6">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className="btn-tertiary">
          {link.label}
        </a>
      ))}
    </nav>
  );
}