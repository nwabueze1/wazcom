import React, { useState, useEffect, FC } from 'react';
import { useHaloStyles } from './styles';
import { Chip, Avatar } from '@mui/material';
import { heroImage } from './data';
import Circle from "@mui/icons-material/Circle";
import { post } from './data';
import { shareDataBloomy } from './data';
import {avatarImage} from './data';
import { CoreArticleTemplateFields } from "../types";
import {RelatedPostHalo} from "./RelatedPost/RelatedPost"
import { useDefaultAvatar } from "../../helpers";
import { getDay } from "../../../../utilities/getTime";

const Bloomy: FC<CoreArticleTemplateFields> = ({ article, site, domain, }) =>{
    const classes =  useHaloStyles()
    const [loaded, setLoaded] =  useState(false)
    const blogUrl = loaded && window.location.href;
  
    useEffect(() => {
        setLoaded(true);
      }, []);

      const isRelatedPosts = Boolean(
        article.related_posts && article.related_posts.length > 0
      );

      const displayRelatedPosts = () =>
    article.related_posts?.map((post, index) => (
      <RelatedPostHalo key={index} article={post} domain={domain} />
    ));

    const displayTags = () =>
    article?.tags?.map((tag, index) => (
      <Chip
      className={classes.tag}
      label={tag?.name}
      variant="outlined"
      key={index}
    />
    ));

    const displaySocialIcons = () => {
        return shareDataBloomy.map((social, index) => {
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

      const defaultAvatar = useDefaultAvatar(site);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.overlayContainer}>
        <div className={classes.heroContainer}>

          <img className={classes.headerImage}
           src={article?.featured_image}
           alt={article.title.slice(0, 20)}
           />

          <div className={classes.heroItems}>
            <div className={classes.titleContainer}>
            {displayTags()}
            <h1 className={classes.title}>
             {article?.title}
            </h1>
            <div className={classes.authorInfo}>
              <p>
                <span className={classes.authorName}>{site?.user_id}</span>
                <span>
                  <Circle className={classes.circleIcon} />{" "}
                  <span className={classes.date}>{getDay(article?.created_at)}</span>{" "}
                </span>
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className={classes.heroOverlay}>
        </div>
        </div>

        <div className={classes.body}>
            <div className={classes.topSocialIcons}>
                {displaySocialIcons()}
            </div>
            <div className={classes.postContent} dangerouslySetInnerHTML={{__html:article.content}} />
        </div>
        <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar} src={avatarImage} alt="" />
        </div>
        <div className={classes.authorDetails}>
            <div>
            <div>
                <p className={classes.authorText}>
                    Writen By
                </p>
                <p className={classes.name}>
                &nbsp;{site?.user?.firstname}&nbsp;{site?.user?.lastname}
                </p>
            </div>
            <div className={classes.bottomSocialIcons}>
                {displaySocialIcons()}
            </div>
            </div>
        </div>
        <div className={classes.relatedPostHeadingContainer}>
                  <h3 className={classes.relatedPostHeading}>
                    RELATED POSTS
                  </h3>
                  <div className={classes.hr}></div>
                </div>
                <div className={classes.relatedPostsContainer}>
                
                {isRelatedPosts && (
                                  <div className={classes.relatedPostsItems}>
                                  {displayRelatedPosts()}
                               </div>
                )}
                </div>
      </div>
    </>
  );
}

export default Bloomy