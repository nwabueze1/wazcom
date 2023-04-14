import { FC } from "react";
import clx from "classnames";
import { useWrapperStyles } from "./styles";
import { WrapperProps } from "./types";

export const Wrapper: FC<WrapperProps> = ({ children, title, description, className }) => {
  const classes = useWrapperStyles();

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>{title} </h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>{description}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
