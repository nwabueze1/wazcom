import React from "react";
import { useBlogArticle004Styles } from "./styles";

export const BlogArticle004 = () => {
  const classes = useBlogArticle004Styles();
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.imgContainer}>
          <img src="" alt="featuredImg" />
        </div>
      </div>
      <div className={classes.relatedArticleContainer}>leftcolumn</div>
    </div>
  );
};
