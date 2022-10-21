import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock5Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.design.colors.waz_primaryColor300,
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: theme.spacing(2, 0),
        paddingTop: theme.spacing(4),
        overflow: "hidden",

        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 16px)",
            padding: theme.spacing(2),
            height: "fit-content",
        },
    },
    mbmcContainer: {
        width: "100%",
    },
    footerContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: theme.spacing(1),

        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },

        "& > div": {
            minWidth: 80,
            width: "100%",
        },
    },
    footerTitle: {
        fontSize: theme.typography.fontSize + 6,
        color: theme.design.colors.waz_white,
        fontWeight: theme.typography.fontWeightMedium,
    },
    footerList: {
        color: theme.design.colors.waz_white,
        fontsize: theme.typography.fontSize,
        opacity: 0.7,
        lineHeight: 2.5,
        [theme.breakpoints.down("sm")]: {
            lineHeight: 1.5,
        },
    },
    footerNote: {
        width: "100%",
        textAlign: "center",
        backgroundColor: theme.design.colors.waz_primaryColor200,
        padding: theme.spacing(2, 0),
        color: theme.design.colors.waz_white,
    },
    logoContainer: {
        display: "flex",
        width: "10%",
        justifyContent: "center",
        alignItems: "center",

        "& > img": {
            width: 50,
            height: 50,
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(3, 0),
            height: "fit-content",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
        },
    },
    listContainer: {
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
        },
    },
}));
