import React, { FC } from "react";
import { useComponentNameStyles } from "./styles";
import { RadioButtonProps } from "./types";
import clx from "classnames";

const RadioButton: FC<RadioButtonProps> = ({ className }) => {
  const classes = useComponentNameStyles();

  return <div className={clx(className, classes.root)} />;
};

export default RadioButton;
