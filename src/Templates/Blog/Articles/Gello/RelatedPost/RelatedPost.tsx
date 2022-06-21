import { FC } from "react";
import clx from "classnames";
import { stripHtml } from "utilities/Post";
import { CoreArticleTemplateFields } from "../..";
import { useRelatedPostGelloStyles } from ".";

export const RelatedPostGello: FC<CoreArticleTemplateFields> = ({
  article,
  handleClick,
  className,
}) => {
  const classes = useRelatedPostGelloStyles();
  return (
    <div
      className={clx(classes.root, className)}
      onClick={() => handleClick?.(article.slug)}
    >
      <div className={classes.thumbnailImgContainer}>
        <img src={article.featured_image} className={classes.thumbnailImg} />
      </div>
      <div className={classes.thumbnailDetails}>
        <p className={classes.articleTitle}>{article.title}</p>
        <div className={classes.post}>
          {stripHtml(article.content).slice(0, 150) + "......."}
        </div>
      </div>
    </div>
  );
};
