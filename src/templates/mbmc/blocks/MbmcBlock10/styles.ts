import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock10Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_gold100,
        overflow: "hidden",
        padding: theme.spacing(3, 8),
        width: "calc(100% - 128px)",
        gap: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        [theme.breakpoints.down("md")]: {
            height: "100%",
            padding: theme.spacing(2, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
            height: "fit-content",
            width: "calc(100% - 16px)",
        },
    },
    menuContainer: {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > p": {
            padding: theme.spacing(2, 4),
            display: "flex",
            alignItems: "center",
            fontFamily: theme.design.font.montserrat,
            fontSize: theme.typography.fontSize + 2,
            [theme.breakpoints.down("sm")]: {
                fontSize: theme.typography.fontSize - 2,
                padding: theme.spacing(1, 2),
            },
            "& > img": {
                marginRight: theme.spacing(1),
            },
        },
    },
    border: {
        borderRight: "1px solid hsla(12, 73%, 56%, 1)",
    },
}));
