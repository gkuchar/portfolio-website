"use client";

import Pill from "./Pill";
import { technical, focusAreas, values } from "@/lib/skills";
import { FaCode } from "react-icons/fa";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24">
      <motion.div
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-5xl font-bold whitespace-nowrap">Skills</h2>
        <div className="flex-1 h-px bg-foreground/20" />
      </motion.div>

      {/* Technical (2/3) + Venn (1/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="space-y-6">
            {Object.entries(technical).map(([group, items], i) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h4 className="text-sm uppercase tracking-wide text-foreground/50 mb-2">
                  {group}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Pill key={item} label={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Venn circles + icon */}
        <motion.div
          className="md:col-span-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-96 h-96">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-dashed border-foreground animate-spin-slow" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-dashed border-foreground animate-spin-reverse" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-56 h-56 rounded-full border border-dashed border-foreground animate-spin-reverse" />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-56 h-56 rounded-full border border-dashed border-foreground animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <FaCode
                size={112}
                className="text-foreground transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}