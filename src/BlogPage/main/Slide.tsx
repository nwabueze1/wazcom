import { useBlogStyles } from "./styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

const Slide = () => {
  const classes = useBlogStyles();
  return (
    <div className={classes.slide}>
      <div className={classes.leftSlide}>
        <div>
          <ArrowRightAltIcon className={classes.leftArrow} />
        </div>
        <div>Check our blog for recipes.....</div>
      </div>
      <div className={classes.rightSlide}>
        <div>Check our blog for recipes.....</div>
        <div>
          <ArrowRightAlt className={classes.rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Slide