import makeStyles from "@mui/styles/makeStyles";
export var useCheckboxInputStyles = makeStyles(function (theme) { return ({
    base: {
        position: "relative",
    },
    root: {
        position: "relative",
        "& .feedback": {
            marginTop: "".concat(theme.spacing(0.5), " !important"),
        },
    },
    innerWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
        height: theme.spacing(2),
        width: theme.spacing(2),
        "& input:checked ~ .custom__checkbox": {
            backgroundColor: theme.design.colors.waz_primary100,
        },
        "& .checked__icon": {
            visibility: "hidden",
            opacity: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "".concat(theme.typography.fontSize + 5, "px"),
        },
        "& input:checked ~ .checked__icon": {
            color: theme.design.colors.waz_white,
            visibility: "visible",
            opacity: 1,
        },
    },
    labelStyle: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: theme.spacing(0.5),
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        textTransform: "uppercase",
    },
    input: {
        position: "absolute",
        opacity: "0",
        cursor: "pointer",
        height: "0",
        width: "0",
    },
    checkedIcon: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate( -50%, -50%)",
    },
    helperText: {
        fontSize: theme.typography.fontSize - 2,
        marginTop: theme.spacing(0.5),
    },
    customCheckbox: {
        position: "absolute",
        top: 0,
        left: 0,
        height: theme.spacing(2),
        width: theme.spacing(2),
        borderRadius: theme.spacing(0.5),
        border: "1px solid",
        borderColor: theme.design.colors.grey700,
        "&:hover": {
            borderColor: theme.design.colors.primary500,
        },
        "&:focus, &:hover:focus, &:active": {
            borderColor: theme.design.colors.primary400,
        },
        "&:after": {
            content: "",
            position: "absolute",
            display: "none",
        },
    },
}); });
