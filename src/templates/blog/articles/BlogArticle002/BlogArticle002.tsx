import React, { FC } from "react";
import Facebook from "react-icons/md/MdFacebook";
import Twitter from "react-icons/md/MdTwitter";
import { CoreArticleTemplateFields } from "..";
import { useBlogArticle002Styles } from ".";

export const BlogArticle002: FC<CoreArticleTemplateFields> = ({ article }) => {
  const classes = useBlogArticle002Styles();

  return (
    <section className={classes.root}>
      <div className={classes.header}>{article.title}</div>
      <img className={classes.hero} src={article.featured_image} />
      <div className={classes.content} dangerouslySetInnerHTML={{ __html: article.content }} />
      <img className={classes.image} src={article.featured_image} />
      <div className={classes.imageText} dangerouslySetInnerHTML={{ __html: article.content }} />
      <hr className={classes.horizontalLine} />
      <div className={classes.footerSection}>
        <p className={classes.category}>Categories: {article.category?.slug as string}</p>
        <p className={classes.share}>Share article</p>
        <div className={classes.icons}>
          <Facebook />
          <Twitter />
        </div>
      </div>
    </section>
  );
};
