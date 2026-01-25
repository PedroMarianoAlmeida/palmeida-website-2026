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

          {/* Box 5: The Lab & Ventures (4x2 - Medium) */}
          <article className="lg:col-span-4 lg:row-span-2 bg-[#0B0B0B] border border-gray-700 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-5">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
                The Lab & Ventures
              </h3>
              <p className="text-gray-400 mb-6">
                Building developer-first tools and AI-integrated Micro-SaaS
                experiments. From NPM packages to production-ready products.
              </p>

              <div className="flex items-start justify-between gap-4">
                {/* NPM Tools Side */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-2">Developer Tools</p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      npm
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      TS
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      Rx
                    </div>
                  </div>
                </div>

                {/* SaaS Side */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-2">AI-Powered SaaS</p>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      AI
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Box 6: OSS (2x2 - Tall) */}
          <article className="lg:col-span-2 lg:row-span-2 bg-[#0B0B0B] border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-6">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 text-white">OSS</h3>
              <p className="text-gray-400 mb-2 text-sm">
                <span className="text-[#FFBF00] font-bold">15+</span> Merge
                Requests
              </p>
              <p className="text-xs text-gray-500">PayPal, React Email</p>
              <div className="mt-3 flex gap-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-emerald-600 rounded-sm"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-sm"></div>
                <div className="w-2 h-2 bg-emerald-700 rounded-sm"></div>
              </div>
            </div>
          </article>

          {/* Box 7: Foundational (2x1 - Square) */}
          <article className="lg:col-span-2 bg-[#0B0B0B] border border-[#FFBF00] rounded-3xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,191,0,0.5)] hover:scale-105 transition-all duration-300 relative overflow-hidden group order-4">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#FFBF00"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="#FFBF00"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="20"
                  stroke="#FFBF00"
                  fill="none"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 text-white">Industrial</h3>
              <p className="text-gray-400 mb-2 text-sm">
                <span className="text-[#FFBF00] font-bold">$1M+</span> budgets /
                CEDAE
              </p>
              <p className="text-xs font-mono text-[#FFBF00]">
                PLC • C/C++ • Leadership
              </p>
            </div>
          </article>

          {/* Box 8: Insights (6x1 - Wide) */}
          <article className="lg:col-span-6 bg-[#0B0B0B] border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.025] transition-all duration-300 relative overflow-hidden group order-7">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                Insights
              </h3>
              <p className="text-gray-400 mb-3">
                Cutting lead times by{" "}
                <span className="text-[#FFBF00] font-bold">80%</span> /
                Architecture tips.
              </p>
              <p className="text-sm text-gray-500">
                Optimized UI response times by{" "}
                <span className="text-[#FFBF00] font-bold">40%</span> through
                Promise orchestration.
              </p>
              <p className="text-sm text-emerald-500 mt-3">
                Read on LinkedIn →
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
