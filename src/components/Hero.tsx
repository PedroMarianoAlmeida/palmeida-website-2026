export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-background min-h-[70vh]">
      {/* Brand Identity */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
        Building Products.{" "}
        <span className="text-primary font-black italic">
          Teaching Engineers.
        </span>
      </h1>

      {/* Roles & Context */}
      <h2 className="text-xl md:text-2xl font-medium text-secondary mb-8 max-w-3xl leading-snug">
        Senior Software Engineer at{" "}
        <span className="border-b-2 border-primary/20">NovaComp</span> &
        Tutor at Triple Ten.
      </h2>

      {/* The Narrative: Focus on Trust & Transparency */}
      <p className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-10">
        7+ years of experience building in public and sharing technical insights
        with a community of
        <span className="text-accent font-bold mx-1">3,500+ followers</span> on
        LinkedIn. Currently mentoring the next generation of developers at
        Triple Ten, and privately.
      </p>

      {/* CTAs: Reflecting the "Dual Pillar" Headline */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* The "Teaching" Pillar */}
        <a
          href="https://www.linkedin.com/in/pedro-mariano-almeida/recent-activity/all/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-primary text-background font-bold rounded-lg hover:brightness-110 transition-all shadow-xl shadow-primary/10 w-full sm:w-auto"
        >
          Read Latest Insights →
        </a>

        {/* The "Building" Pillar */}
        <a
          href="#the-lab"
          className="px-8 py-4 border border-gray-800 text-gray-300 font-bold rounded-lg hover:bg-white/5 transition-all w-full sm:w-auto"
        >
          Explore the Lab
        </a>
      </div>

      {/* Build in Public Indicator */}
      <div className="mt-12 flex items-center gap-3 opacity-60">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
        </span>
        <span className="text-xs text-gray-500 uppercase tracking-[0.3em] font-bold">
          Currently Building in Public
        </span>
      </div>
    </section>
  );
}
