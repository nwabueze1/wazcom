import { useCardStyles } from "./styles";
import { FC, useState } from "react";
import { ArrowForward } from "@mui/icons-material";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ dishName, price, img, currency, category }) => {
  const classes = useCardStyles();
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className={classes.root}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={classes.imageContainer}>
        <img src={img.src} alt={dishName} />
      </div>
      <div className={classes.details}>
        <p className={classes.mealName}>{dishName}</p>
        <p className={classes.price}>{currency}{price}</p>
      </div>
      {hovered && (
        <>
          <div className={classes.dishOptions}>
            <p className={classes.addDish}>
              <p>Add to Cart</p>
              <ArrowForward className={classes.arrowIcon} />
            </p>
            <p className={classes.addDish}>
              <p>Checkout</p>
              <ArrowForward className={classes.arrowIcon} />
            </p>
          </div>
            <div className={classes.overlay} />
          </>
      )}
    </div>
  );
};
