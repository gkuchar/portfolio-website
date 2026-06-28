export type RoadmapNode =
  | {
      type: "school";
      logo?: string;       // TCU logo (concrete) — omit if uncertain
      status?: string;     // text annotation (uncertain) — e.g. "Waiting application decisions"
      current?: boolean;   // indicates current position in roadmap
      fill: string;        // circle fill color
      label: string;       // e.g. "BS CS"
      date: string;  
    }
  | {
      type: "job";
      logo?: string;       // AMD logo (concrete) — omit if uncertain
      status?: string;     // text annotation — e.g. "Actively searching", "?"
      current?: boolean;   // indicates current position in roadmap
      photo: string;       // badge photo (or silhouette)
      title: string;       
      date: string;        
    };

export const roadmap: RoadmapNode[] = [
  { type: "school", logo: "/logos/tcu_roadmap.png", fill: "#4d1979", label: "BS CS", date: "2025" },
  { type: "job", logo: "/logos/amd_roadmap.png", photo: "/roadmap/b1.png", title: "Hardware Engineering Intern", date: "Summer 2025" },
  { type: "school", logo: "/logos/tcu_roadmap.png", fill: "#4d1979", label: "BS CS", date: "2026" },
  { type: "job", logo: "/logos/amd_roadmap.png", photo: "/roadmap/b2.png", title: "Software Engineering Intern", date: "Summer 2026" },
  { type: "school", logo: "/logos/tcu_roadmap.png", fill: "#4d1979", label: "Graduate, BS CS", date: "May 2027" },
  { type: "job", status: "Actively searching", current: true, photo: "/roadmap/b1s.png", title: "Engineering Intern", date: "Summer 2027" },
  { type: "school", status: "Waiting application decisions", fill: "#FDB515", label: "Graduate, MS", date: "May 2028" },
  { type: "job", status: "?", photo: "/roadmap/b2s.png", title: "Full-time Engineer", date: "Summer 2028" },
];