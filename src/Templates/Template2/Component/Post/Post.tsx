import React, { FC } from "react";
import { usePostStyles } from "./styles";
import { postProps } from "./types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "../../../../core/Button";

export const Post: FC<postProps> = ({
  image,
  date,
  views,
  title,
  category,
  details,
}) => {
  const classes = usePostStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.image} src={image.src} alt={image.alt} />
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
  );
};
