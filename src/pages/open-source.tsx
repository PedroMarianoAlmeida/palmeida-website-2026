import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const OpenSourcePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Open Source - Pedro Almeida</title>
        <meta
          name="description"
          content="Explore Pedro Almeida's open source contributions, NPM packages, and technical knowledge base."
        />
        <link rel="stylesheet" href="./styles.css" />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
      </head>
      <body>
        <Header />

        {/* Main Content */}
        <main>
          <h1>Open Source: The Proof</h1>
          <p>Contributing to the ecosystem that powers modern web development.</p>

          {/* Enterprise Contributions */}
          <section>
            <h2>Enterprise Contributions</h2>
            <p>15+ Merge Requests to prominent open source repositories.</p>

            <article>
              <h3>PayPal</h3>
              <p>
                Contributing to PayPal's open source ecosystem with improvements
                in documentation, accessibility, and core functionality.
              </p>
            </article>

            <article>
              <h3>Meteor</h3>
              <p>
                Enhancing the Meteor framework with bug fixes and feature
                improvements for the TypeScript ecosystem.
              </p>
            </article>

            <article>
              <h3>React-Email</h3>
              <p>
                Contributing to the modern email development workflow with
                improvements to React-based email components.
              </p>
            </article>
          </section>

          {/* Knowledge Base */}
          <section>
            <h2>Knowledge Base</h2>
            <article>
              <h3>Web-Dev-Sifting: My Technical Second Brain</h3>
              <p>
                A curated repository of web development knowledge, patterns, and
                best practices accumulated over 7+ years of professional experience.
              </p>
              <p>
                This isn't just a collection of code snippets—it's a living document
                of problem-solving approaches, architectural decisions, and lessons
                learned across multiple projects and technologies.
              </p>
              <a href="https://github.com/PedroMarianoAlmeida/web-dev-sifting" target="_blank" rel="noopener noreferrer">
                View Web-Dev-Sifting Repository
              </a>
            </article>
          </section>

          {/* The Lab */}
          <section>
            <h2>The Lab</h2>
            <p>Experimenting with new technologies and building practical tools.</p>

            <article>
              <h3>NPM Packages</h3>
              <p>
                Published packages on NPM focusing on developer experience and
                productivity improvements in the TypeScript ecosystem.
              </p>
              <a href="https://www.npmjs.com/settings/pedro-almeida/packages" target="_blank" rel="noopener noreferrer">
                View My NPM Packages
              </a>
            </article>

            <article>
              <h3>Micro-SaaS Experiments</h3>
              <p>
                Building experimental micro-SaaS products using the OpenAI SDK,
                exploring the intersection of AI and practical business applications.
              </p>
              <p>
                These projects serve as both learning opportunities and practical
                tools, pushing the boundaries of what's possible with LLMs and
                modern web technologies.
              </p>
            </article>
          </section>

          {/* GitHub Stats */}
          <section>
            <h2>By the Numbers</h2>
            <ul>
              <li>15+ Merge Requests to prominent open source projects</li>
              <li>Multiple NPM packages published and maintained</li>
              <li>Active contributor to TypeScript ecosystem</li>
              <li>Focus areas: Documentation, Accessibility, Core Functionality</li>
            </ul>
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

export default OpenSourcePage;
