export type ArticleProps = {
  className?:string
  img: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
  date: string;
  description: string;
  category: string;
  views: number;
};
