import { FC } from "react";
import { CoreArticleTemplateFields } from "../../types";
import { useRelatedPostStyles } from "./styles";
import clx from "classnames";
import { getTimeFrom } from "utilities/getTime";
import { useDefaultAvatar } from "Templates/Blog/helpers";

export const RelatedPost: FC<CoreArticleTemplateFields> = ({
  article,
  site,
  className,
  handleClick,
}) => {
  const classes = useRelatedPostStyles();
  const defaultAvatar = useDefaultAvatar(site);

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.thumbnailImgContainer}>
        <img src={article.featured_image} className={classes.thumbnailImg} />
      </div>
      <div className={classes.thumbnailDetails}>
        <p className={classes.articleTitle} onClick={() => handleClick}>
          {article.title}
        </p>
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
