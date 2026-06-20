import { FaGithub } from "react-icons/fa";
import Pill from "./Pill";

type ProjectCardProps = {
  name: string;
  description: string[];
  skills: string[];
  github?: string;
};

export default function ProjectCard({ name, description, skills, github }: ProjectCardProps) {
  // shared inner content
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold leading-tight">{name}</h3>
        {github && <FaGithub size={22} className="text-foreground shrink-0" />}
      </div>

      <ul className="space-y-4 mt-4 flex-1">
        {description.map((point) => (
          <li key={point} className="flex gap-4 text-sm text-foreground/80">
            <span className="text-foreground/40">▹</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <Pill key={skill} label={skill} />
        ))}
      </div>
    </>
  );

  const cardClasses =
    "flex flex-col h-full bg-surface border border-dashed border-foreground/30 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-surface-dk";

  // if there's a repo, the whole card is a link; otherwise a plain div
  if (github) {
    return (
      <a href={github} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}