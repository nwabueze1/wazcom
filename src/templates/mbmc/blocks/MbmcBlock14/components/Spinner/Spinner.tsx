import { CircularProgress } from "@mui/material";
import { useSpinnerStyles } from "./styles";

export const Spinner = () => {
    const classes = useSpinnerStyles();

    return <CircularProgress size="25px" color="success" className={classes.root} />;
};
