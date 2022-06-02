import { FC, useEffect, useState } from "react";
import { CoreArticleTemplateFields } from "../types";
import { useNovalStyles } from "./styles";
import clx from "classnames";
import { RelatedPostNoval } from "./RelatedPost/RelatedPost";
import { shareDataNoval } from "./data";
import { getTimeFrom } from "../../../../utilities/getTime";
import { useDefaultAvatar } from "../../helpers";
import { ThemeProvider } from "@mui/styles";
import theme from "../../../../theme";

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

  const defaultAvatar = useDefaultAvatar(site);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
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
              {site?.user?.avatar ? (
                <div className={classes.avatar}>
                  <img
                    src={site?.user?.avatar ?? ""}
                    className={clx(classes.featuredImage, classes.avatarImage)}
                  />
                </div>
              ) : (
                <p className={classes.defaultAvatar}>{defaultAvatar}</p>
              )}
              <p className={classes.writtenBy}>
                Written by{" "}
                <span className={classes.author}>
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
    </ThemeProvider>
  );
};
