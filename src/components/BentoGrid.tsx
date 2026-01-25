export function BentoGrid() {
  return (
    <section className="relative bg-[#0B0B0B] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          What I Do
        </h2>

        {/* Desktop: 12-column grid, Mobile: single column stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[700px] lg:max-h-[900px]">
          {/* Box 1: Growth & Design Systems (4x2 - Large) */}
          <article className="lg:col-span-4 lg:row-span-2 bg-[#0B0B0B] border border-[#00A86B] rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-[0_0_30px_rgba(0,168,107,0.5)] hover:scale-[1.025] transition-all duration-300 relative overflow-hidden group order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                Bridging the gap between brand vision and engineering reality by
                maintaining scalable Design Systems and MongoDB-backed
                architectures.
              </p>
              <p className="text-sm font-mono text-[#00A86B] mb-4">
                Next.js • MongoDB • LaunchDarkly • Storybook
              </p>
              <a
                href="./assets/pedro-almeida-cv.docx"
                download
                className="inline-block px-4 py-2 bg-[#00A86B] text-white rounded-lg hover:bg-[#00A86B]/80 transition-colors duration-200 text-sm font-medium"
              >
                Download CV
              </a>
            </div>
          </article>

          {/* Box 2: AI Orchestrator (4x1 - Wide) */}
          <article className="lg:col-span-4 bg-[#0B0B0B] border border-[#00F5FF] rounded-3xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                AI Orchestrator
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Using and creating the next generation of tools to master the
                AI-native development lifecycle.
              </p>
              <p className="text-gray-300 mb-4 text-sm">
                Becoming a faster, more precise developer every day by
                integrating Claude Code and custom MCPs into my daily workflow.
              </p>
              <p className="text-sm font-mono text-[#00F5FF]">
                MCP • Playwright • Claude Code • Automation
              </p>
            </div>
          </article>

          {/* Box 3: Technical Leadership & Mentorship (4x1 - Wide) */}
          <article className="lg:col-span-4 bg-[#0B0B0B] border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-3">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 text-white">
                Technical Leadership & Mentorship
              </h3>
              <p className="text-gray-400 mb-2 text-sm">
                Guiding <span className="text-[#FFBF00] font-bold">20+</span>{" "}
                developers via weekly live webinars and workshops.
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Providing career coaching and technical guidance to help
                engineers navigate the industry.
              </p>
              <p className="text-sm font-mono text-[#FFBF00] mb-3">
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

          {/* Box 5: The Lab (4x2 - Medium) */}
          <article className="lg:col-span-4 lg:row-span-2 bg-[#0B0B0B] border border-gray-700 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-5">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
                The Lab
              </h3>
              <p className="text-gray-400 mb-4">
                Designing and launching full-stack products with real clients and NPM packages with active users.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                From Micro-SaaS experiments to custom React boilerplates, I build and maintain the tools I use to optimize my own development workflow.
              </p>
              <p className="text-sm font-mono text-gray-500 mb-4">
                Product Strategy • NPM Publishing • Micro-SaaS
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Check the Project List →
              </a>
            </div>
          </article>

          {/* Box 6: Open Source Contributor (2x2 - Tall) */}
          <article className="lg:col-span-2 lg:row-span-2 bg-[#0B0B0B] border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-6">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 text-white">
                Open Source Contributor
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Contributing to high-impact projects used by thousands of
                developers worldwide.
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Enhancing the ecosystem across repositories with{" "}
                <span className="text-[#FFBF00] font-bold">30k+</span> combined
                stars.
              </p>
              <a
                href="https://github.com/pedroalpacheco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Contributions list on GitHub →
              </a>
            </div>
          </article>

          {/* Box 7: Foundational (2x1 - Square) */}
          <article className="lg:col-span-2 bg-[#0B0B0B] border border-[#FFBF00] rounded-3xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,191,0,0.5)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-4">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 text-white">
                Industrial Roots & Leadership
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Former electrical Engineer
              </p>
              <p className="text-gray-400 mb-3 text-sm">
                Led a team of 6 electricians
              </p>
            </div>
          </article>

          {/* Box 8: Engineering Insights (6x1 - Wide) */}
          <article className="lg:col-span-6 bg-[#0B0B0B] border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.025] transition-all duration-300 relative overflow-hidden group order-7">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                Engineering Insights
              </h3>
              <p className="text-gray-400 mb-4">
                Weekly posts on career growth, modern code, and AI workflows for
                a community of{" "}
                <span className="text-[#FFBF00] font-bold">3,500+</span>{" "}
                followers.
              </p>
              <p className="text-sm font-mono text-gray-500 mb-3">
                Career Strategy • Technical Writing
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
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
