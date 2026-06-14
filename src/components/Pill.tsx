export default function Pill({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 bg-surface rounded-full border border-foreground/20 text-sm transition hover:scale-110 hover:bg-foreground hover:text-background cursor-default">
      {label}
    </span>
  );
}