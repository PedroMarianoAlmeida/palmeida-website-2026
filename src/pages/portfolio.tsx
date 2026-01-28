import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Island } from "@/Island";
import { SearchableContentWithFilter } from "@/components/SearchableContentWithFilter";
import { linkedinPostList } from "@/data/portfolio";

const PortfolioPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pedro Almeida | Portfolio</title>
        <meta
          name="description"
          content="Explore Pedro Almeida's portfolio of open source contributions, NPM packages, and SaaS products. Filter by technology and project type."
        />
        <link rel="stylesheet" href="./styles.css" />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
        <script src="./islandRender.js" defer />
      </head>
      <body>
        <Header />

        {/* Main Content */}
        <main className="pt-2 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Portfolio
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl">
                A mix of high-impact open-source contributions and independent
                SaaS products I've engineered and launched from scratch.
              </p>
            </div>

            {/* Interactive Portfolio with Filter */}
            <Island>
              <SearchableContentWithFilter items={linkedinPostList} />
            </Island>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default PortfolioPage;
