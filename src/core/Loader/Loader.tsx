import { FC } from "react";
import clx from "classnames";
import { LoaderProps } from "./types";
import { useLoaderStyles } from "./styles";

export const Loader: FC<LoaderProps> = ({ className }) => {
  const classes = useLoaderStyles();
  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.container}>
        <span className={classes.circle} />
        <span className={classes.circle} />
        <span className={classes.circle} />
        <span className={classes.circle} />
      </div>
    </div>
  );
};
