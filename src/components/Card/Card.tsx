import React, { FC } from "react";
import { useCardStyles } from "./styles";
import { Card as MuiCard } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({
  title,
  content,
  image: { src, alt },
}) => {
  const classes = useCardStyles();

  return (
    <MuiCard className={classes.root} variant="outlined">
      <CardContent>
        <div>
          <img src={src} alt={alt ?? title} />
        </div>
        <Typography className={classes.regtext}>{title}</Typography>
        <div className={classes.text}>{content}</div>
      </CardContent>
    </MuiCard>
  );
};
