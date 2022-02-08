import React, { FC } from "react";
import { useDishesStyles } from "./styles";
import { DishesProps } from "./types";

const Dishes: FC<DishesProps> = ({ src, alt, menu, price, mealDetails }) => {
  const classes = useDishesStyles();
  return (
    <div className={classes.container}>
      <div className={classes.menuBox}>
        <img className={classes.image} src={src} alt={alt} />
      </div>
      <p className={classes.meal}>
        <p>{menu}</p>
        <p>$ {price}</p>
      </p>
      <p className={classes.mealContent}>{mealDetails}</p>
    </div>
  );
};

export default Dishes;
