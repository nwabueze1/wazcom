import { FC, useState } from "react";
import { useGalleryStyles } from "./styles";
import { GalleryProps } from "./types";
import { CheckBoxInput } from "../../io";

export const Gallery: FC<GalleryProps> = ({ image }) => {
  const classes = useGalleryStyles({ image });
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
    >
      <div>
        {checked ? (
          <div className={classes.checker}>
            <CheckBoxInput checked handlecheckChange={handlecheckChange} />
          </div>
        ) : null}
      </div>
      <div className={classes.galleryHover}>
        <p>Select post</p>
      </div>
    </div>
  );
};
