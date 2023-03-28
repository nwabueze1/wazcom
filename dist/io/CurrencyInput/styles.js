import { makeStyles } from "@mui/styles";
export var useCurrencyInputStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: function (props) { return ({
            position: "relative",
            display: "flex",
            flexDirection: props.variant === "vertical" ? "column" : "row",
            alignItems: "start",
            justifyContent: "start",
            gap: theme.spacing(4),
            width: "100%",
            height: "100%",
        }); },
        horizontalRoot: function (props) {
            var _a;
            return (_a = {
                    position: "relative",
                    display: "flex",
                    flexDirection: props.variant === "vertical" ? "column" : "row",
                    alignItems: "start",
                    justifyContent: "start",
                    gap: theme.spacing(1),
                    width: "100%",
                    height: "100%"
                },
                _a[theme.breakpoints.down("sm")] = {
                    flexDirection: "column",
                    gap: theme.spacing(4),
                },
                _a);
        },
        currencyContainer: (_a = {
                display: "flex",
                flexDirection: "column",
                justifyContent: "start"
            },
            _a[theme.breakpoints.down("sm")] = {
                minWidth: "100%",
            },
            _a),
        selectContainer: function (props) {
            var _a;
            return (_a = {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    marginBottom: -16,
                    width: props.variant === "vertical" ? "100%" : "50%"
                },
                _a[theme.breakpoints.down("sm")] = {
                    width: "100%",
                },
                _a);
        },
        label: {
            fontSize: theme.typography.fontSize - 2,
            display: "flex",
            marginBottom: theme.spacing(1),
            color: theme.design.colors.waz_grey,
            alignItems: "center",
            letterSpacing: "0.13px",
            textTransform: "uppercase",
        },
        selectLabel: {
            color: theme.design.colors.waz_grey,
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 2,
        },
        required: {
            color: theme.design.colors.waz_dangerColor100,
            margin: theme.spacing(-0.5, 0.5, 0, 0.5),
        },
        baseInput: function (props) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return ({
                display: "flex",
                padding: !props.isSelectCurrency ? "8px 12px" : 0,
                height: (_a = props.height) !== null && _a !== void 0 ? _a : 34,
                width: (_b = props.width) !== null && _b !== void 0 ? _b : 187,
                background: "".concat((_c = props.background) !== null && _c !== void 0 ? _c : theme.design.colors.white100, " 0% 0% no-repeat padding-box"),
                color: (_d = props.color) !== null && _d !== void 0 ? _d : theme.design.colors.waz_primaryBlack,
                borderWidth: (_e = props === null || props === void 0 ? void 0 : props.borderWidth) !== null && _e !== void 0 ? _e : 1,
                borderStyle: (_f = props === null || props === void 0 ? void 0 : props.borderStyle) !== null && _f !== void 0 ? _f : "solid",
                borderRadius: (_g = props === null || props === void 0 ? void 0 : props.borderRadius) !== null && _g !== void 0 ? _g : theme.spacing(0.5),
                fontWeight: 400,
                fontSize: theme.typography.fontSize,
                borderColor: (_h = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _h !== void 0 ? _h : theme.design.colors.waz_primary700,
                '&[data-disabled="true"]': {
                    cursor: "not-allowed",
                    pointerEvents: "none",
                    opacity: 0.6,
                },
                "&:hover": {
                    borderColor: theme.design.colors.waz_primary500,
                },
                "&:focus, &:hover:focus, &:active": {
                    borderColor: theme.design.colors.waz_primary500,
                },
            });
        },
        defaultInput: function (props) {
            var _a;
            return ({
                borderColor: (_a = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _a !== void 0 ? _a : theme.design.colors.primary700,
                "&:hover": {
                    borderColor: theme.design.colors.primary500,
                },
                "&:focus, &:hover:focus, &:active": {
                    borderColor: theme.design.colors.primary400,
                },
            });
        },
        focusedInput: function (props) {
            var _a;
            return ({
                borderColor: (_a = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _a !== void 0 ? _a : theme.design.colors.primary400,
                "&:hover, &:focus, &:hover:focus, &:active": {
                    borderColor: theme.design.colors.primary400,
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
        input: {
            display: "flex",
            width: "100%",
            background: "transparent",
            border: 0,
            outline: "none",
            fontFamily: theme.typography.fontFamily,
            fontWeight: 400,
            fontSize: theme.typography.fontSize,
            paddingLeft: theme.spacing(1),
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
            fontSize: 8,
            textAlign: "left",
            marginTop: theme.spacing(0.5),
        },
        helperTextSuccess: {
            color: theme.design.colors.waz_primaryColor100,
        },
        helperTextError: {
            color: theme.design.colors.error,
        },
        currencySelectRoot: {
            position: "relative",
            backgroundColor: "transparent",
            display: "inline-flex",
            alignSelf: "center",
            flexShrink: 0,
        },
        currencySingle: {
            fontSize: 14,
            fontWeight: 700,
            lineSpacing: 22,
            letterSpacing: 0,
            textAlign: "left",
            color: theme.design.colors.grey100,
            borderRightWidth: 1,
            borderRightColor: theme.design.colors.waz_primary600,
            borderRightStyle: "solid",
            paddingRight: 10,
        },
        currencyMultiple: {
            fontSize: theme.typography.fontSize,
            fontWeight: 500,
            lineSpacing: 22,
            letterSpacing: 0,
            textAlign: "left",
            color: theme.design.colors.grey100,
            borderRightWidth: 1,
            borderRightColor: theme.design.colors.waz_primary600,
            borderRightStyle: "solid",
            paddingRight: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            cursor: "pointer",
        },
        selectInputClass: {
            display: "block",
            marginBottom: 0,
            border: 0,
        },
    });
});
export var useCurrencyIconStyles = makeStyles(function (theme) { return ({
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
    currencySingle: {
        fontSize: 14,
        fontWeight: 700,
        lineSpacing: 22,
        letterSpacing: 0,
        textAlign: "left",
        color: theme.design.colors.grey100,
        borderRightWidth: 1,
        borderRightColor: theme.design.colors.primary600,
        borderRightStyle: "solid",
        paddingRight: 10,
    },
    currencyMultiple: {
        fontSize: 14,
        fontWeight: 700,
        lineSpacing: 22,
        letterSpacing: 0,
        textAlign: "left",
        color: theme.design.colors.grey100,
        borderRightWidth: 1,
        borderRightColor: theme.design.colors.primary600,
        borderRightStyle: "solid",
        paddingRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        cursor: "pointer",
    },
}); });
export var useSelectInputStyles = makeStyles(function () { return ({
    root: {
        boxSizing: "border-box",
        "&:before, &:after": {
            boxSizing: "border-box",
        },
    },
}); });
