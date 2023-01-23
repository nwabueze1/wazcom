import makeStyles from "@mui/styles/makeStyles";
export var useSelectStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'start',
        alignItems: 'start',
        position: "relative",
        marginBottom: theme.spacing(2)
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: 8,
        color: "#333333",
        alignItems: "center",
        letterSpacing: "0.13px",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-.5, .5, 0, .5),
    },
    select: {
        height: 34,
        minHeight: 34,
        borderColor: "".concat(theme.design.colors.primary700, " !important"),
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: theme.typography.fontSize,
        '&:hover': {
            borderColor: "".concat(theme.design.colors.primary600, " !important"),
        },
        '&:focus': {
            borderColor: theme.design.colors.primary500,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.primary500,
        },
    },
    error: {
        border: "1px solid ".concat(theme.design.colors.error),
        '&:hover': {
            borderColor: theme.design.colors.error,
        },
        '&:focus': {
            borderColor: theme.design.colors.error,
        },
        '&:hover:focus': {
            borderColor: theme.design.colors.error,
        },
    },
    labelWrapper: {
        display: 'flex',
        justifyContent: "space-between"
    },
    control: {
        borderColor: "".concat(theme.design.colors.primary500, " !important"),
        boxShadow: 'none !important',
        '&:hover': {
            borderColor: theme.design.colors.primary600,
        },
    },
    option: {
        backgroundColor: "".concat(theme.design.colors.primary900, " !important")
    }
}); });
