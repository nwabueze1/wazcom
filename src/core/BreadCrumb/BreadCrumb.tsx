import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import clx from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import { BreadCrumbStyles } from "./styles";
import { BreadCrumbProps } from "./types";

export const BreadCrumb: FC<BreadCrumbProps> = ({ className, crumbs, handleClick }) => {
  const classes = BreadCrumbStyles();

  return (
    <div className={clx(className, classes.root)}>
      {crumbs.map((crumb, index) => {
        return (
          <Breadcrumbs
            key={index}
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <p
              color="inherit"
              onClick={() => { handleClick(crumb.path) }}
              className={clx(
                classes.link,
                index === crumbs.length - 1 && classes.lastCrumb,
              )}
            >
              {crumb.label}
              {index !== crumbs.length - 1 && (
                <NavigateNextIcon
                  className={classes.navIcon}
                  fontSize="small"
                />
              )}
            </p>
          </Breadcrumbs>
        );
      })}
    </div>
  );
};
