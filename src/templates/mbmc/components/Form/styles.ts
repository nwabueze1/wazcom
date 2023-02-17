import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useFormStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFamily: theme.design.font.montserrat,
    },
    formButton: {
        width: "100% !important",
        marginTop: theme.spacing(1),
    },
}));
