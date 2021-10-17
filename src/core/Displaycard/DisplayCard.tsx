import { FC } from "react";
import { useDisplayCardStyles } from "./styles";
import { DisplayCardProps } from "./types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import clx from "classnames";
import { IoIosCloseCircle } from "react-icons/io";
import { Typography } from "@mui/material";

export const DisplayCard: FC<DisplayCardProps> = ({
  className,
  total,
  title,
}) => {
  const classes = useDisplayCardStyles();

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
