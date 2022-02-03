export type CardProps = {
  img: {
    src: string;
    alt: string;
  };
  dishName: string;
  price: string;
  currency: string;
  category?: string
};
