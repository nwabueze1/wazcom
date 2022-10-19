import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const drawerWidth = 260;

export const useTemplateStyles = makeStyles((theme: Theme) => ({
    drawer: {
        padding: `0 ${theme.spacing(2)}`,
    },
    paper: {
        padding: `0 ${theme.spacing(2)}`,
        width: drawerWidth,
        boxSizing: "border-box",
    },
    sidebarIcon: {
        marginRight: theme.spacing(1),
    },
    sidebarLabel: {
        fontWeight: theme.typography.fontWeightBold,
        letterSpacing: theme.spacing(0.1),
    },
    sidebarItem: {
        display: "flex",
        padding: theme.spacing(0.5),
        color: theme.design.colors.gray100,
        margin: `${theme.spacing(1)}`,
        boxSizing: "border-box",
        textTransform: "uppercase",
    },
    sidebarItemIsActive: {
        "&:hover": {
            borderLeftColor: theme.palette.primary.light,
        },
    },
    main: {
        marginTop: theme.spacing(8),
        width: "calc(100vw - 244px)",
        overflow: "hidden",
    },
    componentWrapper: {
        marginBottom: theme.spacing(5),
    },
    well: {
        padding: theme.spacing(2),
        backgroundColor: theme.design.colors.waz_greyColor100,
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(2),
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.design.colors.waz_black,
        fontWeight: theme.typography.fontWeightMedium,
    },
    listItemButton: {
        width: "100%",
        textAlign: "left",
    },
}));
