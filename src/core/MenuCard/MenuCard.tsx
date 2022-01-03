import { FC } from "react";
import { useMenuCardStyles } from "./styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { MenuCardProps } from "./types";
import clx from "classnames";
import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ToggleInput } from "../../io/ToggleInput/ToggleInput";

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
          <MoreVertIcon className={classes.vert} />
          <ToggleInput name="" />
        </div>
      </CardContent>
    </Card>
  );
};
