import { useOurChefCardStyles } from "./styles";
import {FC} from "react"
import { OurChefsTypes } from "./types";

export const OurChefCard: FC<OurChefsTypes> = ({name, details}) => {
  const classes = useOurChefCardStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img
            src="https://s3.eu-west-2.amazonaws.com/medusa.com/templates/unsplash_fdlZBWIP0aM.png"
            alt=""
          />
        </div>
        <p className={classes.chefName}>Wade Warren</p>
        <p className={classes.chefDetails}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. +
        </p>
      </div>
    </div>
  );
};
