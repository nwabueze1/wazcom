import React from "react";
import { useHeroStyles } from "./styles";
import { Button } from "core/Button";

export const Hero = () => {
  const classes = useHeroStyles();
  return (
    <div className={classes.root}>
      <div>
        <img
          src="https://s3.eu-west-2.amazonaws.com/medusa.com/templates/redcharlie-t-7KEq9M0b0-unsplash+1.png"
          alt="bloghero"
          className={classes.image}
        />
        <div className={classes.container}>
          <div className={classes.heroText}>
            <p className={classes.welcome}> Welcome to Yumchef Recipes</p>
            <p className={classes.content}>
              This blog is all for simplified lesson on varied recipes for real,
              actual and everyday life.
            </p>
            <Button className={classes.subscribe}>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
