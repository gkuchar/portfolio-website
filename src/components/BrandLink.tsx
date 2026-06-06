"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BrandLink() {
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Link href="/" onClick={handleClick} className="text-lg btn-tertiary">
      griffinkuchar.com
    </Link>
  );
}