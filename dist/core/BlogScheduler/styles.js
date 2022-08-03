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
        margin: theme.spacing(2, 0, 0, 0),
        cursor: "pointer",
    },
    buttonText: {
        margin: "0",
        fontSize: theme.typography.fontSize + 4,
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
        "& div": {
            width: "100%"
        }
    },
    timeContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid ".concat(theme.design.colors.waz_grey_300),
        borderRadius: "5px",
    },
    timeDivider: {
        margin: theme.spacing(0, 1),
    },
    closeIcon: {
        color: theme.design.colors.waz_grey5,
        marginLeft: theme.spacing(1.5),
        cursor: "pointer",
    },
    hidden: {
        display: "none",
    },
    dayContainer: {
        border: "1px solid ".concat(theme.design.colors.waz_grey_300),
        // border: `1px solid ${theme.design.colors.waz_grey_300}`,
        // borderRadius: "5px",
        // paddingInline: theme.spacing(3),
        // height: "50px",
        // width: "200px",
        // backgroundColor: "red"
    },
}); });
