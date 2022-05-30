import { FC, useEffect, useState } from "react";
import { defaultBlogImage } from "utilities/images";
import { ArticleProps } from "../types";
import { useNovalStyles } from "./styles";
import clx from "classnames";
import { RelatedPost } from "./RelatedPost/RelatedPost";
import { BreadCrumb } from "core";
import { shareData } from "./data";
import { getTimeFrom } from "utilities/getTime";

export const Noval: FC<ArticleProps> = ({ article, site }) => {
  const classes = useNovalStyles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blogUrl = loaded && window.location.href;

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

  const isRelatedPosts = Boolean(
    article.related_posts && article.related_posts.length > 0
  );

  const displaySocialIcons = () => {
    return shareData.map((social, index) => {
      return (
        <a
          key={index}
          href={`${social.href}${blogUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={social.src} alt={social.alt} />
        </a>
      );
    });
  };

  const handleClick = (path: string) => {};

  return (
    <div className={classes.root}>
      <BreadCrumb crumbs={[]} handleClick={handleClick} />
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
          <h1 className={classes.title}>{article.title}</h1>
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
                {site?.user?.firstname}&nbsp;{site?.user?.lastname}
              </span>
            </p>
            <p className={classes.postedTime}>
              Posted {getTimeFrom(article.created_at)} ago
            </p>
          </div>
          <div className={classes.shareContainer}>
            <p className={classes.shareText}>Share post</p>
            <div className={classes.socialIcons}>{displaySocialIcons()}</div>
          </div>
        </div>
      </section>
      <div className={classes.contentContainer}>
        <div
          className={clx(classes.content, {
            [classes.fullContentWidth]: !isRelatedPosts,
          })}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        {isRelatedPosts && (
          <div className={classes.relatedArticles}>
            <p className={classes.relatedPost}>Related Posts</p>
            <div className={classes.posts}>{displayRelatedPosts()}</div>
          </div>
        )}
      </div>
    </div>
  );
};
