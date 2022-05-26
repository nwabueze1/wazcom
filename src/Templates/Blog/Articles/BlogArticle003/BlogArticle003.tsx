import React, { FC } from "react";
import { defaultBlogImage } from "utilities/images";
import { ArticleProps } from "../types";
import { useBlogArticle003Styles } from "./styles";
import clx from "classnames";
import { RelatedPost } from "./RelatedPost/RelatedPost";
import { BreadCrumb } from "core";

export const BlogArticle003: FC<ArticleProps> = ({ article, site }) => {
  const classes = useBlogArticle003Styles();

  const displayTags = () =>
    article?.tags?.map((tag, index) => (
      <div key={index} className={classes.tag}>
        {tag?.name}
      </div>
    ));

  const displayRelatedPosts = () =>
    article.related_posts?.map((post, index) => (
      <RelatedPost key={index} article={post} domain={""} />
    ));
  console.log(article.related_posts);
  console.log(
    Boolean(article?.related_posts && article?.related_posts?.length < 1)
  );
  const isRelatedPost = () => {
    if (!article.related_posts) return true;
    if (article.related_posts.length > 0) return false;
    return true;
  };

  const handleClick = (path: string) => {};

  return (
    <div className={classes.root}>
      <div>
        <BreadCrumb crumbs={[]} handleClick={handleClick} />
      </div>
      <section className={classes.header}>
        <div className={classes.featuredImageContainer}>
          <img
            src={article.featured_image ?? `${defaultBlogImage}`}
            alt={article.title}
            className={classes.featuredImage}
          />
        </div>
        <div className={classes.blogInfoContainer}>
          <div className={classes.tags}>{displayTags()}</div>
          <h1 className={classes.tittle}>{article.title}</h1>
          <div className={classes.blogInfo}>
            <div className={classes.avatar}>
              <img
                src={site?.cover_image ?? `${defaultBlogImage}`}
                className={clx(classes.featuredImage, classes.avatarImage)}
              />
            </div>
            <p className={classes.writtenBy}>
              Written by{" "}
              <span className={classes.authour}>
                {/* {site?.user?.firstname}&nbsp;{site?.user?.lastname} */}
                olaiya basit
              </span>
            </p>
            <p className={classes.postedTime}>Posted 20 hours ago</p>
          </div>
        </div>
      </section>
      <div className={classes.contentContainer}>
        <div
          className={clx(classes.content, {
            [classes.fullContentWidth]: isRelatedPost(),
          })}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        {article?.related_posts && article.related_posts.length > 0 && (
          <div className={classes.relatedArticles}>
            <p className={classes.relatedPost}>Related Posts</p>
            {displayRelatedPosts()}
          </div>
        )}
      </div>
    </div>
  );
};
