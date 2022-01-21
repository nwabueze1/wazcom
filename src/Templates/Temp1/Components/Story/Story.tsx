import React from "react";
import { useStoryStyles } from "./styles";
import { storyTopData, storyBottomData } from "../TemplateData";
import { Typography } from "@mui/material";

const Story = () => {
  const classes = useStoryStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Typography className={classes.header}>Our Story</Typography>
          <p className={classes.story}>{storyTopData}</p>
          <p className={classes.bottomText}>{storyBottomData}.</p>
        </div>
        <div className={classes.imageParent}>
          <img
            src="https://cdn.wazobia.tech/Blog/blogheader.webp"
            alt=""
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
};
export default Story;
