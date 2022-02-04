import { GalleryPage } from "./Gallery/post";
import { useStyles } from "./styles";

const IndexPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GalleryPage />
    </div>
  );
};

export default GalleryPage;
