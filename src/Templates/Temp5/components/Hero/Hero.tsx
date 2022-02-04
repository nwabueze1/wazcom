import React from "react";
import { heroText, welcomeMessage } from "Templates/Temp5/TemplateData";
import { useHeroStyles } from "./styles";

export const Hero = () => {
  const classes = useHeroStyles();
  return (
    <div className={classes.root}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url("https://s3.eu-west-2.amazonaws.com/medusa.com/templates/Frame+2302+(2).png")`,
        }}
      >
        <div className={classes.heroText}>
          <p className={classes.welcome}>{welcomeMessage}</p>
          <p className={classes.content}>{heroText}</p>
        </div>
      </div>
    </div>
  );
};
