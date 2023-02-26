import React from "react";
import { useServiceCardStyles } from "./styles";
import { MbmcMenuCardProps } from "./types";
import clsx from "clsx";
import { menuImagePlaceholder } from "../../../../utilities/restaurant";
import { MbmcButton } from "../MbmcButton/MbmcButton";

export const MbmcMenuCard: React.FC<MbmcMenuCardProps> = ({
  onClick,
  name,
  image_url: imageUrl,
  description,
  price,
  startPrice,
}) => {
  const currency = "$";
  const isOpen = true;
  const classes = useServiceCardStyles({ isOpen });

  return (
    <div
      onClick={() => {
        isOpen && onClick?.();
      }}
      className={clsx(classes.root, classes.visible)}
    >
      <div
        className={classes.imageWrapper}
        style={{
          backgroundImage: `url(${imageUrl ?? menuImagePlaceholder})`,
        }}
      ></div>
      <div className={classes.content}>
        <div className={classes.menuHeaderContainer}>
          <p className={classes.title}>{name} </p>
          {startPrice ? (
            <p className={classes.price}>
              {currency}
              {price}
              {""} - {""}
              {currency}
              {price}
            </p>
          ) : (
            <p className={classes.price}>
              {currency}
              {price}
            </p>
          )}
        </div>
        <p className={classes.description}>{description}</p>
        <MbmcButton className={classes.menuButton} bgColor="#F25430">
          Order now
        </MbmcButton>
      </div>
    </div>
  );
};
