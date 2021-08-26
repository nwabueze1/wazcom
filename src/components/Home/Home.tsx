import React, { FC } from "react";
import { useStyles } from "./styles";
import { HomeProps } from "./types";
import clx from "classnames";

const Home: FC<HomeProps> = ({ className }) => {
  const classes = useStyles();

  return <div className={clx(className, classes.root)} />;
};

export default Home;
