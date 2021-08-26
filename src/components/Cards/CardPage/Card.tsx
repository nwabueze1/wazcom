import React, { FC } from "react";
import { useStyles } from "./styles";
import { CardPageProps } from "./types";
import clx from "classnames";
import MenuCard from "../Menucard/MenuCards";
import DisplayCard from "../Displaycard/DisplayCard";
import ZxCard from "../ZxCard";
import { Typography } from "@material-ui/core";
import img2 from "../../../../images/create1.png";
import mealimg from "../../../../images/34.png";
import img1 from "../../../../images/clipboard.png";
import img3 from "../../../../images/Group3.png";

const CardPage: FC<CardPageProps> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clx(className, classes.root)}>
      <div className={classes.header}>
        <Typography style={{ fontWeight: "bold" }} variant="h1">
          11. <span>Cards</span>
        </Typography>
      </div>
      <div className={classes.tittle}>Cards</div>
      <div className={classes.topcard}>
        <ZxCard
          image={img1}
          tittle="Register"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus ac at elit integer magna in nulla. Mattis commodo, tempor nisl est, bibendum donec. Amet, nulla duis magna elementum. Penatibus neque vel."
        />
        <ZxCard
          image={img2}
          tittle="Create your site"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus ac at elit integer magna in nulla. Mattis commodo, tempor nisl est, bibendum donec. Amet, nulla duis magna elementum. Penatibus neque vel."
        />
        <ZxCard
          image={img3}
          tittle="Let people know you’re online"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus ac at elit integer magna in nulla. Mattis commodo, tempor nisl est, bibendum donec. Amet, nulla duis magna elementum. Penatibus neque vel."
        />
      </div>
      <div className={classes.midcard}>
        <div className={classes.tittle}>Menu Cards</div>
        <MenuCard
          meal="Vegan Sandwich"
          details="nice meal"
          amount={700.0}
          image={mealimg}
        />
      </div>
      <div className={classes.midcard}>
        <div className={classes.tittle}>Dashboard / Display Cards</div>
        <DisplayCard total={50} />
      </div>
    </div>
  );
};

export default CardPage;
