export default function Newsletter() {
  return (
    <main className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center py-32">
      <h1 className="font-display text-6xl font-bold">Coming Soon...</h1>
      <p className="text-lg text-foreground/70 mt-4">
        Get notified on new article releases.
      </p>
       <div className="flex items-center gap-3 mt-8 w-full max-w-md"> 
        <input
          type="email"
          placeholder="you@example.com"
          className="flex-1 px-4 py-2 rounded-lg border border-foreground/30 bg-transparent"
        />
        <button className="btn-primary">Subscribe</button>
      </div>
    </main>
  );
}