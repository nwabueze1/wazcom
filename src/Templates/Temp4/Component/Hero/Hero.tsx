import { useHeroStyles } from "./styles";
import { FC } from "react";
import { HeroProps } from "./types";
import clx from "classnames";
import { Button } from "core";

export const Hero: FC<HeroProps> = ({ className }) => {
  const classes = useHeroStyles();

  return (
    <div className={clx(classes.root, className)}>
        <img
          src="https://s3.eu-west-2.amazonaws.com/medusa.com/templates/unsplash_fdlZBWIP0aM.png"
          alt="heroimage"
          className={classes.image}
        />
      <div className={classes.heroTextContainer}>
        <div className={classes.heroContent}>
          <p className={classes.heroHeader}>Classic and Exotic Meals</p>
          <p className={classes.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <Button className={classes.btn}>Order Now</Button>
        </div>
      </div>
      <div className={classes.overlay} />
    </div>
  );
};
