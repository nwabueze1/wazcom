import { useRef, useCallback } from "react";
import { postData } from "../../Template2Data";
import { Post } from "Templates/Temp2/Component/Post/Post";
import { useHomePageStyles } from "../styles";
import clx from "classnames";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

export const Popular = () => {
  const classes = useHomePageStyles();
  const displayPopularPosts = useCallback(
    () =>
      postData.map((post, index) => (
        <div className={classes.post} key={index}>
          <Post
            date={post.date}
            category={post.category}
            title={post.title}
            details={post.details}
            views={post.views}
            image={{
              src: post.image.src,
              alt: post.image.alt,
            }}
          />
        </div>
      )),
    [],
  );

  return (
    <div>
      <div className={classes.container}>
        <p className={classes.header}>Popular Posts</p>
        <div className={classes.postContainer}>{displayPopularPosts()}</div>
      </div>
    </div>
  );
};
