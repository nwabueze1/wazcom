import { FC, useEffect, useState } from "react";
import { defaultBlogImage } from "utilities/images";
import { ArticleProps } from "../types";
import { useBlogArticle003Styles } from "./styles";
import clx from "classnames";
import { RelatedPost } from "./RelatedPost/RelatedPost";
import { BreadCrumb } from "core";
import { shareData } from "./data";

export const BlogArticle003: FC<ArticleProps> = ({ article, site }) => {
  const classes = useBlogArticle003Styles();
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

  const isRelatedPost = () => {
    if (!article.related_posts) return true;
    if (article.related_posts.length > 0) return false;
    return true;
  };

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
                {/* {site?.user?.firstname}&nbsp;{site?.user?.lastname} */}
                olaiya basit
              </span>
            </p>
            <p className={classes.postedTime}>Posted 20 hours ago</p>
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
            [classes.fullContentWidth]: isRelatedPost(),
          })}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        {article?.related_posts && article.related_posts.length > 0 && (
          <div className={classes.relatedArticles}>
            <p className={classes.relatedPost}>Related Posts</p>
            <div className={classes.posts}>{displayRelatedPosts()}</div>
          </div>
        )}
      </div>
    </div>
  );
};
