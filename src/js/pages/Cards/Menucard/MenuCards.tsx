import React, { FC } from "react";
import { useMenuCardStyles } from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { MenuCardProps } from "./types";
import clx from "classnames";
import { Typography } from "@material-ui/core";
import Naira from "../../../../images/Vector.svg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Toggle from "../../Toggle/Toggle";
import image from "../../../../images/34.png";

const MenuCard: FC<MenuCardProps> = ({ className }) => {
  const classes = useMenuCardStyles();

  return (
    <Card className={clx(className, classes.root)} variant="outlined">
      <CardContent className={classes.cardcontents}>
        <div className={classes.outerbar}>
          <div
            className={classes.imgfield}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
        <div className={classes.mealdetail}>
          <Typography className={classes.mealname} variant="h5">
            Vegan Sandwich
          </Typography>
          <Typography className={classes.details}>
            Neque placerat lectus eget faucibus odio.
          </Typography>
          <Typography className={classes.price}>
            <img src={Naira} alt="naira" />
            1500.00
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

export default MenuCard;
