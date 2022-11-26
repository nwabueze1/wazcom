import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock14Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_greyColor50,
        minHeight: "90vh",
    },
    block14Container: {
        boxSizing: "border-box",
        padding: theme.spacing(8.5, 0),
        maxWidth: 1240,
        width: "90%",
        margin: "0 auto",
    },
    block14Title: {
        fontFamily: theme.design.font.lostaMasta,
        fontSize: theme.typography.fontSize * 4,
        marginBottom: theme.spacing(4),
    },
    block14CartContent: {
        display: "flex",
        gap: theme.spacing(8),
        justifyContent: "space-between",
    },
    block14Divider: {
        borderLeft: `solid 1px ${theme.design.colors.waz_greyColor150}`,
        margin: theme.spacing(2, 0),
        
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
}));
