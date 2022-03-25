export type ArticleProps = {
  articleProps: {
    author: string;
    date: string;
    title: string;
    content: string;
    category?: string;
    featuredImg: {
      src: string;
      alt?: string;
    };
    views?: string;
  };
};
