import { FC, useEffect, useState } from "react";
import clx from "classnames";
import { RelatedPostNoval } from "./RelatedPost/RelatedPost";
import { shareDataNoval } from "./data";
import { getDay } from "../../../../utilities/getTime";
import { CoreArticleTemplateFields } from "..";
import { useNovalStyles } from ".";
import { Footer } from "../common/Footer";

export const Noval: FC<CoreArticleTemplateFields> = ({
  article,
  site,
  domain,
  handleClick,
}) => {
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
      <RelatedPostNoval
        key={index}
        article={post}
        domain={domain}
        site={site}
        handleClick={handleClick}
      />
    ));

  const isRelatedPosts = Boolean(
    article.related_posts && article.related_posts.length > 0
  );

  const displaySocialIcons = () => {
    return shareDataNoval.map((social, index) => {
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

  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className={classes.container}>
        <section className={classes.header}>
          <div className={classes.featuredImageContainer}>
            <img
              src={article.featured_image}
              alt={article.title}
              className={classes.featuredImage}
            />
          </div>
          <div className={classes.blogInfoContainer}>
            <div className={classes.tags}>{displayTags()}</div>
            <h1 className={classes.title}>{article.title}</h1>
            <div className={classes.blogInfo}>
              <p className={classes.postedTime}>
                Posted {getDay(article.created_at)}
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
            className={clx("templatePostContent", classes.content, {
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
      <Footer name={site?.name as string} className={classes.footer} />
    </div>
  );
};
