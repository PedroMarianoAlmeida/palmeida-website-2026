import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LinkedinPostCard } from "@/components/LinkedinPostCard";
import { linkedinPostList } from "@/data/linkedinPosts";

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
        <main className="pt-2 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Engineering Insights
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl">
                LinkedIn feed is ephemeral, but my content is not. Here you can
                see my meaningful LinkedIn content, filtered by category.
              </p>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linkedinPostList.map((post, index) => (
                <LinkedinPostCard
                  key={index}
                  title={post.title}
                  url={post.url}
                  tags={post.tags}
                  createdAt={post.createdAt}
                />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default InsightsPage;
