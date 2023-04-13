import { FC } from "react";
import { useComponentPropsComponentStyles } from "./styles";
import { ComponentPropsWrapperProps } from "./types";

const ComponentPropsWraper: FC<ComponentPropsWrapperProps> = ({ children, maxWidth }) => {
  const classes = useComponentPropsComponentStyles();

  return (
    <div className={classes.wrapper} style={{ maxWidth }}>
      {children}
    </div>
  );
};

export default ComponentPropsWraper;
