export type HeroProps = {
  className?: string;
  heroData: {
    img: {
      src: string;
      alt?: string;
    };
    header: string;
    description: string;
  };
};
