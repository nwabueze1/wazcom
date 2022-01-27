import React from "react";
import Hero from "../../Components/Hero/Hero";
import Menu from "../../Components/Menu/Menu";
import Rebase from "../../Components/Rebase/Rebase";
import Story from "../../Components/Story/Story";
import { useHomePageStyles } from "./styles";


export const HomePage = () => {
  const classes = useHomePageStyles();
  return (
    <div className={classes.root}>
      <Hero />
      <Menu />
      <Story />
      <Rebase /> 
    </div>
  );
};

