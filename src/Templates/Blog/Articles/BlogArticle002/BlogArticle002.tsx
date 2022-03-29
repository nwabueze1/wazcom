import React, { FC } from "react";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { ArticleProps } from "../types";
import { useBlogArticle002Styles } from "./styles";
import { defaultBlogImage } from "utilities/images";

export const BlogArticle002: FC<ArticleProps> = ({ article, site }) => {
  const classes = useBlogArticle002Styles();
  const author = `${site?.user?.firstname} ${site?.user?.lastname}`;

  return (
    <section className={classes.root}>
      <div className={classes.header}>{article.title}</div>
      <img
        className={classes.hero}
        src={article.featured_image ?? `${defaultBlogImage}`}
      />
      <div className={classes.content}>
        dangerouslySetInnerHTML={{ __html: article.content }}
      </div>
      <img
        className={classes.image}
        src={article.featured_image ?? `${defaultBlogImage}`}
      />
      <div className={classes.imageText}>
        dangerouslySetInnerHTML={{ __html: article.content }}
      </div>
      <hr className={classes.horizontalLine} />
      <div className={classes.footerSection}>
        <h2 className={classes.author}>{author}</h2>
        <p className={classes.category}>
          Categories: {article.category?.slug as string}
        </p>
        <p className={classes.share}>Share article</p>
        <div className={classes.icons}>
          <Facebook />
          <Twitter />
        </div>
      </div>
    </section>
  );
};
