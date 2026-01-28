export function BentoGrid() {
  return (
    <section className="relative section-padding">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* USD Latam Jobs — NEW PRIMARY */}
          <article className="bento-card-secondary lg:col-span-4 lg:row-span-2 group order-1">
            <div className="absolute top-4 right-4 z-20 bg-secondary/20 border border-secondary/60 px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-secondary">
                Live Product
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                USD Latam Jobs
              </h3>
              <p className="text-gray-400 mb-3">
                Subscription-based SaaS connecting Latin American developers
                with <strong>US remote opportunities</strong>.
              </p>
              <p className="text-gray-300 mb-3">
                <span className="text-secondary font-bold">
                  18 active users
                </span>{" "}
                onboarding first paid subscribers.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Building in public and scaling through AI-powered automation.
              </p>
              <p className="text-sm font-mono text-secondary mb-4">
                MERN Stack • Playwright • Vercel • Automation
              </p>
              <a
                href="./insights.html?tags=Usd%20Latam%20Jobs"
                className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
              >
                See the Journey →
              </a>
            </div>
          </article>

          {/* Growth & Design Systems — CORPORATE PRIMARY */}
          <article className="bento-card-primary lg:col-span-8 hover:scale-[1.015] group order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                Growth & Design Systems
              </h3>
              <p className="text-gray-400 mb-3">
                <strong>Senior Software Engineer</strong> at{" "}
                <strong>NovaComp</strong>, architecting high-conversion
                acquisition flows for a leading{" "}
                <strong>US solar provider</strong>.
              </p>
              <p className="text-gray-300 mb-4">
                Bridging brand vision and engineering reality through scalable
                design systems and MongoDB-backed architectures.
              </p>
              <p className="text-sm font-mono text-primary">
                Next.js • Storybook • LaunchDarkly • MongoDB
              </p>
            </div>
          </article>

          {/* Engineering Mentorship */}
          <article className="bento-card-accent lg:col-span-4 group order-3">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                Engineering Mentorship
              </h3>
              <p className="text-gray-400 mb-2 text-sm">
                Guiding <span className="text-accent font-bold">20+</span>{" "}
                developers via weekly live sessions at{" "}
                <strong>TripleTen</strong>.
              </p>
              <p className="text-sm text-gray-400 mb-3">
                Code reviews, live debugging, and career coaching.
              </p>
              <p className="text-sm font-mono text-accent mb-3">
                Live Debugging • Career Coaching • Code Reviews
              </p>
              <a
                href="https://www.linkedin.com/in/pedro-fullstack/details/recommendations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
              >
                See testimonials on LinkedIn →
              </a>
            </div>
          </article>

          {/* AI Orchestration */}
          <article className="bento-card-neutral lg:col-span-4 hover:scale-105 group order-4">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                AI Orchestration
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Automating development workflows with Claude Code and MCPs to
                scale <strong>USD Latam Jobs</strong>.
              </p>
              <p className="text-gray-300 mb-4 text-sm">
                Building AI-native tooling across the modern development
                lifecycle.
              </p>
              <p className="text-sm font-mono text-gray-400">
                MCP • Claude Code • Playwright • Automation
              </p>
            </div>
          </article>

          {/* Tools & Products */}
          <article className="bento-card-neutral lg:col-span-4 hover:scale-105 group order-5">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                Tools & Products
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Other SaaS, npm packages and open source contributions.
              </p>
              <p className="text-gray-300 mb-4 text-sm">
                Contributing to repositories with{" "}
                <span className="text-accent font-bold">30k+</span> combined
                stars.
              </p>
              <a
                href="./portfolio.html"
                className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Explore the Portfolio →
              </a>
            </div>
          </article>

          {/* Industrial Roots & Leadership */}
          <article className="bento-card-accent lg:col-span-2 group order-6">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 text-white">
                Industrial Roots & Leadership
              </h3>
              <p className="text-gray-400 text-sm">
                Former Electrical Engineer
              </p>
              <p className="text-gray-400 text-sm">
                Led a team of 6 electricians
              </p>
            </div>
          </article>

          {/* Engineering Insights */}
          <article className="bento-card-neutral lg:col-span-6 hover:scale-[1.02] group order-7">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                Engineering Insights
              </h3>
              <p className="text-gray-400 mb-4">
                Building in public and sharing technical strategy with{" "}
                <span className="text-accent font-bold">3,500+</span> LinkedIn
                followers.
              </p>
              <p className="text-sm font-mono text-gray-400 mb-3">
                Building in Public • Technical Writing • Career Strategy
              </p>
              <a
                href="./insights.html"
                className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Explore by Topic →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
