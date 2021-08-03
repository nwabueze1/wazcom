import React, { FC } from "react";
import { useTextStyles } from "./styles";
import { TextProps } from "./types";
import { Typography } from "@material-ui/core";
import clx from "classnames";

const ZxText: FC<TextProps> = ({ className }) => {
  const classes = useTextStyles();

  return (
    <div className={clx(className, classes.root)}>
      <Typography variant="h1">Heading 1</Typography>
    </div>
  );
};

export default ZxText;
