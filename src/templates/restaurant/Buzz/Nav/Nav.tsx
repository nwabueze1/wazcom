import { FC } from "react";
import { InputAdornment } from "@mui/material";
import { TextInput } from "io";
import { useNavStyles } from "./styles";
import { Search } from "@mui/icons-material";
import { NavProps } from "./types";
import clx from "classnames";

export const Nav: FC<NavProps> = ({ className }) => {
  const classes = useNavStyles();
  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.header}>
        <img
          className={classes.headerLogo}
          src="https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/hivedecklogo.svg"
        />
        <TextInput
          className={classes.searchField}
          type="text"
          placeholder="Search menus, dishes etc"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};
