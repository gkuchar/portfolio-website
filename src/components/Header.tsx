import Link from "next/link"
import SectionNav from "./SectionNav"
import BrandLink from "./BrandLink";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background/50 backdrop-blur-sm border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex items-center px-6 py-3">
            <div className="flex-1">
              <BrandLink />
            </div>
            <div className="flex-1 flex justify-center">
              <SectionNav />
            </div>
            <div className="flex-1 justify-end flex items-center gap-6">
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