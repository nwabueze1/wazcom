import { useLoaderStyles } from "./styles";
import { CircularProgress } from "@mui/material";

export const Loader = () => {
  const classes = useLoaderStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size="20px" color="success" />
    </div>
  );
};
