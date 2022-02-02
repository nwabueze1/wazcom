import { useCardStyles } from "./styles";
import { FC, useState } from "react";
import { ArrowForward } from "@mui/icons-material";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ dishName, price, img }) => {
  const classes = useCardStyles();
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className={classes.root}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={classes.imageContainer}>
        <img
          src={img.src}
          alt={img.src}
        />
      </div>
      <div className={classes.details}>
        <p className={classes.mealName}>{dishName}</p>
        <p className={classes.price}>${price}</p>
      </div>
      {hovered && (
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
      )}
      {hovered && <div className={classes.overlay} />}
    </div>
  );
};
