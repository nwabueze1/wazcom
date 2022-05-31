import { FC } from "react";
import { CoreArticleTemplateFields } from "../../types";
import { useRelatedPostStyles } from "./styles";
import clx from "classnames";
import { stripHtml } from "utilities/Post";

export const RelatedPost: FC<CoreArticleTemplateFields> = ({
  article,
  handleClick,
  className,
}) => {
  const classes = useRelatedPostStyles();
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
