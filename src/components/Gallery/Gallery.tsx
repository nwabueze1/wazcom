import React, { FC, useState } from "react";
import { useStyles } from "./styles";
import { GalleryProps } from "./types";
import CheckBox from "../Checkbox/CheckBox";

export const Gallery: FC<GalleryProps> = ({ image }) => {
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
      <div>
        {checked ? (
          <div className={classes.checker}>
            <CheckBox checked handlecheckChange={handlecheckChange} />
          </div>
        ) : null}
      </div>
      <div className={classes.hover}>
        <p>Select post</p>
      </div>
    </div>
  );
};
