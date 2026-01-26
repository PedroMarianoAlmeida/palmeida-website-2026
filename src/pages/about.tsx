import { Island } from "@/Island";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Pedro Almeida - The Journey</title>
        <meta
          name="description"
          content="From Electrical Engineering to Full Stack Development. Learn about Pedro Almeida's journey and professional evolution."
        />
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <Island>
          <Header />
        </Island>

        {/* Main Content */}
        <main>
          <h1>The Journey</h1>

          {/* The Pivot */}
          <section>
            <h2>The Pivot</h2>
            <article>
              <h3>From Electrical Engineering to Full Stack</h3>
              <p>
                I started my career as an Electrical Engineer, graduating from CEFET/RJ.
                After 5 years building embedded systems in C/C++ and Ladder Logic, I made
                a deliberate transition to Full Stack Development in 2018.
              </p>
              <p>
                This wasn't just a career change—it was an evolution. The analytical
                thinking and problem-solving skills from electrical engineering became
                the foundation for how I approach software architecture today.
              </p>
            </article>
          </section>

          {/* The Methodology */}
          <section>
            <h2>The Methodology</h2>
            <article>
              <h3>Test-Driven Development at Its Core</h3>
              <p>
                I'm a strong advocate for TDD using Jest and Cypress. At Moz, I didn't
                just write tests—I transformed the testing culture, raising code coverage
                from 60% to 95%.
              </p>
              <p>
                This wasn't about hitting metrics. It was about building confidence in
                every deployment, reducing bugs in production, and creating a safety net
                that allows teams to refactor and innovate without fear.
              </p>
            </article>
          </section>

          {/* The "Polymath" Mindset */}
          <section>
            <h2>The "Polymath" Mindset</h2>
            <article>
              <h3>Technology is a Tool, Not a Religion</h3>
              <p>
                I don't marry myself to a single stack or framework. At 360.AGENCY, I
                architected Micro-Frontend solutions. At Fetchly Labs, I dove into Ruby
                on Rails. The goal is always the same: choose the right tool for the job.
              </p>
              <p>
                This versatility comes from my engineering background. Whether it's
                MongoDB or PostgreSQL, React or Vue, TypeScript or Ruby—I adapt to what
                the project needs to succeed.
              </p>
              <p>
                Some call it being a generalist. I call it being effective.
              </p>
            </article>
          </section>

          {/* Career Highlights */}
          <section>
            <h2>Career Highlights</h2>
            <ul>
              <li>
                <strong>NovaComp (Current):</strong> Building high-conversion flows for a US Solar leader using MongoDB and Next.js
              </li>
              <li>
                <strong>Revelo:</strong> AI Training and custom MCP server development with TypeScript and OpenAI SDKs
              </li>
              <li>
                <strong>Triple Ten:</strong> Mentoring 20+ developers, teaching React and Node.js fundamentals
              </li>
              <li>
                <strong>Moz:</strong> Increased test coverage from 60% to 95% using TDD methodologies
              </li>
              <li>
                <strong>360.AGENCY:</strong> Architected Micro-Frontend solutions for enterprise clients
              </li>
              <li>
                <strong>Fetchly Labs:</strong> Full-stack development with Ruby on Rails
              </li>
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

export default AboutPage;
