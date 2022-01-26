import React, { FC } from "react";
import { useRelatedPostStyles } from "./styles";
import { RelatedPostProps } from "./types";
import { Button } from "../../../../core/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const RelatedPost: FC<RelatedPostProps> = ({
  category,
  date,
  views,
  title,
  details,
  image,
}) => {
  const classes = useRelatedPostStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={image.src} alt={image.alt} className={classes.image} />
        </div>
        <div className={classes.rightContent}>
          <div className={classes.stats}>
            <p>{category}</p>
            <p className={classes.views}>
              <p className={classes.date}>{date}</p>
              <VisibilityIcon />
              <p>{views}</p>
            </p>
          </div>
          <p className={classes.title}>{title}</p>
          <p className={classes.details}>{details}</p>
          <Button variant="outlined" className={classes.btn}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};
