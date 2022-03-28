import React, { FC } from "react";
import { ArticleProps } from "../types";
import { useBlogArticle001Styles } from "./styles";
import { defaultBlogImage } from "utilities/images";

export const BlogArticle001: FC<ArticleProps> = ({ article, site }) => {
  const classes = useBlogArticle001Styles();
  const author = `${site?.user?.firstname} ${site?.user?.lastname}`;
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img
              src={article.featured_image ?? `${defaultBlogImage}`}
              alt={article.title}
              className={classes.image}
            />
          </div>
          <div className={classes.contentContainer}>
            <p className={classes.header}>jhdfjjfklhfjkhfjkskl</p>
            <p className={classes.content}>
              dangerouslySetInnerHTML={{ __html: article.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
