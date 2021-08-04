import React, { FC } from "react";
import { useComponentNameStyles } from "./styles";
import { ComponentNameProps } from "./types";
import clx from "classnames";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const BreadCrumb: FC<ComponentNameProps> = ({ className }) => {
  const classes = useComponentNameStyles();
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
          Home
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Detail
        </Link>
        <Typography color="textPrimary">Pricing</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
