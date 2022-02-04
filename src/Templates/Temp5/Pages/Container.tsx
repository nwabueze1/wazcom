import React, { FC } from "react";
import { useStyles } from "./styles";
import { ArticleProps } from "./types";
import VisibilityIcon from "@mui/icons-material/Visibility";
export const Container: FC<ArticleProps> = ({
  img,
  title,
  description,
  views,
  category,
  date,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    
      <div className={classes.containerPost}>
        <img className={classes.containerImage} src={img.src} alt={img.alt} />
        <div className={classes.category}>
          {category}
          <p className={classes.date}>{date}</p>
          <VisibilityIcon />
          <p>{views}</p>
        </div>

        <div className={classes.containerInfo}>
          <h1 className={classes.containerHeader}>{title}</h1>
          <p className={classes.containerParagraph}>{description}</p>
          <p className={classes.readmoreBtn}>Read more</p>
        </div>
      </div>
    </div>
  );
};
