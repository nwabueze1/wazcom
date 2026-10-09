import { FC } from "react";
import { TextInput } from "../../../../io";
import { useNavStyles } from "./styles";
import { NavProps } from "./types";
import clx from "classnames";

export const Nav: FC<NavProps> = ({ className }) => {
  const classes = useNavStyles();
  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.header}>
        <div className={classes.logoContainer}>
          <img
            className={classes.headerLogo}
            src="https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/hivedecklogo.svg"
          />
        </div>
        <TextInput
          className={classes.searchField}
          type="text"
          placeholder="Search menus, dishes etc"
        />
      </div>
    </div>
  );
};
