import { SearchableCardItem } from "@/types/searchableCard";

type ContentCardsProps = SearchableCardItem;

export function ContentCards({
  title,
  url,
  tags,
  createdAt,
  description,
  cta,
}: ContentCardsProps) {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <article className="bento-card-neutral group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-lg lg:text-xl font-bold mb-3 text-white">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-400 mb-4">{description}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          {formattedDate && (
            <time className="text-sm text-gray-500">{formattedDate}</time>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
          >
            {`${cta} →`}
          </a>
        </div>
      </div>
    </article>
  );
}
