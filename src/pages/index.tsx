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
        <title>
          Pedro Almeida - Senior Software Engineer & AI Infrastructure Architect
        </title>
        <meta
          name="description"
          content="7+ years of engineering resilient systems using TypeScript and React. Senior Software Engineer specializing in Growth Engineering and AI Infrastructure."
        />
        <link rel="stylesheet" href="./styles.css" />
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
