export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-background min-h-[75vh]">
      {/* Brand Identity - Focused on Mission */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
        Building Products.{" "}
        <span className="text-primary font-black italic">
          Teaching Engineers.
        </span>
      </h1>

      {/* Roles & Identity - Refined Typography */}
      <h2 className="text-xl md:text-2xl font-medium mb-8 max-w-3xl leading-snug tracking-tight">
        <span className="text-white/90">Senior Software Engineer</span>
        <span className="mx-3 text-primary/50 font-light">&</span>
        <span className="text-white/90">Web Development Tutor</span>
      </h2>

      {/* The Narrative - Social Proof and Authority */}
      <p className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-10">
        7+ years of experience building in public and sharing technical insights
        with a community of
        <span className="text-accent font-bold mx-1">3,500+ followers</span> on
        LinkedIn. Currently mentoring the next generation of developers at
        Triple Ten, and privately.
      </p>

      {/* CTAs - Dual Pillar Logic */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* The "Teaching" Pillar */}
        <a
          href="https://www.linkedin.com/in/pedro-mariano-almeida/recent-activity/all/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-primary text-background font-bold rounded-lg 
               hover:brightness-110 hover:scale-105 active:scale-95 
               transition-all duration-200 shadow-xl shadow-primary/10 w-full sm:w-auto"
        >
          Read Latest Insights →
        </a>

        {/* The "Building" Pillar */}
        <a
          href="#the-lab"
          className="px-8 py-4 border border-gray-800 text-gray-300 font-bold rounded-lg 
               hover:bg-white/5 hover:scale-105 active:scale-95 
               transition-all duration-200 w-full sm:w-auto"
        >
          Explore the Lab
        </a>
      </div>
      {/* Build in Public Indicator - Active Signal */}
      <div className="mt-12 flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
        </span>
        <span className="text-xs text-gray-300 uppercase tracking-[0.3em] font-bold">
          Currently Building in Public
        </span>
      </div>
    </section>
  );
}
