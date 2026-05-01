export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/80 backdrop-blur">
      <div className="container flex flex-col gap-3 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          Saransh Kumar
          <span className="mx-2 text-border/80">•</span>
          Data & ML Systems Engineer
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em]">
          Built with Next.js and a little bit of magic ✨
        </div>
      </div>
    </footer>
  );
}
