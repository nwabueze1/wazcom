import { FC } from "react";
import { CoreArticleTemplateFields } from "../../types";
import { useRelatedPostNovalStyles } from "./styles";
import clx from "classnames";
import { getTimeFrom } from "utilities/getTime";
import { useDefaultAvatar } from "templates/Blog/helpers";

export const RelatedPostNoval: FC<CoreArticleTemplateFields> = ({
  article,
  site,
  className,
  handleClick,
}) => {
  const classes = useRelatedPostNovalStyles();
  const defaultAvatar = useDefaultAvatar(site);

  return (
    <div
      onClick={() => {
        handleClick?.(article.slug);
      }}
      className={clx(classes.root, className)}
    >
      <div className={classes.thumbnailImgContainer}>
        <img src={article.featured_image} className={classes.thumbnailImg} />
      </div>
      <div className={classes.thumbnailDetails}>
        <p className={classes.articleTitle}>{article.title}</p>
        <div className={classes.authorContainer}>
          {site?.user?.avatar ? (
            <div className={classes.avatar}>
              <img
                src={site?.user?.avatar ?? ""}
                className={classes.avatarImg}
              />
            </div>
          ) : (
            <p className={classes.defaultAvatar}>{defaultAvatar}</p>
          )}
          <div>
            <p className={classes.author}>
              {site?.user?.firstname}&nbsp;{site?.user?.lastname}
            </p>
            <p className={classes.timePosted}>
              Posted {getTimeFrom(article.created_at)} ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
