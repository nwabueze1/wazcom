import { FC, useEffect, useState } from "react";
import { CoreArticleTemplateFields } from "../types";
import { shareDataAlmond } from "./data";
import { RelatedPostAlmond } from "./RelatedPost/RelatedPost";
import { getDay } from "../../../../utilities/getTime";
import { useAlmondStyles } from "./styles";
import clx from "classnames";
import Circle from "@mui/icons-material/Circle";
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Almond: FC<CoreArticleTemplateFields> = ({
  article,
  domain,
  site,
  handleClick,
}) => {
  const classes = useAlmondStyles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blogUrl = loaded && window.location.href;

  const displayRelatedPosts = () =>
    article.related_posts?.map((post, index) => (
      <RelatedPostAlmond
        key={index}
        article={post}
        domain={domain}
        site={site}
        handleClick={handleClick}
      />
    ));

    const displaySocialIcons = () => {
      return shareDataAlmond.map((social, index) => {
        return (
          <div className={classes.socialIcon} key={index}>
            <a
              href={`${social.href}${blogUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.icon} src={social.src} alt={social.alt} />
            </a>
          </div>
        );
      });
    };

  const isRelatedPosts = Boolean(
    article.related_posts && article.related_posts.length > 0
  );


  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className={classes.root}>
        <div
          className={clx(classes.contentContainer, {
            [classes.fullContent]: !isRelatedPosts,
          })}
        >
          <div className={classes.heroContainer}>
            <div className={classes.hero}>
              <div className={classes.heroItems}>
                <p className={classes.title}>{article.title}</p>
                <div className={classes.authorInfo}>
                  {site?.cover_image ? (
                    <div className={classes.avatarContainer}>
                      <img
                        src={site?.cover_image}
                        alt=""
                        className={classes.avatarImage}
                      />
                    </div>
                  ) : null}
                  <p>
                    <span className={classes.date}>
                      {getDay(article?.created_at)}
                    </span>{" "}
                  </p>
                </div>
                <div className={classes.socialIconsContainer}>
                  {displaySocialIcons()}
                </div>
              </div>
            </div>
            <div className={classes.heroImageContainer}>
              <img
                className={classes.headerImage}
                src={article?.featured_image}
                alt={article.title.slice(0, 20)}
              />
            </div>
          </div>
          <div className={classes.body}>
            <div
              className={classes.postContent}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
          {isRelatedPosts && (
            <div className={classes.relatedPostsSection}>
              <div className={classes.hr} />
              <div className={classes.headerContainer}>
                <p className={classes.relatedPostsHeader}>Related Posts</p>
              </div>
              <div className={classes.relatedPostsContainer}>
                <div className={classes.relatedPosts}>
                  {displayRelatedPosts()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={classes.footer}>
            <span className={classes.footerContent}>
              <CopyrightIcon className={classes.copyright} />
              2022 by {site?.display_name}. Proudly created wih Hivedeck.com
            </span>
      </div>
    </>
  );
};
