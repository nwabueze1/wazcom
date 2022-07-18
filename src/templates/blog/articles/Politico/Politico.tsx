import { FC, useEffect, useState } from "react";
import { CoreArticleTemplateFields } from "../types";
import { shareDataPolitico } from "./data";
import { RelatedPostPolitico } from "./RelatedPost/RelatedPost";
import { getDay } from "../../../../utilities/getTime";
import { usePoliticoStyles } from "./styles";
import clx from "classnames";
import Circle from "@mui/icons-material/Circle";

export const Politico: FC<CoreArticleTemplateFields> = ({
  article,
  domain,
  handleClick,
}) => {
  const classes = usePoliticoStyles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blogUrl = loaded && window.location.href;

  const displayRelatedPosts = () =>
    article.related_posts?.map((post, index) => (
      <RelatedPostPolitico
        key={index}
        article={post}
        domain={domain}
        handleClick={handleClick}
      />
    ));

  const isRelatedPosts = Boolean(
    article.related_posts && article.related_posts.length > 0
  );

  const displayTags = () =>
  article?.tags?.map((tag, index) => (
    <div className={classes.tag} key={index}>
      {tag?.name?.toUpperCase()}
    </div>
  ));

  const displaySocialIcons = () => {
    return shareDataPolitico.map((social, index) => {
      return (
       <div key={index} className={classes.socialIcons}>
         <a
          href={`${social.href}${blogUrl}`}
          target="_blank"
          rel="noreferrer"
          className={classes.icon}
        >
          <img src={social.src} alt={social.alt} />
        </a>
       </div>
      );
    });
  };

  return (
    <div className={classes.main}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Inter:wght@400;600&family=Merriweather&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className={classes.root}>
        <div
          className={clx(classes.content, {
            [classes.fullContent]: !isRelatedPosts,
          })}
        >
          <div className={classes.tagContainer}>{displayTags()}</div>
          <div className={classes.header}>
            <div className={classes.title}>{article?.title}</div>
            <div className={classes.authorInfo}>
              <span className={classes.date}>
                <Circle className={classes.circle} />{" "}
                {getDay(article?.created_at)}
              </span>{" "}
              <div className={classes.socialIconsContainer}>
                {displaySocialIcons()}
              </div>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <img
              className={classes.headerImage}
              src={article?.featured_image}
              alt={article.title.slice(0, 20)}
            />
          </div>
          <div
            className={classes.postContent}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
      <div className={classes.relatedPostsHeader}>
      <p className={classes.relatedPostsHeading}>
              Related Posts
            </p>
              <div className={classes.hr} />
            </div>
      <div className={classes.relatedPostsContainer}>
            {isRelatedPosts && (
            <div className={classes.relatedPostsItems}>
              {displayRelatedPosts()}
            </div>
          )}
          </div>
    </div>
  );
};
