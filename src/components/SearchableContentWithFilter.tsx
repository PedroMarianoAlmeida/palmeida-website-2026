import { useState, useMemo, useEffect } from "react";
import Masonry from "react-masonry-css";
import { SearchableCardItem } from "@/types/searchableCard";
import { ContentCards } from "@/components/ContentCards";

interface SearchableContentWithFilterProps {
  items: SearchableCardItem[];
}

export function SearchableContentWithFilter({
  items,
}: SearchableContentWithFilterProps) {
  // Initialize state from URL query params
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const params = new URLSearchParams(window.location.search);
    const tags = params.get("tags");
    return tags ? tags.split(",").filter(Boolean) : [];
  });

  // Sync selectedTags with URL query params
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    if (selectedTags.length > 0) {
      params.set("tags", selectedTags.join(","));
    } else {
      params.delete("tags");
    }

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.replaceState({}, "", newUrl);
  }, [selectedTags]);

  // Extract all unique tags from items
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    items.forEach((item) => {
      item.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [items]);

  // Filter items based on selected tags
  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) {
      return items;
    }
    return items.filter((item) =>
      selectedTags.some((tag) => item.tags.includes(tag))
    );
  }, [items, selectedTags]);

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
          Showing {filteredItems.length} of {items.length} items
          {selectedTags.length > 0 && (
            <span className="ml-2 text-primary">
              (filtered by: {selectedTags.join(", ")})
            </span>
          )}
        </p>
      </div>

      {/* Items Masonry Grid */}
      <Masonry
        breakpointCols={{
          default: 3,
          1024: 2,
          768: 1,
        }}
        className="flex -ml-6 w-auto"
        columnClassName="pl-6 bg-clip-padding"
      >
        {filteredItems.map((item, index) => (
          <div key={index} className="mb-6">
            <ContentCards
              title={item.title}
              url={item.url}
              tags={item.tags}
              createdAt={item.createdAt}
              description={item.description}
              cta={item.cta}
              img={item.img}
            />
          </div>
        ))}
      </Masonry>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg mb-4">
            No items found with the selected filters.
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
