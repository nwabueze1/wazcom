import makeStyles from "@mui/styles/makeStyles";
export var useAlertStyles = makeStyles(function (theme) { return ({
    "@keyframes toast-in-right": {
        from: {
            transform: "translateX(100%)",
        },
        to: {
            transform: "translateX(0)",
        },
    },
    "@keyframes toast-in-left": {
        from: {
            transform: "translateX(-100%)",
        },
        to: {
            transform: "translateX(0)",
        },
    },
    alertContainer: {
        position: "fixed",
        zIndex: 10,
        "&.top-right": {
            top: 12,
            right: 12,
            transition: "transform .6s ease-in-out",
            animation: "$toast-in-right .7s",
        },
        "& .top-right": {
            top: 12,
            right: 12,
            transition: "transform .6s ease-in-out",
            animation: "$toast-in-right .7s",
        },
        "&.top-left": {
            top: 12,
            left: 12,
            transition: "transform .6s ease-in-out",
            animation: "$toast-in-left .7s",
        },
        "& .top-left": {
            top: 12,
            left: 12,
            transition: "transform .6s ease-in-out",
            animation: "$toast-in-left .7s",
        },
        "&.bottom-left": {
            bottom: 12,
            left: 12,
            transition: "transform .6s ease-in-out",
            animation: "$toast-in-left .7s",
        },
        "& .bottom-left": {
            bottom: 12,
            left: 12,
            transition: "transform .6s ease-in-out",
            animation: "$toast-in-left .7s",
        },
        "&.bottom-right": {
            bottom: 12,
            right: 12,
            transition: "transform .6s ease-in-out",
            animation: "$toast-in-right .7s",
        },
        "& .bottom-right": {
            bottom: 12,
            right: 12,
            transition: "transform .6s ease-in-out",
            animation: "$toast-in-right .7s",
        },
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
    },
    button: {
        all: "unset",
        cursor: "pointer",
        fontSize: theme.typography.fontSize + 8,
        width: 20,
        height: 20,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.design.colors.waz_primary700,
    },
    alert: {
        background: theme.design.colors.waz_white,
        transition: ".3s ease",
        position: "relative",
        pointerEvents: "auto",
        overflow: "hidden",
        margin: theme.spacing(0, 0, 2, 0),
        maxHeight: "100px",
        borderRadius: theme.spacing(0.5, 0, 0, 0.5),
        boxShadow: "0px 3px 6px #00000029",
        minWidth: 250,
        maxWidth: 300,
        padding: theme.spacing(2),
        "&.success": {
            borderLeft: "4px solid ".concat(theme.design.colors.waz_primaryColor100),
        },
        "&.warning": {
            borderLeft: "4px solid ".concat(theme.design.colors.warning),
        },
        "&.error": {
            borderLeft: "4px solid ".concat(theme.design.colors.error),
        },
        "&.info": {
            borderLeft: "4px solid ".concat(theme.design.colors.info),
        },
    },
    alertIcon: {
        margin: theme.spacing(0.5, 0.5, 0, 0),
        "&.success": {
            color: theme.design.colors.waz_primaryColor100,
        },
        "&.error": {
            color: theme.design.colors.error,
        },
        "&.warning": {
            color: theme.design.colors.warning,
        },
        "&.info": {
            color: theme.design.colors.info,
        },
    },
    alertTitle: {
        textAlign: "left",
        marginTop: "0",
        marginBottom: theme.spacing(0.5),
        maxWidth: "90%",
        minHeight: "18px",
        color: theme.design.colors.waz_grey1,
        fontWeight: theme.typography.fontWeightLight,
        fontSize: theme.typography.fontSize + 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    alertMessage: {
        margin: 0,
        textAlign: "left",
        minHeight: "18px",
        marginLeft: "-1px",
        color: theme.design.colors.waz_grey1,
        fontWeight: theme.typography.fontWeightLight,
        fontSize: theme.typography.fontSize,
    },
}); });
