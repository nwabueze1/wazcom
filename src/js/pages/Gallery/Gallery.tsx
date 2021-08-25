import React, { FC } from "react";
import { useStyles } from "./styles";
import { GalleryProps } from "./types";
import clx from "classnames";

const Gallery: FC<GalleryProps> = ({ className, image }) => {
  const classes = useStyles();

  return (
    <div
      className={clx(className, classes.galleryBox)}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.text}>
        <p>Select post</p>
      </div>
    </div>
  );
};

export default Gallery;
