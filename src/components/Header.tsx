import Link from "next/link"
import SectionNav from "./SectionNav"

export default function Header() {
  return (
    <header className="sticky top-0 bg-background/50 backdrop-blur-sm border-b border-foreground/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
            <Link href="/">griffinkuchar.com</Link>
            <SectionNav />
            <div className="flex items-center gap-6">
                <Link href="/newsletter" className="btn-secondary">Newsletter</Link>
                <Link href="/readings" className="btn-secondary">Readings</Link>
                <a href="https://www.linkedin.com/in/griffin-kuchar" target="_blank" rel="noopener noreferrer" className="btn-primary">
                LinkedIn
                </a>
            </div>
        </div>
    </header>
  );
}