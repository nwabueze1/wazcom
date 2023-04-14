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
  description,
  title,
  image: { src },
}) => {
  const classes = useMenuCardStyles();

  return (
    <Card className={clx(classes.root, className, classes.disableState)} variant="outlined">
      <CardContent className={classes.cardContents}>
        <div className={classes.outerBar}>
          <div
            className={classes.imgField}
            style={{
              backgroundImage: `url(${src})`,
            }}
          ></div>
        </div>
        <div className={classes.mealDetail}>
          <Typography className={classes.mealName} variant="h5">
            {title}
          </Typography>
          <Typography className={classes.details}>{description}</Typography>
          <Typography className={classes.price}>{amount}</Typography>
        </div>
        <div className={classes.icons}>
          <MoreVertIcon className={classes.vert} />
          <ToggleInput name="" />
        </div>
      </CardContent>
    </Card>
  );
};
