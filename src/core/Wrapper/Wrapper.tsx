import { FC } from "react";
import { useWrapperStyles } from "./styles";
import { WrapperProps } from "./types";

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  const classes = useWrapperStyles();

  return <div className={classes.root}>{children}</div>;
};
