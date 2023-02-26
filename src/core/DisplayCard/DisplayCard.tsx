import { FC } from "react";
import { useDisplayCardStyles } from "./styles";
import { DisplayCardProps } from "./types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import clx from "classnames";
import { IoIosCloseCircle } from "react-icons/io";
import { Typography } from "@mui/material";

export const DisplayCard: FC<DisplayCardProps> = ({ className, total, title, color, close }) => {
  const classes = useDisplayCardStyles();

  return (
    <Card className={clx(className, classes.root)} variant="outlined">
      <CardContent className={classes.content}>
        <div>
          <Typography variant="h3" color={color ?? "inherit"}>
            {total}
          </Typography>
          <Typography className={classes.pend} color={color ?? "inherit"}>
            {title}
          </Typography>
        </div>
        <IoIosCloseCircle className={classes.icon} onClick={close} />
      </CardContent>
    </Card>
  );
};
