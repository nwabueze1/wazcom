import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCheckoutStepStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.design.colors.waz_white,
        padding: theme.spacing(4.5),
    }
}));
