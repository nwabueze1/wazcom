import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCartItemsStyles = makeStyles((theme: Theme) => ({
    root: {
        maxHeight: "85vh",
        overflowY: "auto",
        width: "45%",

        "&::-webkit-scrollbar": {
            display: "none",
        },

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(5, 1, 6),
            maxHeight: "unset",
            width: "100%",
            zIndex: 1,
            position: "absolute",
            height: "100%",
            transition: "visibility 1s ease, opacity 1s ease",
            visibility: "visible",
            opacity: 1,
        },
    }
}));
