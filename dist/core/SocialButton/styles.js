import makeStyles from "@mui/styles/makeStyles";
export var useSocialButtonStyles = makeStyles(function (theme) { return ({
    root: {
        backgroundColor: theme.design.colors.white,
        borderRadius: "15px",
        border: "".concat(theme.spacing(0.4), " solid ").concat(theme.design.colors.lightGrey01, " "),
        "&  #customBtn": {
            display: "inline-block",
            paddingRight: theme.spacing(1),
            whiteSpace: "nowrap",
        },
        "&  #customBtn:hover": {
            cursor: "pointer",
        },
        "& span.label": {
            fontFamily: theme.typography.fontFamily,
            fontWeight: "normal",
        },
        "& span.icon": {
            display: "inline-block",
            verticalAlign: "middle",
            width: "42px",
            height: "42px",
            padding: theme.spacing(1.25),
        },
        "& .icon": {
            display: "inline-block",
            verticalAlign: "middle",
            width: "20px",
            height: "20px",
        },
        "& span.buttonText": {
            display: " inline-block",
            color: theme.design.colors.fauxGrey,
            verticalAlign: "middle",
            fontSize: theme.typography.fontSize,
            fontWeight: "bold",
            fontFamily: theme.typography.fontFamily,
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}); });
