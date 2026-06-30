import book from "@/content/bloom/book.json";

export type BookPage = {
  id: string;
  title: string;
  src: string;
  edgeToEdge: boolean;
};

export type BookConfig = {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  background: "dynamic" | "static";
  cover: string;
  backCover: string;
  pages: BookPage[];
};

export function getBook(): BookConfig {
  return book as BookConfig;
}
