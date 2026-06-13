import Pill from "./Pill";
import { technical, focusAreas, values, roles } from "@/lib/skills";
import RotatingPhoto from "./RotatingPhoto";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center gap-4 mb-12">
            <h2 className="font-display text-5xl font-bold whitespace-nowrap">About</h2>
            <div className="flex-1 h-px bg-foreground/20" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-base text-foreground leading-relaxed max-w-prose">
                I'm obsessed with systems-level architecture, agentic software design, and
                real-world machine learning applications (especially in finance). As a result,
                I cannot stop consuming (and now writing) articles surrounding these topics.
            </p>
            <p className="text-base text-foreground leading-relaxed max-w-prose mt-4">
                Outside of engineering, I love fitness (primarily running and lifting), my dogs,
                the Spurs, and everything outdoors.
            </p>
            <div className="mt-10">
                <h3 className="font-display text-2xl font-bold mb-4">Roles I'm Most Interested In</h3>
                <ul className="space-y-2">
                    {roles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-foreground/80">
                        <span className="text-foreground/40">▹</span>
                        {role}
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            <div className="md:col-span-1 flex justify-center">
            <div className="relative flex items-center justify-center">
                <div className="absolute w-[18rem] h-[18rem] rounded-full border-2 border-dashed border-foreground/25 animate-spin-reverse" />
                <div className="absolute w-[26rem] h-[26rem] rounded-full border-2 border-dashed border-foreground/25 animate-spin-reverse" />
                <div className="absolute w-[22rem] h-[22rem] rounded-full border-2 border-dashed border-foreground/40 animate-spin-slow" />
                <div className="absolute w-[14rem] h-[14rem] rounded-full border-2 border-dashed border-foreground/40 animate-spin-slow" />
                <div className="absolute w-[10rem] h-[10rem] rounded-full border-2 border-dashed border-foreground/25 animate-spin-reverse" />

                <div className="relative">
                <RotatingPhoto />
                </div>
            </div>
            </div>
        </div>
        {/* Focus Areas + Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">Focus Areas</h3>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <Pill key={area} label={area} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">Values</h3>
          <div className="flex flex-wrap gap-2">
            {values.map((value) => (
              <Pill key={value} label={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}