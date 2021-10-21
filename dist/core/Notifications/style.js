import makeStyles from "@mui/styles/makeStyles";
/** !!-- Remember to update the function name !! */
export var useNotificationStyles = makeStyles(function (theme) { return ({
    notificationCard: {
        borderRadius: "10px",
        padding: theme.spacing(0.5, 0.5, 3, 0.5),
    },
    card: {
        width: "28%",
        backgroundColor: theme.design.colors.white,
        marginRight: theme.spacing(5),
    },
    notificationHead: {
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.design.colors.success,
        padding: theme.spacing(0.5, 0.5),
        borderRadius: "8px",
    },
    success: {
        backgroundColor: theme.design.colors.success,
        opacity: 0.6,
    },
    failed: {
        backgroundColor: theme.design.colors.red40,
    },
    plainBg: {
        backgroundColor: theme.design.colors.gray20,
    },
    plain: {
        backgroundColor: theme.design.colors.gray40,
    },
    cancel: {
        backgroundColor: theme.design.colors.white,
        color: theme.design.colors.lightRed,
        marginLeft: "auto",
        borderRadius: "50%",
    },
    alarm: {
        color: theme.design.colors.gray80,
    },
    report: {
        color: theme.design.colors.gray80,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        fontWeight: 400,
        fontStyle: "normal",
        marginLeft: theme.spacing(1),
    },
    notificationInfo: {
        padding: theme.spacing(1),
    },
    notificationHeading: {
        color: theme.design.colors.pureblack,
        fontWeight: "bold",
        fontFamily: theme.typography.fontFamily,
        fontSize: "14px",
        marginLeft: theme.spacing(1),
        fontStyle: "normal",
    },
    notificationText: {
        color: theme.design.colors.gray80,
        fontFamily: theme.typography.fontFamily,
        fontSize: "12px",
        fontStyle: "normal",
        marginLeft: theme.spacing(1),
    },
    status: {
        color: theme.design.colors.gray80,
        fontFamily: theme.typography.fontFamily,
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: "16px",
        marginTop: theme.spacing(2),
    },
}); });
