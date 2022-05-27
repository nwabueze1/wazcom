import { FC } from "react";
import { defaultBlogImage } from "utilities/images";
import { ArticleProps } from "../types";
import { RelatedPost } from "./RelatedPost/RelatedPost";
import { useBlogArticle004Styles } from "./styles";

export const BlogArticle004: FC<ArticleProps> = ({ article, site }) => {
  const classes = useBlogArticle004Styles();
  const displayRelatedPosts = () =>
    article.related_posts?.map((post, index) => (
      <RelatedPost key={index} article={post} domain={""} />
    ));

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.imgContainer}>
          <img
            src={article.featured_image ?? `${defaultBlogImage}`}
            alt="featuredImg"
            className={classes.featuredImg}
          />
        </div>
        <h1 className={classes.title}>{article.title}</h1>
        <div className={classes.articleInfo}>
          <div className={classes.avatarContainer}>
            <img
              src={site?.cover_image ?? `${defaultBlogImage}`}
              alt=""
              className={classes.avatarImage}
            />
          </div>
          <p className={classes.written}>
            Written by <span className={classes.writersName}>Olaiya Basit</span>
          </p>
          <div className={classes.dateWritten}>
            <div className={classes.bulletPoint} />
            <p className={classes.date}>October 25, 2019</p>
          </div>
        </div>
        <hr className={classes.line} />
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className={classes.content}
        />
      </div>
      <div className={classes.relatedArticleContainer}>
        <p className={classes.relatedPostHeader}>Related Posts</p>
        <hr className={classes.postHr} />
        <div className={classes.relatedPosts}>{displayRelatedPosts()}</div>
      </div>
    </div>
  );
};
