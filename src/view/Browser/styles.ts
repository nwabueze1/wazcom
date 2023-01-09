import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const drawerWidth = 260;

export const useBrowserStyles = makeStyles((theme: Theme) => ({
    root: {
        // backgroundColor: theme.design.colors.white
    },
    // drawer: {
    //     padding: `0 ${theme.spacing(2)}`,
    // },
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
        "&:hover": {},
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
        padding: '7px 24px',
        marginLeft: `${drawerWidth}px`,
        background: theme.design.colors.white100,
        borderRadius: theme.spacing(.5)
    },
    componentWrapper: {
        marginBottom: theme.spacing(5),
    },
    well: {
        // padding: theme.spacing(2),
        // backgroundColor: theme.design.colors.waz_greyColor100,
        // borderRadius: theme.spacing(1),
        marginTop: theme.spacing(2),
    },
    logo: {
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        color: theme.design.colors.waz_black,
        fontWeight: 700,
        fontSize: '20px',
        width: '91px',
        height: '27px',
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
        height: '60px',
        marginLeft: `${drawerWidth}px`,
        boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.05)',
        opacity: 1,
        background: '#FFFFFF',
        padding: '10px 40px',
        zIndex: 9999
    },
    appBarComponents: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    appBarSearchTextInput: {
        marginBottom: 0,
        width: '480px',
        '& input': {
            border: 'none',
            background: '#F9F9F9 0% 0% no-repeat padding-box',
            borderRadius: '3px',
        }
    },
    notificationWrapper: {
        width: '24px',
        height: '24px'
    },
    notoficationIcon: {
        width: '18px',
        height: '21px'
    },

    drawer: {
        width: `${drawerWidth}px`,
        padding: '22px 19px',
        position: 'fixed',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        marginBottom: '50px'
    }
}));
