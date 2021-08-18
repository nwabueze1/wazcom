import React, { FC } from "react";
import { useCardStyles } from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardProps } from "./types";

const ZxCard: FC<CardProps> = ({ tittle, content, image }) => {
  const classes = useCardStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div>
          <img src={image} alt="image" />
        </div>
        <Typography className={classes.regtext}>{tittle}</Typography>
        <div className={classes.text}>{content}</div>
      </CardContent>
    </Card>
  );
};

export default ZxCard;
