"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-5xl font-bold whitespace-nowrap">Projects</h2>
        <div className="flex-1 h-px bg-foreground/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
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
    </section>
  );
}