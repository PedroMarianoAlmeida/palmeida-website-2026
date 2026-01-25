export function BentoGrid() {
  return (
    <section className="relative bg-background px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          Focus Areas
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[700px] lg:max-h-[900px]">
          {/* Growth & Design Systems — PRIMARY */}
          <article className="lg:col-span-4 lg:row-span-2 bg-background border border-primary rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-[0_0_30px_rgb(0_168_107/0.45)] hover:scale-[1.025] transition-all duration-300 relative overflow-hidden group order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                Growth & Design Systems
              </h3>
              <p className="text-gray-400 mb-3">
                <strong>MERN Developer</strong> at <strong>NovaComp</strong>,
                architecting high-conversion acquisition flows for a leading{" "}
                <strong>US solar provider</strong>.
              </p>
              <p className="text-gray-300 mb-4">
                Bridging brand vision and engineering reality through scalable
                design systems and MongoDB-backed architectures.
              </p>
              <p className="text-sm font-mono text-primary">
                Next.js • MongoDB • LaunchDarkly • Storybook
              </p>
            </div>
          </article>

          {/* AI Orchestrator — SECONDARY */}
          <article className="lg:col-span-4 bg-background border border-secondary/70 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_24px_rgb(0_245_255/0.35)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                AI Orchestrator
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Creating and integrating AI-native tooling across the modern
                development lifecycle.
              </p>
              <p className="text-gray-300 mb-4 text-sm">
                Accelerating daily workflows with Claude Code, MCPs, and
                automation.
              </p>
              <p className="text-sm font-mono text-secondary">
                MCP • Playwright • Claude Code • Automation
              </p>
            </div>
          </article>

          {/* Technical Leadership & Mentorship */}
          <article className="lg:col-span-4 bg-background border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_20px_rgb(0_168_107/0.25)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-3">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 text-white">
                Technical Leadership & Mentorship
              </h3>
              <p className="text-gray-400 mb-2 text-sm">
                Guiding <span className="text-accent font-bold">20+</span>{" "}
                developers via weekly live sessions.
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Career coaching, live debugging, and technical guidance.
              </p>
              <p className="text-sm font-mono text-accent mb-3">
                Public Speaking • Live Debugging • Mentorship
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

          {/* The Lab */}
          <article className="lg:col-span-4 lg:row-span-2 bg-background border border-gray-700 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-5">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
                The Lab
              </h3>
              <p className="text-gray-400 mb-4">
                Designing and launching full-stack products with real clients
                and active NPM users.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                From Micro-SaaS experiments to internal tooling, I build systems
                that optimize my own workflow.
              </p>
              <p className="text-sm font-mono text-gray-500 mb-4">
                Product Strategy • NPM Publishing • Micro-SaaS
              </p>
              <a
                href="#"
                className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Check the Project List →
              </a>
            </div>
          </article>

          {/* Open Source Contributor */}
          <article className="lg:col-span-2 lg:row-span-2 bg-background border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-6">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 text-white">
                Open Source Contributor
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Contributing to high-impact tools used by thousands.
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Across repositories with{" "}
                <span className="text-accent font-bold">30k+</span> combined
                stars.
              </p>
              <a
                href="https://github.com/pedroalpacheco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Contributions on GitHub →
              </a>
            </div>
          </article>

          {/* Industrial Roots */}
          <article className="lg:col-span-2 bg-background border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_20px_rgb(255_191_0/0.25)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-4">
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
          <article className="lg:col-span-6 bg-background border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_18px_rgba(255,255,255,0.15)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group order-7">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                Engineering Insights
              </h3>
              <p className="text-gray-400 mb-4">
                Weekly writing on careers, modern code, and AI workflows for{" "}
                <span className="text-accent font-bold">3,500+</span>{" "}
                developers.
              </p>
              <p className="text-sm font-mono text-gray-500 mb-3">
                Career Strategy • Technical Writing
              </p>
              <a
                href="#"
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
