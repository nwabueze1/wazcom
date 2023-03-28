import makeStyles from "@mui/styles/makeStyles";
export var usePasswordInputStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: theme.spacing(1),
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-0.5, 0.5, 0, 0.5),
    },
    baseInput: function (props) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            display: "flex",
            padding: theme.spacing(1.2, 1.4),
            height: (_a = props.height) !== null && _a !== void 0 ? _a : 34,
            width: (_b = props.width) !== null && _b !== void 0 ? _b : "100%",
            background: (_c = props.background) !== null && _c !== void 0 ? _c : theme.design.colors.white100,
            color: (_d = props.color) !== null && _d !== void 0 ? _d : theme.design.colors.waz_primaryBlack,
            borderWidth: (_e = props === null || props === void 0 ? void 0 : props.borderWidth) !== null && _e !== void 0 ? _e : 1,
            borderStyle: (_f = props === null || props === void 0 ? void 0 : props.borderStyle) !== null && _f !== void 0 ? _f : "solid",
            borderRadius: (_g = props === null || props === void 0 ? void 0 : props.borderRadius) !== null && _g !== void 0 ? _g : 4,
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.fontSize,
            borderColor: (_h = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _h !== void 0 ? _h : theme.design.colors.waz_primary700,
            "&:hover": {
                borderColor: theme.design.colors.waz_primary500,
            },
            "&:focus, &:hover:focus, &:active": {
                borderColor: theme.design.colors.waz_primary400,
            },
        });
    },
    baseTextArea: function (props) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            display: "flex",
            padding: 10,
            outline: 0,
            width: "100%",
            fontFamily: theme.design.font.openSans,
            background: (_a = props.background) !== null && _a !== void 0 ? _a : theme.design.colors.white100,
            color: (_b = props.color) !== null && _b !== void 0 ? _b : theme.design.colors.waz_primaryBlack,
            borderWidth: (_c = props === null || props === void 0 ? void 0 : props.borderWidth) !== null && _c !== void 0 ? _c : 1,
            borderStyle: (_d = props === null || props === void 0 ? void 0 : props.borderStyle) !== null && _d !== void 0 ? _d : "solid",
            borderRadius: (_e = props === null || props === void 0 ? void 0 : props.borderRadius) !== null && _e !== void 0 ? _e : 4,
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.fontSize,
            borderColor: (_f = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _f !== void 0 ? _f : theme.design.colors.primary700,
            "&:hover": {
                borderColor: theme.design.colors.waz_primary500,
            },
            "&:focus, &:hover:focus, &:active": {
                borderColor: theme.design.colors.waz_primary400,
            },
        });
    },
    defaultInput: function (props) {
        var _a;
        return ({
            borderColor: (_a = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _a !== void 0 ? _a : theme.design.colors.waz_primary700,
            "&:hover": {
                borderColor: theme.design.colors.waz_primary500,
            },
            "&:focus, &:hover:focus, &:active": {
                borderColor: theme.design.colors.waz_primary400,
            },
        });
    },
    focusedInput: function (props) {
        var _a;
        return ({
            borderColor: (_a = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _a !== void 0 ? _a : theme.design.colors.waz_primary400,
            "&:hover, &:focus, &:hover:focus, &:active": {
                borderColor: theme.design.colors.waz_primary400,
            },
        });
    },
    errorInput: function () { return ({
        borderColor: theme.design.colors.error,
        "&:hover, &:focus, &:hover:focus, &:active": {
            borderColor: theme.design.colors.error,
        },
    }); },
    successInput: function () { return ({
        borderColor: theme.design.colors.waz_primaryColor100,
        "&:hover, &:focus, &:hover:focus, &:active": {
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    }); },
    iconButton: {
        cursor: "pointer",
        all: "unset",
    },
    input: {
        display: "flex",
        width: "100%",
        background: "transparent",
        border: 0,
        outline: "none",
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
    },
    labelWrapper: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    helperTextDefault: {
        display: "flex",
        width: "100%",
        letterSpacing: 0,
        fontSize: theme.typography.fontSize - 1,
        textAlign: "left",
        marginTop: theme.spacing(0.8),
    },
    helperTextSuccess: {
        color: theme.design.colors.waz_primaryColor100,
    },
    helperTextError: {
        color: theme.design.colors.error,
    },
}); });
export var useTextInputIconStyles = makeStyles(function () { return ({
    root: {
        position: "relative",
        backgroundColor: "transparent",
        display: "inline-flex",
        alignSelf: "center",
        flexShrink: 0,
    },
    iconSpacing: function (props) { return ({
        marginRight: "".concat(props.marginRight, "px"),
        marginLeft: "".concat(props.marginLeft, "px"),
    }); },
}); });
