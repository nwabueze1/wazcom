import React from "react";
import { useLayoutStyles } from "./styles";
import clx from "classnames";
import { LayoutProps } from "./types";
import _ from "lodash";

export const Layout: React.FC<LayoutProps> = ({
  className,
  count,
  onclick,
}) => {
  const classes = useLayoutStyles();
  return (
    <div className={clx(classes.root, className)} onClick={onclick}>
      {_.times(count, () => (
        <div className={classes.innerBox}></div>
      ))}
    </div>
  );
};
