import { makeStyles } from "@mui/styles";
export var useCurrencyInputStyles = makeStyles(function (theme) { return ({
    root: function (props) { return ({
        position: 'relative',
        display: "flex",
        flexDirection: props.variant === 'vertical' ? 'column' : 'row',
        alignItems: 'start',
        justifyContent: 'start',
        gap: 16,
        width: '100%',
        height: '100%',
    }); },
    currencyContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'start',
    },
    selectContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'start',
        marginBottom: -16
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: 8,
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        letterSpacing: "0.13px",
        textTransform: "uppercase",
    },
    selectLabel: {
        color: theme.design.colors.waz_grey,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: 2
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-.5, .5, 0, .5),
    },
    baseInput: function (props) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            display: 'flex',
            padding: !props.isSelectCurrency ? '8px 12px' : 0,
            height: (_a = props.height) !== null && _a !== void 0 ? _a : 34,
            width: (_b = props.width) !== null && _b !== void 0 ? _b : 187,
            background: "".concat((_c = props.background) !== null && _c !== void 0 ? _c : theme.design.colors.white100, " 0% 0% no-repeat padding-box"),
            color: (_d = props.color) !== null && _d !== void 0 ? _d : theme.design.colors.waz_primaryBlack,
            borderWidth: (_e = props === null || props === void 0 ? void 0 : props.borderWidth) !== null && _e !== void 0 ? _e : 1,
            borderStyle: (_f = props === null || props === void 0 ? void 0 : props.borderStyle) !== null && _f !== void 0 ? _f : 'solid',
            borderRadius: (_g = props === null || props === void 0 ? void 0 : props.borderRadius) !== null && _g !== void 0 ? _g : 4,
            fontWeight: 400,
            fontSize: theme.typography.fontSize,
            borderColor: (_h = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _h !== void 0 ? _h : theme.design.colors.primary700,
            '&:hover': {
                borderColor: theme.design.colors.primary500,
            },
            '&:focus, &:hover:focus, &:active': {
                borderColor: theme.design.colors.primary400,
            },
        });
    },
    baseTextArea: function (props) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            display: 'flex',
            padding: 10,
            outline: 0,
            background: "".concat((_a = props.background) !== null && _a !== void 0 ? _a : theme.design.colors.white100, " 0% 0% no-repeat padding-box"),
            color: (_b = props.color) !== null && _b !== void 0 ? _b : theme.design.colors.waz_primaryBlack,
            borderWidth: (_c = props === null || props === void 0 ? void 0 : props.borderWidth) !== null && _c !== void 0 ? _c : 1,
            borderStyle: (_d = props === null || props === void 0 ? void 0 : props.borderStyle) !== null && _d !== void 0 ? _d : 'solid',
            borderRadius: (_e = props === null || props === void 0 ? void 0 : props.borderRadius) !== null && _e !== void 0 ? _e : 4,
            fontWeight: 400,
            fontSize: theme.typography.fontSize,
            borderColor: (_f = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _f !== void 0 ? _f : theme.design.colors.primary700,
            '&:hover': {
                borderColor: theme.design.colors.primary500,
            },
            '&:focus, &:hover:focus, &:active': {
                borderColor: theme.design.colors.primary400,
            },
        });
    },
    defaultInput: function (props) {
        var _a;
        return ({
            borderColor: (_a = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _a !== void 0 ? _a : theme.design.colors.primary700,
            '&:hover': {
                borderColor: theme.design.colors.primary500,
            },
            '&:focus, &:hover:focus, &:active': {
                borderColor: theme.design.colors.primary400,
            },
        });
    },
    focusedInput: function (props) {
        var _a;
        return ({
            borderColor: (_a = props === null || props === void 0 ? void 0 : props.borderColor) !== null && _a !== void 0 ? _a : theme.design.colors.primary400,
            '&:hover, &:focus, &:hover:focus, &:active': {
                borderColor: theme.design.colors.primary400,
            },
        });
    },
    errorInput: function () { return ({
        borderColor: theme.design.colors.error,
        '&:hover, &:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.error,
        },
    }); },
    successInput: function () { return ({
        borderColor: theme.design.colors.waz_primaryColor100,
        '&:hover, &:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    }); },
    input: {
        display: 'flex',
        width: '100%',
        background: 'transparent',
        border: 0,
        outline: "none",
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: theme.typography.fontSize,
    },
    textAreaContainer: {
        padding: 0,
        margin: 0,
        border: 0,
        width: '100%'
    },
    textAreaInput: {
        padding: 0,
        margin: 0,
        border: 0
    },
    wordCount: {},
    labelWrapper: {
        display: 'flex',
        justifyContent: "space-between",
        width: '100%'
    },
    helperTextDefault: {
        display: 'flex',
        width: '100%',
        letterSpacing: 0,
        fontSize: 8,
        textAlign: 'left',
        marginTop: 4
    },
    helperTextSuccess: {
        color: theme.design.colors.waz_primaryColor100,
    },
    helperTextError: {
        color: theme.design.colors.error,
    },
    currencySelectRoot: {
        position: 'relative',
        backgroundColor: 'transparent',
        display: 'inline-flex',
        alignSelf: 'center',
        flexShrink: 0
    },
    currencySingle: {
        fontSize: 14,
        fontWeight: 700,
        lineSpacing: 22,
        letterSpacing: 0,
        textAlign: 'left',
        color: theme.design.colors.grey100,
        borderRightWidth: 1,
        borderRightColor: theme.design.colors.primary600,
        borderRightStyle: 'solid',
        paddingRight: 10
    },
    currencyMultiple: {
        fontSize: 14,
        fontWeight: 700,
        lineSpacing: 22,
        letterSpacing: 0,
        textAlign: 'left',
        color: theme.design.colors.grey100,
        borderRightWidth: 1,
        borderRightColor: theme.design.colors.primary600,
        borderRightStyle: 'solid',
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        cursor: 'pointer'
    },
    selectInputClass: {
        display: 'block',
        // position: 'absolute',
        marginBottom: 0,
        border: 0
    }
}); });
export var useCurrencyIconStyles = makeStyles(function (theme) { return ({
    root: {
        position: 'relative',
        backgroundColor: 'transparent',
        display: 'inline-flex',
        alignSelf: 'center',
        flexShrink: 0
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
        textAlign: 'left',
        color: theme.design.colors.grey100,
        borderRightWidth: 1,
        borderRightColor: theme.design.colors.primary600,
        borderRightStyle: 'solid',
        paddingRight: 10
    },
    currencyMultiple: {
        fontSize: 14,
        fontWeight: 700,
        lineSpacing: 22,
        letterSpacing: 0,
        textAlign: 'left',
        color: theme.design.colors.grey100,
        borderRightWidth: 1,
        borderRightColor: theme.design.colors.primary600,
        borderRightStyle: 'solid',
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        cursor: 'pointer'
    }
}); });
export var useSelectInputStyles = makeStyles(function () { return ({
    root: {
        boxSizing: 'border-box',
        '&:before, &:after': {
            boxSizing: 'border-box',
        },
        '& select': {}
    }
}); });
