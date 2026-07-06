"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import RoadmapNode from "./RoadmapNode";
import { roadmap } from "@/lib/roadmap";

export default function Roadmap() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToEnd = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
  };

  return (
    <section id="roadmap" className="py-12 scroll-mt-24">
      {/* heading stays aligned with other sections */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-5xl font-bold whitespace-nowrap">Roadmap</h2>
          <div className="flex-1 h-px bg-foreground/20" />
        </motion.div>
      </div>

      {/* scroll-right hint — clickable, scrolls timeline to end */}
      <div className="max-w-6xl mx-auto px-6 mb-2">
        <motion.button
          onClick={scrollToEnd}
          className="flex items-center gap-1 text-foreground w-fit mx-auto bg-transparent border-none cursor-pointer transition-transform duration-300 hover:scale-[1.10]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ cursor: "pointer" }}
        >
          <span className="text-base">scroll</span>
          <svg
            className="w-4 h-4 animate-bounce-x"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>

      {/* horizontally scrollable timeline */}
      <div ref={scrollRef} className="overflow-x-scroll timeline-scroll py-6">
        <div className="relative flex flex-nowrap gap-x-1 px-6 w-max mx-auto">
          {/* dashed arrow behind nodes, at photo-center height */}
          <motion.div
            className="absolute left-6 right-2 z-0"
            style={{ top: "11.25rem" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.0 }}
          >
            <div className="relative border-t-2 border-dashed border-foreground/80">
              {/* start dot (left end of timeline) */}
              <div className="absolute left-0 -translate-x-1/2 -top-[5.5px] w-[10px] h-[10px] rounded-full bg-foreground" />
              {/* right arrowhead (points right, end of timeline) */}
              <div className="absolute right-0 translate-x-full -top-[10px] w-0 h-0 border-t-[9px] border-b-[9px] border-l-[12px] border-t-transparent border-b-transparent border-l-foreground" />
            </div>
          </motion.div>

          {/* nodes */}
          {roadmap.map((node, i) => (
            <motion.div
              key={i}
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.075 }}
            >
              <RoadmapNode node={node} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}