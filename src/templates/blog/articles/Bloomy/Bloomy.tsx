import { FC, useState, useEffect } from "react";
import { CoreArticleTemplateFields, useDefaultAvatar } from "templates";
import { useBloomyStyles } from ".";
import { shareDataBloomy } from "./data";
import clx from "classnames";
import { parseDate } from "utilities/getTime";
import { BloomyRelatedPost } from "./RelatedPosts";

export const Bloomy: FC<CoreArticleTemplateFields> = ({
  article,
  site,
  domain,
  handleClick,
}) => {
  const classes = useBloomyStyles();
  const defaultAvatar = useDefaultAvatar(site);
  const [loaded, setLoaded] = useState(false);

  const displayTags = () =>
    article?.tags?.map((tag, index) => (
      <div key={index} className={classes.tag}>
        {tag?.name}
      </div>
    ));

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blogUrl = loaded && window.location.href;

  const displaySocialIcons = () => {
    return shareDataBloomy.map((social, index) => {
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

  const displayRelatedPosts = () =>
    article.related_posts
      ?.slice(0, 4)
      .map((post, index) => (
        <BloomyRelatedPost
          key={index}
          article={post}
          domain={domain}
          site={site}
          handleClick={handleClick}
        />
      ));

  return (
    <div className={classes.root}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className={classes.header}>
        <div className={classes.imgContainer}>
          <img
            src={article.featured_image}
            alt={article.title.slice(0, 20)}
            className={classes.featuredImg}
          />
        </div>
        <div className={classes.articleInfoContainer}>
          <div className={classes.articleInfo}>
            <p className={classes.tags}>{displayTags()}</p>
            <h1 className={classes.articleTitle}>{article.title}</h1>
            <div className={classes.blogInfo}>
              <div className={classes.blogInfoContainer}>
                {site?.user?.avatar ? (
                  <div className={classes.avatar}>
                    <img
                      src={site?.user?.avatar ?? ""}
                      className={clx(
                        classes.featuredImage,
                        classes.avatarImage
                      )}
                    />
                  </div>
                ) : (
                  <p className={classes.defaultAvatar}>{defaultAvatar}</p>
                )}
                <p className={classes.writtenBy}>
                  {site?.user?.firstname}&nbsp;{site?.user?.lastname}
                </p>
              </div>
              <p className={classes.postedTime}>
                <span className={classes.point} />
                {parseDate(article.created_at)}
              </p>
            </div>
            <div className={classes.socialIcons}>{displaySocialIcons()}</div>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        className={classes.content}
      />
      <div>
        <div className={classes.relatedPostHeader}>
          <p className={classes.relatedPostHeaderTitle}>Related Posts</p>
          <p className={classes.hr} />
        </div>
        <div className={classes.posts}>{displayRelatedPosts()}</div>
      </div>
    </div>
  );
};
