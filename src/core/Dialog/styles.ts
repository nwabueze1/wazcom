import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useDialogStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));
