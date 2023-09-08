import makeStyles from "@mui/styles/makeStyles";
export var useSchedulerStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    button: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(1, 0, 0, 0),
        cursor: "pointer",
    },
    buttonText: {
        margin: "0",
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.design.colors.waz_primaryColor100,
        display: "flex",
        alignItems: "center",
    },
    addIcon: {
        marginRight: theme.spacing(1.5),
    },
    schedulerContainer: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2.5),
    },
    verticalContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    timeContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: theme.spacing(1),
        width: "100%",
    },
    timeInput: {
        width: "100%",
    },
    timeDivider: {
        fontSize: theme.typography.fontSize - 2,
    },
    closeIcon: {
        color: theme.design.colors.waz_primaryBlack,
        fontSize: theme.typography.fontSize + 4,
        cursor: "pointer",
        opacity: 0.35,
    },
    hidden: {
        display: "none",
    },
}); });
