export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center md:py-20 py-8 px-6 min-h-[85vh] md:min-h-[75vh]">
      {/* Brand Identity - Focused on Mission */}
      <h1 className="text-3xl md:text-7xl font-extrabold text-white tracking-tight mb-3 md:mb-4">
        Building Products.{" "}
        <span className="text-primary font-black italic">
          Teaching Engineers.
        </span>
      </h1>

      {/* Roles & Identity - Refined Typography */}
      <h2 className="text-base md:text-2xl font-medium mb-5 md:mb-8 max-w-3xl leading-snug tracking-tight">
        <span className="text-white/90">Senior Software Engineer</span>
        <span className="hidden md:inline mx-2 md:mx-3 text-primary/50 font-light">&</span>
        <br className="md:hidden" />
        <span className="text-white/90">Web Development Tutor</span>
      </h2>

      {/* The Narrative - Social Proof and Authority */}
      <p className="max-w-2xl text-sm md:text-lg text-gray-400 leading-relaxed mb-6 md:mb-10">
        7+ years of experience building in public and sharing technical insights
        with a community of
        <span className="text-accent font-bold mx-1">3,500+ followers</span> on
        LinkedIn. Currently mentoring the next generation of developers at
        Triple Ten, and privately.
      </p>

      {/* Primary CTA */}
      <a
        href="https://www.linkedin.com/in/palmeida-dev/recent-activity/all/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 md:px-8 py-3 md:py-4 bg-primary text-background font-bold rounded-lg
             hover:brightness-110 hover:scale-105 active:scale-95
             transition-all duration-200 shadow-xl shadow-primary/10 text-sm md:text-base"
      >
        Read Latest Insights →
      </a>
      {/* Build in Public Indicator - Interactive Link */}
      <div className="mt-8 md:mt-12 flex items-center gap-3 justify-center">
        {/* The Pulse */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
        </span>

        {/* The Link */}
        <a
          href="https://usd-latam-jobs.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] md:text-xs text-gray-300 uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold group transition-all text-center"
        >
          Currently Scaling
          <span className="text-secondary/60 group-hover:text-secondary ml-2 transition-colors duration-300 underline decoration-secondary/20 underline-offset-4">
            USD Latam Jobs
          </span>
        </a>
      </div>
    </section>
  );
}
