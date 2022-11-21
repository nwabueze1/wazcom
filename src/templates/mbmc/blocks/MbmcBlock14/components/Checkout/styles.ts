import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCheckoutStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "44%",
        margin: theme.spacing(2, 0),
        
        [theme.breakpoints.down("lg")]: {
            zIndex: -1,
            position: "absolute",
            width: "100%",
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 1s ease, opacity 1s ease",
        },
    }
}));
