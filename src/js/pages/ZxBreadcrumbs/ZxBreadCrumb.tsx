import React, { FC } from "react";
import { BreadCrumbStyles } from "./styles";
import { BreadCrumbsProps } from "./types";
import clx from "classnames";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ZxBreadCrumb: FC<BreadCrumbsProps> = ({ className }) => {
  const classes = BreadCrumbStyles();
  const handleClick = () => {
    return;
  };
  return (
    <div className={clx(className, classes.root)}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          color="inherit"
          href="/"
          onClick={handleClick}
          className={classes.link}
        >
          <HomeIcon className={classes.icon} />
          Home
        </Link>
        <Link
          color="inherit"
          href="/"
          onClick={handleClick}
          className={classes.link}
        >
          Detaill
        </Link>
        <Link
          color="error"
          href="/"
          onClick={handleClick}
          className={classes.link}
        >
          Pricing
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default ZxBreadCrumb;
