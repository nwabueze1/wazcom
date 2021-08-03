import React, { FC } from "react";
import { useComponentNameStyles } from "./styles";
import { ButtonNameProps } from "./types";
import clx from "classnames";

const Button: FC<ButtonNameProps> = ({ className }) => {
  const classes = useComponentNameStyles();

  return <div className={clx(className, classes.root)} />;
};

export default Button;
