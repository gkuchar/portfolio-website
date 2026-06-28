"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";
import { motion } from "motion/react";

const rows: (typeof projects)[] = [];
for (let i = 0; i < projects.length; i += 3) {
  rows.push(projects.slice(i, i + 3));
}

// horizontal centers of the 3 columns (≈ 1/6, 1/2, 5/6 of the width)
const cols = [16.67, 50, 83.33];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24">
      <motion.div
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-5xl font-bold whitespace-nowrap">Projects</h2>
        <div className="flex-1 h-px bg-foreground/20" />
      </motion.div>

      {/* outer wrapper: anchors the full-height column lines */}
      <div className="relative">
        {/* vertical column arrows (desktop only) */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.0 }}
        >
          {cols.map((pos) => (
            <div
              key={pos}
              className="absolute -top-6 -bottom-6 border-l-2 border-dashed border-foreground -z-10"
              style={{ left: `${pos}%` }}
            >
              {/* top arrowhead (points up) */}
              <div className="absolute top-0 -translate-y-full -left-[7px] w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-foreground" />
              {/* bottom arrowhead (points down) */}
              <div className="absolute bottom-0 translate-y-full -left-[7px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-foreground" />
            </div>
          ))}
        </motion.div>

        {/* rows */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              {/* double-sided dashed arrow behind the row (desktop only) */}
              <motion.div
                className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-6 -right-6 -z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 2.0 }}
              >
                <div className="relative border-t-2 border-dashed border-foreground">
                  {/* left arrowhead (points left) */}
                  <div className="absolute left-0 -translate-x-full -top-[7px] w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-foreground" />
                  {/* right arrowhead (points right) */}
                  <div className="absolute right-0 translate-x-full -top-[7px] w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-foreground" />
                </div>
              </motion.div>

              {/* the row's 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {row.map((project, i) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}