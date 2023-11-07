import { FC } from "react";
import clx from "classnames";
import { truncate } from "lodash";
import { CoreArticleTemplateFields } from "../..";
import { getDay } from "../../../../../utilities/getTime";
import { useRelatedPostAlmondStyles } from "./styles";

export const RelatedPostAlmond: FC<CoreArticleTemplateFields> = ({
  article,
  handleClick,
  className,
  site,
}) => {
  const classes = useRelatedPostAlmondStyles();
  return (
    <div className={clx(classes.root, className)} onClick={() => handleClick?.(article.slug)}>
      <div className={classes.container}>
        <div className={classes.thumbnailImgContainer}>
          <img src={article.featured_image} className={classes.thumbnailImg} alt={site?.name} />
        </div>
        <div className={classes.thumbnailDetails}>
          <p className={classes.articleTitle}>{truncate(article.title, { length: 100 })}</p>
          {site?.cover_image ? (
            <div className={classes.avatarContainer}>
              <img src={site?.cover_image} alt={site?.name} className={classes.avatarImage} />
            </div>
          ) : (
            <div className={classes.alternateAvatar}></div>
          )}
          <span className={classes.date}>{getDay(article?.created_at)}</span>{" "}
        </div>
      </div>
    </div>
  );
};
