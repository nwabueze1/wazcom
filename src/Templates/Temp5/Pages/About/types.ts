export type ArticleProps = {
  article: {
    title: string;
    content: string;
    featuredImg?: {
      src: string;
      alt: string;
    };
    author: string;
    category?: string;
  };
};
