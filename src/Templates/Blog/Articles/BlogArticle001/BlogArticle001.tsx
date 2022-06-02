import React, { FC } from "react";
import { CoreArticleTemplateFields } from "../types";
import { useBlogArticle001Styles } from "./styles";

export const BlogArticle001: FC<CoreArticleTemplateFields> = ({ article, site }) => {
  const classes = useBlogArticle001Styles();
  const author = `${site?.user?.firstname} ${site?.user?.lastname}`;
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img
              src={article.featured_image ?? ""}
              alt={article.title}
              className={classes.image}
            />
          </div>
          <div className={classes.contentContainer}>
            <p className={classes.header}>{article.title}</p>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
