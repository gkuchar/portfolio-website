"use client";

import Image from "next/image";
import type { RoadmapNode as RoadmapNodeType } from "@/lib/roadmap";

export default function RoadmapNode({ node }: { node: RoadmapNodeType }) {
  const isCurrent = node.current;

  const className = `flex flex-col items-center text-center shrink-0 p-4 rounded-2xl border-2 border-dashed transition-transform duration-300 hover:scale-[1.05] ${
    isCurrent
      ? "w-48 border-foreground bg-surface-dk"
      : "w-44 border-transparent"
  }`;

  const content = (
    <>
      {/* TOP SLOT */}
      <div className="h-20 flex items-center justify-center mb-3">
        {node.logo ? (
          <Image src={node.logo} alt="" width={72} height={72} className="object-contain h-auto w-auto max-h-12" />
        ) : node.status ? (
          <span
            className={`text-sm text-foreground text-center leading-tight ${
              isCurrent ? "font-bold" : "font-medium"
            }`}
          >
            {node.status}
          </span>
        ) : null}
      </div>

      {/* MIDDLE */}
      <div className="relative flex items-center justify-center h-36 mb-5">
        {node.type === "school" ? (
          <div className="relative flex items-center justify-center w-24 h-24">
            {/* dashed spinning ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-school-circle animate-spin-slow" />
            {/* full opaque backing — fills ring interior, hides the line everywhere inside */}
            <div className="absolute inset-1 rounded-full bg-background" />
            {/* colored fill on top */}
            <div className="w-16 h-16 rounded-full relative z-10" style={{ backgroundColor: node.fill }} />
          </div>
        ) : (
          <Image
            src={node.photo}
            alt={node.title}
            width={128}
            height={144}
            className="rounded-xl object-cover border-2 border-foreground/80"
          />
        )}
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col items-center gap-0.5">
        {node.type === "school" ? (
          <>
            <span className="text-sm font-semibold">{node.label}</span>
            <span className="text-xs text-foreground/60">{node.date}</span>
          </>
        ) : (
          <>
            <span className="text-sm font-semibold leading-tight">{node.title}</span>
            <span className="text-xs text-foreground/60">{node.date}</span>
          </>
        )}
      </div>
    </>
  );

  // current node → clickable mailto link; others → plain div
  if (isCurrent) {
    return (
      <a href="mailto:griffin.kuchar@gmail.com" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}