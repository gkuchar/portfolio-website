import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      {Array.from({ length: 30 }).map((_, i) => (
        <p key={i} className="py-4 text-lg">
          Placeholder line {i + 1}
        </p>
      ))}
    </main>
  );
}
