import React, { FC } from "react";
import { useComponentNameStyles } from "./styles";
import { ComponentNameProps } from "./types";
import clx from "classnames";

const ComponentName: FC<ComponentNameProps> = ({ className }) => {
  const classes = useComponentNameStyles();

  return <div className={clx(className, classes.root)} />;
};

export default ComponentName;
