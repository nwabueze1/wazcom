import React from "react";
import Hero from "./Hero/Hero";
import Menu  from "./Menu/Menu";
import Story from "./Story/Story";
import Rebase from "./Rebase/Rebase";
import NavBar from "./NavBar/NavBar";
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";
import {Footer} from "./Footer/Footer";

const useHomestyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    fontFamily: "Raleway",
  },
}));

const Template = () => {
  const classes = useHomestyles();
  return (
    <div className={classes.root}>
      <NavBar navheader={"Rebase peops"}/>
      <Hero />
      <Menu />
      <Story />
      <Rebase />
      <Footer navheader={"Rebase peops"} />
    </div>
  );
};
export default Template;
