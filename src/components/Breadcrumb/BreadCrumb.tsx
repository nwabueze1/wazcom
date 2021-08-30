import React, { FC } from "react";
import { BreadCrumbStyles } from "./styles";
import { BreadCrumbProps } from "./types";
import clx from "classnames";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export const BreadCrumb: FC<BreadCrumbProps> = ({ className, paths }) => {
  const classes = BreadCrumbStyles();
  const handleClick = () => {
    return;
  };

  return (
    <div className={clx(className, classes.root)}>
      {paths.map((crumb, index) => {
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
              className={clx(
                classes.link,
                index === paths.length - 1 && classes.lastlink,
              )}
              aria-current="page"
            >
              {crumb.label}
              {index !== paths.length - 1 && (
                <NavigateNextIcon
                  className={classes.navicon}
                  fontSize="small"
                />
              )}
            </Link>
          </Breadcrumbs>
        );
      })}
    </div>
  );
};
