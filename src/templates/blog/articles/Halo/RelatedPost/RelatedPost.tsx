import { FC } from "react";
import { CoreArticleTemplateFields } from "../../types";
import { useRelatedPostHaloStyles } from "./styles";
import { stripHtml } from "../../../../../utilities/Post";
import { truncate } from "lodash";
import { getDay } from "../../../../../utilities/getTime";

export const RelatedPostHalo: FC<CoreArticleTemplateFields> = ({ article, handleClick }) => {
  const classes = useRelatedPostHaloStyles();
  return (
    <div className={classes.relatedArticleContainer} onClick={() => handleClick?.(article.slug)}>
      <div className={classes.thumbnailImgContainer}>
        <img src={article.featured_image} className={classes.thumbnailImg} />
      </div>
      <div className={classes.thumbnailDetails}>
        <p className={classes.articleTitle}>{truncate(article.title, { length: 100 })}</p>
        <div className={classes.post}>{truncate(stripHtml(article.excerpt), { length: 100 })}</div>
        <div className={classes.articleDate}>{getDay(article.created_at)}</div>
      </div>
    </div>
  );
};
