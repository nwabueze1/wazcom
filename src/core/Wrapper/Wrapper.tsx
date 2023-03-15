import { FC } from "react";
import clx from "classnames";
import { useWrapperStyles } from "./styles";
import { WrapperProps } from "./types";

export const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  const classes = useWrapperStyles();

  return <div className={clx(classes.root, className)}>{children}</div>;
};
