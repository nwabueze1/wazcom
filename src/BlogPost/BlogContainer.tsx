import { useBlogStyles } from "./styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Container = () => {
  const classes = useBlogStyles();
  return (
    <div className={classes.article}>
      <p className={classes.date}>09 / 09 /21</p>
      <p className={classes.BlogText}>
        Check our blog for recipes, press, and to learn more about what goes on
        in our kitchen.
      </p>
      <p className={classes.moreInfo}>
        <p> Read More</p>
        <ArrowRightAltIcon/>
      </p>
    </div>
  );
};

export default Container;
