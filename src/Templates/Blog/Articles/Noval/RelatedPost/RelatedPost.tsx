import { FC } from "react";
import { ArticleProps } from "../../types";
import { useRelatedPostStyles } from "./styles";
import clx from "classnames";

export const RelatedPost: FC<ArticleProps> = ({ article, site, className }) => {
  const classes = useRelatedPostStyles();
  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.thumbnailImgContainer}>
        <img src={article.featured_image} className={classes.thumbnailImg} />
      </div>
      <div className={classes.thumbnailDetails}>
        <p className={classes.articleTittle}>{article.title}</p>
        <div className={classes.authorContainer}>
          <div className={classes.avatar}>
            <img src={site?.user?.avatar ?? ""} className={classes.avatarImg} />
          </div>
          <div>
            <p className={classes.author}>
              {site?.user?.firstname}&nbsp;{site?.user?.lastname}
            </p>
            <p className={classes.timePosted}>Posted 20 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
