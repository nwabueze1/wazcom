import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { useSpinnerStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";

export const Spinner = () => {
    const { loading, networkOperation } = useContext(RestaurantContext);
    const classes = useSpinnerStyles();

    if (loading && networkOperation === "update.cart-item.quantity")
        return <CircularProgress size="25px" color="success" className={classes.root} />;

    return <span />
};
