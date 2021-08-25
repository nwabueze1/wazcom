import React, { FC, useState } from "react";
import { useStyles } from "./styles";
import { GalleryProps } from "./types";
import clx from "classnames";
import CheckBox from "../Checkbox/CheckBox";

const Gallery: FC<GalleryProps> = ({ className, image }) => {
  const classes = useStyles();
  const onclick = () => setChecked(!checked);
  const [checked, setChecked] = useState(false);

  const handlecheckChange = (
    event: React.ChangeEvent<{ checked: boolean }>,
  ) => {
    setChecked(!event.target.checked);
  };

  return (
    <div
      onClick={onclick}
      className={`${classes.galleryBox} ${checked ? classes.border : null}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {checked ? (
        <div className={classes.checker}>
          <CheckBox checked handlecheckChange={handlecheckChange} />
        </div>
      ) : null}
      <div className={classes.text}>
        <p>Select post</p>
      </div>
    </div>
  );
};

export default Gallery;
