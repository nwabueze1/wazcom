import React from "react";
import { useStyles } from "./styles";
import { MenuItemProps } from "./types";
import clsx from "clsx";
import {
  getCurrency,
  getFloatOrIntAmount,
  menuImagePlaceholder,
} from "utilities/restaurant";

export const Item: React.FC<MenuItemProps> = ({
  onClick,
  name,
  price,
  image_url: imageUrl,
  status,
  condition,
  description,
}) => {
  const currency = "$";
  const isOpen = true;
  const classes = useStyles({ isOpen });

  return (
    <>
      <div
        onClick={() => {
          isOpen && onClick?.();
        }}
        className={clsx(
          classes.root,
          status && classes.visible,
          condition && classes.noMargin
        )}
      >
        <div
          className={classes.imageWrapper}
          style={{
            backgroundImage: `url(${imageUrl ?? menuImagePlaceholder})`,
          }}
        ></div>
        <div className={classes.content}>
          <p className={classes.title}>{name} </p>
          <p className={classes.description}>
            {(description as string).length > 60
              ? (description as string).slice(0, 60) + "..."
              : description}
          </p>
          <span className={classes.amount}>
            {getCurrency(currency)}
            {getFloatOrIntAmount(price)}
          </span>
        </div>
      </div>
    </>
  );
};
