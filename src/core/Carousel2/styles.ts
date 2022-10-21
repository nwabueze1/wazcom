import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useCarouselStyles = makeStyles((theme: Theme) => ({
    stepper: {
        backgroundColor: "transparent",
        "& > button": {
            backgroundColor: theme.design.colors.waz_white,
            padding: theme.spacing(1, 3),
            color: theme.design.colors.waz_orangeColor100,
            fontSize: theme.typography.fontSize * 2,
        },
    },
}));
