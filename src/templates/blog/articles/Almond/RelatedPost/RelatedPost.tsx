import { FC } from "react";
import clx from "classnames";
import { stripHtml } from "../../../../../utilities/Post";
import { truncate } from "lodash";
import { CoreArticleTemplateFields } from "../..";
import { useRelatedPostGelloStyles } from ".";

export const RelatedPostAlmond: FC<CoreArticleTemplateFields> = ({
  article,
  handleClick,
  className,
  site
}) => {
  const classes = useRelatedPostGelloStyles();
  return (
    <div
      className={clx(classes.root, className)}
      onClick={() => handleClick?.(article.slug)}
    >
      <div className={classes.container}>
        <div className={classes.thumbnailImgContainer}>
          <img src={article.featured_image} className={classes.thumbnailImg} />
        </div>
        <div className={classes.thumbnailDetails}>
          <p className={classes.articleTitle}>
            {truncate(article.title, { length: 100 })}
          </p>
          {site?.cover_image ? (
            <div className={classes.avatarContainer}>
              <img
                src={site?.cover_image}
                alt=""
                className={classes.avatarImage}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
