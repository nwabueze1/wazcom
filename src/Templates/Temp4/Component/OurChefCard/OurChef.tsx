import { useOurChefCardStyles } from "./styles";
import { FC } from "react";
import { OurChefsTypes } from "./types";

export const OurChefCard: FC<OurChefsTypes> = ({ name, details, img }) => {
  const classes = useOurChefCardStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img
            src={img.src}
            alt={img.alt}
          />
        </div>
        <p className={classes.chefName}>{name}</p>
        <p className={classes.chefDetails}>{details}</p>
      </div>
    </div>
  );
};
