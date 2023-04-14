import makeStyles from "@mui/styles/makeStyles";
export var useTootipStyles = makeStyles(function (theme) { return ({
    root: {
        width: "fit-content",
    },
    container: {
        width: "fit-content",
    },
    tooltipContainer: {
        position: "relative",
        minWidth: 160,
        maxWidth: 200,
        display: "flex",
    },
    tooltip: {
        borderRadius: theme.spacing(0.5),
        width: "100%",
        padding: theme.spacing(1.5, 2),
        backgroundColor: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize,
        border: "1px solid ".concat(theme.design.colors.waz_primary500),
    },
    tooltipIcon: {
        color: theme.design.colors.waz_mercury,
        margin: theme.spacing(0),
        "&:hover": {
            color: theme.design.colors.waz_primary500,
        },
    },
    tooltipArrow: {
        position: "absolute",
        backgroundColor: theme.design.colors.waz_white,
        borderColor: theme.design.colors.waz_primary500,
        borderWidth: "1px 0 0 1px",
        borderStyle: "solid",
        width: "10px",
        height: "10px",
        borderRadius: theme.spacing(0, 0, 0.5, 0),
    },
    tooltipArrowBottom: {
        left: 0,
        right: 0,
        margin: "".concat(theme.spacing(-0.625), " auto 0"),
        transform: "rotate(45deg)",
    },
    tooltipArrowTop: {
        left: 0,
        right: 0,
        bottom: 0,
        margin: "0 auto ".concat(theme.spacing(-0.625)),
        transform: "rotate(-135deg)",
    },
    tooltipArrowLeft: {
        right: theme.spacing(-0.625),
        bottom: 0,
        top: 0,
        transform: "rotate(135deg)",
        margin: "auto 0",
    },
    tooltipArrowRight: {
        left: theme.spacing(-0.625),
        bottom: 0,
        top: 0,
        transform: "rotate(-45deg)",
        margin: "auto 0",
    },
    icon: {
        width: 20,
        height: 20,
        opacity: 1,
    },
    closeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        borderRadius: "100%",
        backgroundColor: theme.design.colors.waz_primary700,
    },
    title: {
        fontSize: theme.typography.fontSize + 2,
        fontWeight: "normal",
        color: theme.design.colors.grey100,
        margin: 0,
    },
}); });
