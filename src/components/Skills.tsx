import Pill from "./Pill";
import { technical, focusAreas, values } from "@/lib/skills";
import { FaCode } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-5xl font-bold whitespace-nowrap">Skills</h2>
        <div className="flex-1 h-px bg-foreground/20" />
      </div>

      {/* Technical (2/3) + Venn (1/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="space-y-6">
            {Object.entries(technical).map(([group, items]) => (
              <div key={group}>
                <h4 className="text-sm uppercase tracking-wide text-foreground/50 mb-2">
                  {group}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Pill key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 flex items-center justify-center">
          <div className="relative w-96 h-96">
          {/* top — raised via negative top */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-dashed border-foreground animate-spin-slow" />
          {/* bottom */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-dashed border-foreground animate-spin-reverse" />
          {/* left */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-56 h-56 rounded-full border border-dashed border-foreground animate-spin-reverse" />
          {/* right */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-56 h-56 rounded-full border border-dashed border-foreground animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaCode
            size={112}
            className="text-foreground transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}