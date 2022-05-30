import { FC } from "react";
import { defaultBlogImage } from "utilities/images";
import { ArticleProps } from "../../types";
import { useRelatedPostStyles } from "./styles";
import clx from "classnames";
import { stripHtml } from "utilities/Post";

export const RelatedPost: FC<ArticleProps> = ({ article, site, className }) => {
  const classes = useRelatedPostStyles();
  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.thumbnailImgContainer}>
        <img
          src={article.featured_image ?? `${defaultBlogImage}`}
          className={classes.thumbnailImg}
        />
      </div>
      <div className={classes.thumbnailDetails}>
        <p className={classes.articleTitle}>{article.title}</p>
        <div className={classes.post}>{stripHtml(article.content).slice(0, 150)}</div>
      </div>
    </div>
  );
};
