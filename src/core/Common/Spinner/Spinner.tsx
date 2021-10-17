import { FC } from "react";
import { CircularProgress } from "@mui/material";
import useStyles from "./styles";

interface Props {
  opacity: number;
}

export const Spinner: FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.spinner}>
      <CircularProgress color="inherit" size="25px" />
    </div>
  );
};
