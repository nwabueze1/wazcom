import { GalleryPost } from "./Gallery/post";
import { useStyles } from "./styles";

const Gallery = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GalleryPost />
    </div>
  );
};

export default Gallery;
