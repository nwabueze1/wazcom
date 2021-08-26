import React, { FC } from "react";
import { useStyles } from "./styles";
import { DisplayCardProps } from "./types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import clx from "classnames";
import { IoIosCloseCircle } from "react-icons/io";
import { Typography } from "@material-ui/core";

export const DisplayCard: FC<DisplayCardProps> = ({
  className,
  total,
  title,
}) => {
  const classes = useStyles();

  return (
    <Card className={clx(className, classes.root)} variant="outlined">
      <CardContent className={classes.content}>
        <div>
          <Typography variant="h3">{total}</Typography>
          <div className={classes.pend}>{title}</div>
        </div>
        <IoIosCloseCircle className={classes.icon} />
      </CardContent>
    </Card>
  );
};
