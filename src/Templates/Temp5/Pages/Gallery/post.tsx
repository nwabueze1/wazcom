import {
  galleryCenter,
  galleryFirstColomn,
  gallerySecondColomn,
  galleryThirdColomn,
} from "Templates/Temp5/TemplateData";
import { useArticleStyles } from "./styles";

export const GalleryPost = () => {
  const classes = useArticleStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>Gallery </div>
      <div className={classes.images}>
        <div className={classes.firstColumn}>
          {galleryFirstColomn.map((item, index) => {
            return (
              <img
                className={classes.image}
                key={index}
                src={item.image.src}
                alt={item.image.alt}
              />
            );
          })}
        </div>
        <div className={classes.secondColumn}>
          {gallerySecondColomn.map((item, index) => {
            return (
              <img
                className={classes.centreImages}
                key={index}
                src={item.image.src}
                alt={item.image.alt}
              />
            );
          })}
        </div>
        <div className={classes.thirdColumn}>
          {galleryThirdColomn.map((item, index) => {
            return (
              <img
                className={classes.image}
                key={index}
                src={item.image.src}
                alt={item.image.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
