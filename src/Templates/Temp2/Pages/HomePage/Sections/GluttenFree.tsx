import { useRef, useCallback } from "react";
import { postData } from "../../Template2Data";
import { Post } from "Templates/Temp2/Component/Post/Post";
import { useHomePageStyles } from "../styles";
import clx from "classnames";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

export const GluttenFree = () => {
  const classes = useHomePageStyles();
  const ref = useRef(document.createElement("div"));

  const scroll = (
    scrollOffset: number,
    ref: React.MutableRefObject<HTMLDivElement>,
  ) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const displayGluttenFreePost = useCallback(() => {
    return postData
      .filter((post) => post.category === "Glutten-free")
      .map((post, index) => (
        <Post
          key={index}
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
      ));
  }, []);

  return (
    <div>
      <div className={classes.container}>
        <div className={clx(classes.header, classes.navigate)}>
          <p>Glutten-free</p>
          <div className={classes.navigateButton}>
            <button className={classes.btn}>
              <ArrowBackIos className={classes.navIcon} />
            </button>
            <button className={classes.btn}>
              <ArrowForwardIos className={classes.navIcon} />
            </button>
          </div>
        </div>
        <div ref={ref} className={classes.postContainer}>
          {displayGluttenFreePost()}
        </div>
      </div>
    </div>
  );
};
