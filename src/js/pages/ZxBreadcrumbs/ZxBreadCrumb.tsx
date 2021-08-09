import React, { FC } from "react";
import { BreadCrumbStyles } from "./styles";
import { BreadCrumbsProps } from "./types";
import clx from "classnames";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ZxBreadCrumb: FC<BreadCrumbsProps> = ({ className, path }) => {
  const classes = BreadCrumbStyles();
  const handleClick = () => {
    return;
  };
  return (
    <div className={clx(className, classes.root)}>
      {path.map((crumb, index) => {
        return (
          <Breadcrumbs
            key={index}
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              color="inherit"
              to={crumb.path}
              onClick={handleClick}
              className={classes.link}
              aria-current="page"
            >
              {crumb.label}
              <NavigateNextIcon fontSize="small" />
            </Link>
          </Breadcrumbs>
        );
      })}
    </div>
  );
};

export default ZxBreadCrumb;
