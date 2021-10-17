import { Typography } from "@mui/material";
import { FC } from "react";
import { useHeaderTitleStyles } from "./styles";
import { HeaderTitleProps } from "./types";
import clx from "classnames";

export const HeaderTitle: FC<HeaderTitleProps> = ({ className, children }) => {
  const classes = useHeaderTitleStyles();

  return (
    <Typography className={clx(classes.root, className)} variant="h1">
      {children}
    </Typography>
  );
};
