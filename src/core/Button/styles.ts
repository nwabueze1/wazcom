import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useButtonStyles = makeStyles((theme: BaseTheme) => ({
    root: {
        position: "relative",
    },
    button: {
        textTransform: "capitalize",
        color: theme.design.colors.waz_white,
        backgroundColor: theme.design.colors.waz_primaryColor100,
        boxShadow: "none",
        cursor: "pointer",
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        width: '100%',

        "&:hover": {
            backgroundColor: theme.design.colors.waz_primaryColor100,
            opacity: "70%",
            boxShadow: "none",
        },
    },
    buttonLoader: {
        marginRight: theme.spacing(1),
    },
    sizeLarge: {
        padding: `${theme.spacing(0.5)} ${theme.spacing(2.5)}`,
    },
}));
