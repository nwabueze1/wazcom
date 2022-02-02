import { FC } from "react";
import { Link } from "react-router-dom";
import { usePopularDishesStyles } from "./styles";
// import { DishesData } from "Templates/Temp4/TemplateData";
import { Card } from "Templates/Temp4/Component/Card";
import { PopularDishesProps } from "./types";

export const PopularDishes: FC<PopularDishesProps> = ({ dishesData }) => {
  const classes = usePopularDishesStyles();

  const displayDishes = () =>
    dishesData?.map((dish, index) => (
      <Card
        key={index}
        img={{
          src: dish.img.src,
          alt: dish.img.alt,
        }}
        dishName={dish.dishName}
        price={dish.price}
      />
    ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          <p className={classes.header}>Popular Dishes</p>
          <Link to="/template4/menu" className={classes.viewMore}>
            View More
          </Link>
        </div>
        <p className={classes.details}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <div className={classes.dishes}>{displayDishes()}</div>
      </div>
    </div>
  );
};
