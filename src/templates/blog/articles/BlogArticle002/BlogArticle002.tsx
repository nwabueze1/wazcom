import React, { FC } from "react";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { CoreArticleTemplateFields } from "..";
import { useBlogArticle002Styles } from ".";

export const BlogArticle002: FC<CoreArticleTemplateFields> = ({
  article,
  site,
}) => {
  const classes = useBlogArticle002Styles();

  return (
    <section className={classes.root}>
      <div className={classes.header}>{article.title}</div>
      <img className={classes.hero} src={article.featured_image} />
      <div className={classes.content}>
        dangerouslySetInnerHTML={{ __html: article.content }}
      </div>
      <img className={classes.image} src={article.featured_image} />
      <div className={classes.imageText}>
        dangerouslySetInnerHTML={{ __html: article.content }}
      </div>
      <hr className={classes.horizontalLine} />
      <div className={classes.footerSection}>
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
