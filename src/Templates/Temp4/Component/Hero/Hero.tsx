import { useHeroStyles } from "./styles";
import { FC } from "react";
import { HeroProps } from "./types";
import clx from "classnames";
import { Button } from "core";

export const Hero: FC<HeroProps> = ({ className, heroData}) => {
  const classes = useHeroStyles();

  return (
    <div className={clx(classes.root, className)}>
        <img
          src={heroData.img.src}
          alt={heroData.img.alt}
          className={classes.image}
        />
      <div className={classes.heroTextContainer}>
        <div className={classes.heroContent}>
          <p className={classes.heroHeader}>{heroData.header}</p>
          <p className={classes.description}>
            {heroData.description}
          </p>
          <Button className={classes.btn}>Order Now</Button>
        </div>
      </div>
      <div className={classes.overlay} />
    </div>
  );
};
