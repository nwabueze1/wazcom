import React, { FC } from "react";
import { BreadCrumbStyles } from "./styles";
import { ComponentNameProps } from "./types";
import clx from "classnames";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const BreadCrumb: FC<ComponentNameProps> = ({ className }) => {
  const classes = BreadCrumbStyles();
  const handleClick = () => {
    alert("basit");
  };
  return (
    <div className={clx(className, classes.root)}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/" onClick={handleClick}>
          <HomeIcon className={classes.icon} />
          Home
        </Link>
        <Link color="inherit" href="/" onClick={handleClick}>
          Detail
        </Link>
        <Typography color="textPrimary">Pricing</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
