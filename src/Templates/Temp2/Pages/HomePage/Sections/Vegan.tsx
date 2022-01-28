import { useRef, useCallback } from "react";
import { postData } from "../../Template2Data";
import { Post } from "Templates/Temp2/Component/Post/Post";
import { useHomePageStyles } from "../styles";
import clx from "classnames";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

export const Vegan = () => {
  const classes = useHomePageStyles();
  const veganRef = useRef<HTMLDivElement>(document.createElement("div"));

  const scroll = (
    scrollOffset: any,
    ref: React.MutableRefObject<HTMLDivElement>,
  ) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const displayPopularPost = useCallback(
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
        <div className={clx(classes.header, classes.navigate)}>
          <p>Vegan</p>
          <div className={classes.navigateButton}>
            <button className={classes.btn}>
              <ArrowBackIos
                className={classes.navIcon}
                onClick={() => scroll(-200, veganRef)}
              />
            </button>
            <button className={classes.btn}>
              <ArrowForwardIos
                className={classes.navIcon}
                onClick={() => scroll(200, veganRef)}
              />
            </button>
          </div>
        </div>
        <div ref={veganRef} className={classes.postContainer}>
          {displayPopularPost()}
        </div>
      </div>
    </div>
  );
};
