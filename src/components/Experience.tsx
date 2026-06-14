import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/lib/experience";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-5xl font-bold whitespace-nowrap">Experience</h2>
        <div className="flex-1 h-px bg-foreground/20" />
      </div>

      <div className="relative space-y-8 max-w-4xl mx-auto">
        {/* dashed vertical line — extends above the first card and below the last */}
        <div className="absolute left-1/2 -top-8 -bottom-16 -translate-x-1/2 border-l-2 border-dashed border-foreground z-0" />

        {/* up arrowhead — above the top of the line */}
        <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-foreground z-0" />
        {experiences.map((exp) => (
          <div key={exp.company + exp.title} className="relative z-10">
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </section>
  );
}