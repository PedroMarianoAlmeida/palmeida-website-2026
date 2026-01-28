import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pedro Almeida | Product Engineer</title>
        <meta
          name="description"
          content="7+ years of building at the intersection of AI and Infrastructure. Senior Product Engineer specializing in Growth Engineering, TypeScript, and React. Founder of USD Latam Jobs."
        />
        <link rel="stylesheet" href="./styles.css" />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
      </head>
      <body>
        <Header />
        <Hero />
        <BentoGrid />
        <Footer />
      </body>
    </html>
  );
};

export default HomePage;
