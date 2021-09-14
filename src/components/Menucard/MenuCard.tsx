import { FC } from "react";
import { useMenuCardStyles } from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { MenuCardProps } from "./types";
import clx from "classnames";
import { Typography } from "@material-ui/core";
// import Naira from "../../images/Vector.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Toggle } from "../Toggle/Toggle";

export const MenuCard: FC<MenuCardProps> = ({
  className,
  amount,
  details,
  meal,
  image,
}) => {
  const classes = useMenuCardStyles();

  return (
    <Card
      className={clx(className, classes.root, classes.disableState)}
      variant="outlined"
    >
      <CardContent className={classes.cardContents}>
        <div className={classes.outerBar}>
          <div
            className={classes.imgField}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
        <div className={classes.mealDetail}>
          <Typography className={classes.mealName} variant="h5">
            {meal}
          </Typography>
          <Typography className={classes.details}>{details}</Typography>
          <Typography className={classes.price}>
            {/* <img src={Naira} alt="naira" /> */}
            {amount}
          </Typography>
        </div>
        <div className={classes.icons}>
          <MoreVertIcon />
          <Toggle />
        </div>
      </CardContent>
    </Card>
  );
};
