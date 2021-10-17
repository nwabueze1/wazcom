import { FC } from "react";
import { Card as MuiCard, CardActions, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardProps } from "./types";
import { Button } from "core";

export const Card: FC<CardProps> = ({
  title,
  content,
  image: { src, alt },
}) => {
  return (
    <MuiCard>
      <CardMedia component="img" height="140" image={src} alt={alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </MuiCard>
  );
};
