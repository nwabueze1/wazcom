import { useArticleStyles } from "./styles";

export const GalleryPage = () => {
  const classes = useArticleStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>Gallery </div>
      <div className={classes.images}>
        <div className={classes.firstColumn}>
          <img
            className={classes.image}
            src={
              "https://s3.eu-west-2.amazonaws.com/medusa.com/templates/tamaz-tokmadze-sEnUVVqGmgY-unsplash+3.png"
            }
          />
          <img
            className={classes.image}
            src={
              "https://s3.eu-west-2.amazonaws.com/medusa.com/templates/tamaz-tokmadze-sEnUVVqGmgY-unsplash+3.png"
            }
          />
        </div>
        <div className={classes.secondColumn}>
          <img
            className={classes.image}
            src={
              "https://s3.eu-west-2.amazonaws.com/medusa.com/templates/artem-beliaikin-8AsKha7aIvk-unsplash+2.png"
            }
          />
          <img
            className={classes.image}
            src={
              "https://s3.eu-west-2.amazonaws.com/medusa.com/templates/ryan-christodoulou-LDrSJ3cjauY-unsplash+1.png"
            }
          />
          <img
            className={classes.image}
            src={
              "https://s3.eu-west-2.amazonaws.com/medusa.com/templates/artem-beliaikin-8AsKha7aIvk-unsplash+2.png"
            }
          />
        </div>
        <div className={classes.thirdColumn}>
          <img
            className={classes.image}
            src={
              "https://s3.eu-west-2.amazonaws.com/medusa.com/templates/damiano-baschiera-hFXZ5cNfkOk-unsplash+3.png"
            }
          />
          <img
            className={classes.image}
            src={
              "https://s3.eu-west-2.amazonaws.com/medusa.com/templates/damiano-baschiera-hFXZ5cNfkOk-unsplash+3.png"
            }
          />
        </div>
      </div>
    </div>
  );
};
