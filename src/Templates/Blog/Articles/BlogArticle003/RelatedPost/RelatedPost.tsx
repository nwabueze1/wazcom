import React, { FC } from "react";
import { defaultBlogImage } from "utilities/images";
import { ArticleProps } from "../../types";
import { useRelatedPostStyles } from "./styles";

export const RelatedPost: FC<ArticleProps> = ({ article, site }) => {
  const classes = useRelatedPostStyles();
  return (
    <div className={classes.root}>
      <div className={classes.thumbnailImgContainer}>
        <img
          src={article.featured_image ?? `${defaultBlogImage}`}
          className={classes.thumbnailImg}
        />
      </div>
      <div className={classes.thumbnailDetails}>
        <p className={classes.articleTittle}>{article.title}</p>
        <div className={classes.authorContainer}>
          <div className={classes.avatar}>
            <img
              src={article.featured_image ?? `${defaultBlogImage}`}
              className={classes.avatarImg}
            />
          </div>
          <div>
            <p className={classes.author}>
              {/* {site?.user?.firstname}&nbsp;{site?.user?.lastname} */}
              Olaiya Basit
            </p>
            <p className={classes.timePosted}>Posted 20 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
