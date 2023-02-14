import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const drawerWidth = 260;

export const useLayoutStyles = makeStyles((theme: Theme) => ({
    root: {},
    paper: {
        padding: `0 ${theme.spacing(2)}`,
        width: drawerWidth,
        boxSizing: "border-box",
    },
    sidebarList: {},
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
        marginTop: theme.spacing(7),
        width: "calc(100vw - 244px)",
        overflow: "hidden",
        padding: '7px 24px',
        marginLeft: `${drawerWidth}px`,
        background: theme.design.colors.waz_white100,
        borderRadius: theme.spacing(.5),
    },
    componentWrapper: {
        marginBottom: theme.spacing(5),
    },
    well: {
        marginTop: theme.spacing(2),
    },
    logo: {
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        color: theme.design.colors.waz_black,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.h3.fontSize,
        width: 91,
        height: 27,
        textTransform: 'uppercase',
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.design.colors.waz_black,
    },
    listItem: {},
    listItemButton: {
        width: "100%",
        textAlign: "left",
    },

    container: {
        display: 'flex',
    },
    appBarWrapper: {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        width: `calc(100% - ${drawerWidth}px)`,
        height: 60,
        marginLeft: `${drawerWidth}px`,
        boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.05)',
        opacity: 1,
        background: theme.design.colors.waz_white,
        padding: '10px 40px',
    },
    appBarComponents: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    notificationWrapper: {
        width: 24,
        height: 24
    },
    notoficationIcon: {
        width: 18,
        height: 21
    },

    drawer: {
        width: `${drawerWidth}px`,
        padding: '22px 19px',
        position: 'fixed',
        background: theme.design.colors.waz_white,
        boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        marginBottom: 50
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
