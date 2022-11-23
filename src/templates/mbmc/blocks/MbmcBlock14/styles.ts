import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock14Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_greyColor50,
        minHeight: "100vh",
    },
    block14Container: {
        display: "flex",
        gap: theme.spacing(8),
        boxSizing: "border-box",
        justifyContent: "space-between",
        paddingTop: theme.spacing(8.5),
        maxWidth: 1240,
        width: "90%",
        margin: "0 auto",
    },
    block14Divider: {
        borderLeft: `solid 1px ${theme.design.colors.waz_greyColor150}`,
        margin: theme.spacing(2, 0),
        
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
    block14Loader: {
        position: 'fixed',
        right: '50px',
        bottom: '50px',
    }
}));
