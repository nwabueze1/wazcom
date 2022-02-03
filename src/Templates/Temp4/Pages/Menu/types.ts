export type MenuProps ={
    categoriesTabs: string []
    dishesData: {
        img: {
          src: string;
          alt: string;
        };
        dishName: string;
        price: string;
        category: string
      }[]; 
}