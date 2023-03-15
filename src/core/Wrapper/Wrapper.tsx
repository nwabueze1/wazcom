import { FC } from "react";
import clx from "classnames";
import { useWrapperStyles } from "./styles";
import { WrapperProps } from "./types";

export const Wrapper: FC<WrapperProps> = ({ children, style }) => {
  const classes = useWrapperStyles({ style });

  return <div className={clx(classes.root)}>{children}</div>;
};
