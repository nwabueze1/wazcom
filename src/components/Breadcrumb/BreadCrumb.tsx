import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import clx from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import { BreadCrumbStyles } from "./styles";
import { BreadCrumbProps } from "./types";

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
                index === paths.length - 1 && classes.lastCrumb,
              )}
              aria-current="page"
            >
              {crumb.label}
              {index !== paths.length - 1 && (
                <NavigateNextIcon
                  className={classes.navIcon}
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
