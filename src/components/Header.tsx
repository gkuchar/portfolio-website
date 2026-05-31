import Link from "next/link"
import SectionNav from "./SectionNav"

export default function Header() {
  return (
    <header className="sticky top-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
            <Link href="/">griffinkuchar.com</Link>
            <SectionNav />
            <div className="flex items-center gap-6">
                <Link href="/newsletter">Newsletter</Link>
                <Link href="/readings">Readings</Link>
                <a href="https://www.linkedin.com/in/griffin-kuchar" target="_blank" rel="noopener noreferrer">
                LinkedIn
                </a>
            </div>
        </div>
    </header>
  );
}