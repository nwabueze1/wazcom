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

        [theme.breakpoints.down("md")]: {
            width: '100%',
        },
    }
}));
