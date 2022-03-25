import React, { FC } from "react";
import { useArticleStyles } from "./styles";
import { ArticleProps } from "./types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import clx from "classnames";
export const Container: FC<ArticleProps> = ({
  img,
  title,
  description,
  views,
  category,
  date,
  className,
}) => {
  const classes = useArticleStyles();
  return (
    <div className={clx(classes.containerPost, className)}>
      <img className={classes.containerImage} src={img.src} alt={img.alt} />
      <div className={classes.post}>
        <div className={classes.head}>
          <div className={classes.category}>{category}</div>
          <p className={classes.date}>{date}</p>
          <span className={classes.views}>
            <VisibilityIcon />
            {views}
          </span>
        </div>

        <div className={classes.containerInfo}>
          <h1 className={classes.containerHeader}>{title}</h1>
          <p className={classes.containerParagraph}>{description}</p>
          <Link to="/AboutPage" className={classes.readmoreBtn}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
