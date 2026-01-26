import { useState, useMemo } from "react";
import { LinkedinPostCard } from "@/components/LinkedinPostCard";

interface LinkedinPost {
  title: string;
  url: string;
  tags: string[];
  createdAt: string;
}

interface LinkedinPostsWithFilterProps {
  posts: LinkedinPost[];
}

export function LinkedinPostsWithFilter({
  posts,
}: LinkedinPostsWithFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts based on selected tags
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return posts;
    }
    return posts.filter((post) =>
      selectedTags.some((tag) => post.tags.includes(tag))
    );
  }, [posts, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div>
      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Filter by Topic</h2>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-background border border-primary"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-primary/50 hover:text-white"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm">
          Showing {filteredPosts.length} of {posts.length} posts
          {selectedTags.length > 0 && (
            <span className="ml-2 text-primary">
              (filtered by: {selectedTags.join(", ")})
            </span>
          )}
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <LinkedinPostCard
            key={index}
            title={post.title}
            url={post.url}
            tags={post.tags}
            createdAt={post.createdAt}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg mb-4">
            No posts found with the selected filters.
          </p>
          <button
            onClick={clearFilters}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
