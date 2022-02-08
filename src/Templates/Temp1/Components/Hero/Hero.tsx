import { Typography } from "@mui/material";
import React from "react";

import { useHeroStyles } from "./styles";

const Hero = () => {
  const classes = useHeroStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h3">
        Lorem ipsum <span className={classes.span}>dolor sit amet,</span>{" "}
        consectetur adipiscing elit,
      </Typography>
      <div className={classes.hero}>
        <img src="https://cdn.wazobia.tech/Blog/blogheader.webp" alt="" />
      </div>
    </div>
  );
};

export default Hero;
