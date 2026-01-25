import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const InsightsPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Insights - Pedro Almeida</title>
        <meta
          name="description"
          content="Technical insights and articles on Growth Engineering, Architecture, and modern web development practices."
        />
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <Header />

        {/* Main Content */}
        <main>
          <h1>Insights: The Brain</h1>
          <p>Thoughts and lessons from 7+ years of building complex web applications.</p>

          {/* Filter Categories */}
          <section>
            <h2>Browse by Topic</h2>
            <nav>
              <a href="#all">All</a>
              <a href="#growth-engineering">Growth Engineering</a>
              <a href="#architecture">Architecture</a>
              <a href="#testing">Testing & Quality</a>
              <a href="#leadership">Leadership</a>
            </nav>
          </section>

          {/* Growth Engineering */}
          <section id="growth-engineering">
            <h2>#Growth-Engineering</h2>

            <article>
              <h3>How I Used a Headless-CMS to Cut Lead Times by 80%</h3>
              <p>
                At NovaComp, we were facing a critical bottleneck: marketing teams
                needed to launch landing pages quickly, but every change required
                developer intervention and deployment cycles.
              </p>
              <p>
                By implementing a Headless-CMS with Next.js, we gave non-technical
                teams the power to create and iterate on high-conversion flows
                without touching code. The result? Lead times dropped from days to
                hours—an 80% reduction.
              </p>
              <p>
                This wasn't just about technology. It was about understanding the
                business problem and choosing the right architectural solution.
              </p>
              <a href="#">Read Full Article</a>
            </article>

            <article>
              <h3>Building Scalable Design Systems for Growth Teams</h3>
              <p>
                How we leveraged MongoDB and Next.js to create reusable,
                high-performance components that scale across multiple product teams.
              </p>
              <a href="#">Read Full Article</a>
            </article>
          </section>

          {/* Architecture */}
          <section id="architecture">
            <h2>#Architecture</h2>

            <article>
              <h3>Reducing UI Response Time by 40% Through Promise Optimization</h3>
              <p>
                Performance isn't always about the framework you choose—sometimes
                it's about understanding how asynchronous operations work under the hood.
              </p>
              <p>
                I discovered that our UI was making sequential API calls that could
                run in parallel. By refactoring our Promise chains and implementing
                Promise.all() strategically, we cut response times by 40%.
              </p>
              <p>
                The lesson? Always profile before optimizing, and never assume you
                know where the bottleneck is.
              </p>
              <a href="#">Read Full Article</a>
            </article>

            <article>
              <h3>From Monolith to Micro-Frontend: Lessons from 360.AGENCY</h3>
              <p>
                The architectural decisions, trade-offs, and practical lessons learned
                from migrating a monolithic application to a Micro-Frontend architecture.
              </p>
              <a href="#">Read Full Article</a>
            </article>
          </section>

          {/* Testing & Quality */}
          <section id="testing">
            <h2>#Testing & Quality</h2>

            <article>
              <h3>Raising Test Coverage from 60% to 95%: A Case Study from Moz</h3>
              <p>
                How I transformed testing culture using Jest and Cypress, making TDD
                a core part of the development workflow rather than an afterthought.
              </p>
              <a href="#">Read Full Article</a>
            </article>

            <article>
              <h3>Why TDD Isn't Just About Tests</h3>
              <p>
                Test-Driven Development is often misunderstood. It's not about
                achieving 100% coverage—it's about building confidence and enabling
                fearless refactoring.
              </p>
              <a href="#">Read Full Article</a>
            </article>
          </section>

          {/* Leadership */}
          <section id="leadership">
            <h2>#Leadership</h2>

            <article>
              <h3>Mentoring 20+ Developers: What I Learned at Triple Ten</h3>
              <p>
                Teaching React and Node.js to the next generation taught me as much
                as it taught them. Here's what mentoring revealed about clear
                communication and effective learning.
              </p>
              <a href="#">Read Full Article</a>
            </article>

            <article>
              <h3>The Polymath Mindset: Why I Don't Have a "Favorite" Stack</h3>
              <p>
                Why technology choices should be driven by project needs, not personal
                preference or resume-driven development.
              </p>
              <a href="#">Read Full Article</a>
            </article>
          </section>

          {/* LinkedIn Connection */}
          <section>
            <h2>More on LinkedIn</h2>
            <p>
              These insights are part of my ongoing writing on LinkedIn, where I share
              lessons learned, technical deep-dives, and thoughts on engineering culture.
            </p>
            <a href="https://www.linkedin.com/in/pedro-mariano-almeida/" target="_blank" rel="noopener noreferrer">
              Follow me on LinkedIn for more insights
            </a>
          </section>

          {/* Back to Home */}
          <div>
            <a href="./index.html">← Back to Home</a>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default InsightsPage;
