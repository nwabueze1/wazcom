import React, { FC } from "react";
import { BreadCrumbStyles } from "./styles";
import { BreadCrumbsProps } from "./types";
import clx from "classnames";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ZxBreadCrumb: FC<BreadCrumbsProps> = ({ className, path }) => {
  const classes = BreadCrumbStyles();
  const handleClick = () => {
    return;
  };
  return (
    <div className={clx(className, classes.root)}>
      <HomeIcon className={classes.icon} />
      {path.map((crumb, index) => {
        return (
          <Breadcrumbs
            key={index}
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              color="inherit"
              href={crumb.path}
              onClick={handleClick}
              className={classes.link}
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
