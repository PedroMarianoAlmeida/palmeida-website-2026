export interface SearchableCardItem<T = string> {
  title: string;
  url: string;
  tags: T[];
  createdAt?: string; // It is actually a Date, but needs to be string to be serializable
  description?: string;
  cta?: string;
  img?: string;
  video?: string;
}
