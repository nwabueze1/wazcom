import React, { useCallback, useRef } from "react";
import { Hero } from "Templates/Template2/Component/Hero/Hero";
import { Post } from "../../Component/Post/Post";
import { useHomePageStyles } from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { postData } from "Templates/Template2/Template2Data";
import { Subscribe } from "Templates/Template2/Component/Subscribe/Subscribe";
import Intro from "Templates/Temp2/Component/Intro/Intro";
import clx from "classnames";

const HomePage = () => {
  const classes = useHomePageStyles();
  const ref = useRef(document.createElement("div"));
  const veganref = useRef<HTMLDivElement>(document.createElement('div'));
  const healthyref = useRef(document.createElement("div"));

  const scroll = (
    scrollOffset: any,
    ref: React.MutableRefObject<HTMLDivElement>,
  ) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const displayPopularPost = () => {
    return postData.map((post, index) => {
      return (
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
      );
    });
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
  }, ["Glutten-free"]);

  return (
    <div className={classes.root}>
      <Hero />
      <div className={classes.container}>
        <p className={classes.header}>Popular Posts</p>
        <div className={classes.postContainer}>{displayPopularPost()}</div>
      </div>

      <div className={classes.container}>
        <div className={clx(classes.header, classes.navigate)}>
          <p>Glutten-free</p>
          <div className={classes.navigateButton}>
            <button className={classes.btn}>
              <ArrowBackIosIcon className={classes.navIcon} />
            </button>
            <button className={classes.btn}>
              <ArrowForwardIosIcon className={classes.navIcon} />
            </button>
          </div>
        </div>
        <div ref={ref} className={classes.postContainer}>
          {displayGluttenFreePost()}
        </div>
      </div>

      <div className={classes.container} >
        <div className={clx(classes.header, classes.navigate)}>
          <p>Healthy</p>
          <div className={classes.navigateButton}>
            <button className={classes.btn}>
              <ArrowBackIosIcon
                className={classes.navIcon}
                onClick={() => scroll(-200, healthyref)}
              />
            </button>
            <button className={classes.btn}>
              <ArrowForwardIosIcon
                className={classes.navIcon}
                onClick={() => scroll(200, healthyref)}
              />
            </button>
          </div>
        </div>
        <div ref={healthyref} className={classes.postContainer}>
          {displayPopularPost()}
        </div>
      </div>

      <div className={classes.container}>
        <div className={clx(classes.header, classes.navigate)}>
          <p>Vegan</p>
          <div className={classes.navigateButton}>
            <button className={classes.btn}>
              <ArrowBackIosIcon
                className={classes.navIcon}
                onClick={() => scroll(-200, veganref)}
              />
            </button>
            <button className={classes.btn}>
              <ArrowForwardIosIcon
                className={classes.navIcon}
                onClick={() => scroll(200, veganref)}
              />
            </button>
          </div>
        </div>
        <div ref={veganref} className={classes.postContainer}>
          {displayPopularPost()}
        </div>
      </div>

      <div className={classes.intro}>
        <Intro />
      </div>

      <div className={classes.subscribe}>
        <Subscribe />
      </div>
    </div>
  );
};

export default HomePage;
