import {
  galleryCenter,
  galleryFirstColomn,
  gallerySecondColomn,
  gallerythirdColomn,
} from "Templates/Temp5/TemplateData";
import { useArticleStyles } from "./styles";

export const GalleryPost = () => {
  const classes = useArticleStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>Gallery </div>
      <div className={classes.images}>
        <div className={classes.firstColumn}>
          <img className={classes.image} src={galleryFirstColomn} />
          <img className={classes.image} src={galleryFirstColomn} />
        </div>
        <div className={classes.secondColumn}>
          <img className={classes.image} src={gallerySecondColomn} />
          <img className={classes.image} src={galleryCenter} />
          <img className={classes.image} src={gallerySecondColomn} />
        </div>
        <div className={classes.thirdColumn}>
          <img className={classes.image} src={gallerythirdColomn} />
          <img className={classes.image} src={gallerythirdColomn} />
        </div>
      </div>
    </div>
  );
};
