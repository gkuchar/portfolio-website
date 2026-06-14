import Image from "next/image";

type ExperienceCardProps = {
  company: string;
  title: string;
  team: string,
  date: string;
  location: string;
  bullets: string[];
  logo: string;
};

export default function ExperienceCard({
  company,
  title,
  team,
  date,
  location,
  bullets,
  logo,
}: ExperienceCardProps) {
    return (
        <div className="relative border border-dashed border-foreground/30 bg-surface rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-surface-dk">
    <div className="absolute top-6 right-6">
        <Image src={logo} alt={`${company} logo`} width={96} height={96} className="rounded-xl border border-dashed border-foreground p-2" />
    </div>
    <h3 className="font-display text-2xl font-bold">{company}</h3>
    <p className="text-base font-bold mt-1">
        {title} <span className="text-sm font-normal text-foreground/60">- {team}</span>
    </p>
    <p className="text-xs text-foreground/60 mt-1">{date} | {location}</p>
    <ul className="space-y-1.5 mt-4 pr-32">
        {bullets.map((bullet) => (
        <li key={bullet} className="flex gap-2 text-sm text-foreground/80">
            <span className="text-foreground/40">▹</span>
            {bullet}
        </li>
        ))}
    </ul>
    </div>
    );
}