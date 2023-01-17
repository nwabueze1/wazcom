import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

/** !!-- Remember to update the function name !! */
export const useNotificationStyles = makeStyles((theme: BaseTheme) => ({
    root: (props) => ({
        display: 'flex',
        width: 432,
        minHeight: 52,
        background: theme.design.background.waz_white,
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: 4,
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
        padding: 15
    }),
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    icon: {
        width: 20,
        height: 20,
        opacity: 1
    },
    closeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        borderRadius: '100%',
        backgroundColor: '#E7F1E9',
    },
    main: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    message: {
        color: theme.design.colors.grey100,
        letterSpacing: 0,
        fontSize: 10,
        fontWeight: 'normal',
        padding: '8px 30px',
        textAlign: 'left',
        width: '100%'

    },
    header: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontSize: 14,
        fontWeight: 'normal',
        color: theme.design.colors.grey100,
        margin: 0
    },
    success: {
        color: theme.design.colors.primary100,
        borderLeftColor: theme.design.colors.primary100
    },
    error: {
        color: theme.design.colors.error,
        borderLeftColor: theme.design.colors.error
    },
    info: {
        color: theme.design.colors.info,
        borderLeftColor: theme.design.colors.info
    },
    warning: {
        color: theme.design.colors.warning,
        borderLeftColor: theme.design.colors.warning
    }

    // notificationCard: {
    //     borderRadius: "10px",
    // },
    // card: {
    //     width: "28%",
    //     marginRight: theme.spacing(5),
    // },
    // notificationHead: {
    //     display: "flex",
    //     alignItems: "center",
    //     backgroundColor: theme.design.colors.success,
    //     padding: theme.spacing(0.5, 0.5),
    //     marginBottom: theme.spacing(1),
    //     borderRadius: "8px",
    // },
    // success: {
    //     backgroundColor: theme.design.colors.success,
    //     opacity: 0.6,
    // },
    // failed: {
    //     backgroundColor: theme.design.colors.red40,
    // },
    // plainBg: {
    //     backgroundColor: theme.design.colors.gray20,
    // },
    // plain: {
    //     backgroundColor: theme.design.colors.gray40,
    // },
    // cancel: {
    //     backgroundColor: theme.design.colors.waz_white,
    //     color: theme.design.colors.waz_dangerColor300,
    //     marginLeft: "auto",
    //     borderRadius: "50%",
    //     cursor: "pointer",
    // },
    // alarm: {
    //     color: theme.design.colors.gray80,
    // },
    // report: {
    //     color: theme.design.colors.gray80,
    //     fontFamily: theme.typography.fontFamily,
    //     fontSize: theme.typography.fontSize + 3,
    //     padding: theme.spacing(1),
    // },
    // notificationInfo: {
    //     padding: theme.spacing(1),
    // },
    // notificationHeading: {
    //     color: theme.design.colors.waz_black,
    //     fontWeight: "bold",
    //     fontFamily: theme.typography.fontFamily,
    //     fontSize: "14px",
    //     marginLeft: theme.spacing(1),
    //     fontStyle: "normal",
    // },
    // notificationText: {
    //     color: theme.design.colors.gray80,
    //     fontFamily: theme.typography.fontFamily,
    //     fontSize: theme.typography.fontSize + 1,
    //     fontStyle: "normal",
    //     marginLeft: theme.spacing(1),
    //     padding: theme.spacing(1, 0, 2, 0),
    // },
    // status: {
    //     color: theme.design.colors.gray80,
    //     fontFamily: theme.typography.fontFamily,
    //     fontWeight: "bold",
    //     fontStyle: "normal",
    //     fontSize: "16px",
    //     marginTop: theme.spacing(2),
    // },
}));
