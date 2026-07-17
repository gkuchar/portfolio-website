"use client";

import Pill from "./Pill";
import { technical, focusAreas, values, roles } from "@/lib/skills";
import RotatingPhoto from "./RotatingPhoto";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-6 scroll-mt-24">
      <motion.div
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-5xl font-bold whitespace-nowrap">About</h2>
        <div className="flex-1 h-px bg-foreground/20" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          {/* bio paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base text-foreground leading-relaxed max-w-prose">
              I'm obsessed with systems-level architecture, agentic software design, and
              real-world machine learning applications (especially in social media and finance). As a result,
              I cannot stop consuming (and soon publishing) information surrounding these topics.
            </p>
            <p className="text-base text-foreground leading-relaxed max-w-prose mt-4">
              Outside of engineering, I love fitness (primarily running and lifting), my dogs,
              the Spurs, and everything outdoors.
            </p>
            
            <div className="text-base text-sm text-foreground leading-relaxed max-w-prose mt-6">Currently Reading: <a href="https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design" className="underline italic font-normal" target="_blank" rel="noopener noreferrer">A Philosophy of Software Design</a>
            </div>
          </motion.div>

          {/* roles card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-10 w-fit"
          >
            <div className="bg-surface border border-foreground/15 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-surface-dk">
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
          </motion.div>
        </div>

        {/* photo + circles */}
        <motion.div
          className="md:col-span-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[18rem] h-[18rem] rounded-full border-2 border-dashed border-foreground/25 animate-spin-reverse" />
            <div className="absolute w-[26rem] h-[26rem] rounded-full border-2 border-dashed border-foreground/25 animate-spin-reverse" />
            <div className="absolute w-[22rem] h-[22rem] rounded-full border-2 border-dashed border-foreground/40 animate-spin-slow" />
            <div className="absolute w-[14rem] h-[14rem] rounded-full border-2 border-dashed border-foreground/40 animate-spin-slow" />
            <div className="absolute w-[10rem] h-[10rem] rounded-full border-2 border-dashed border-foreground/25 animate-spin-reverse" />
            <div className="relative transition-transform duration-300 hover:scale-105">
              <RotatingPhoto />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Focus Areas + Values (as one block) */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
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
      </motion.div>
    </section>
  );
}