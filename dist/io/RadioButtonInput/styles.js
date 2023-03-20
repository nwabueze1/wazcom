import { makeStyles } from "@mui/styles";
/** !!-- Remember to update the function name !! */
export var useRadioButtonInputStyles = makeStyles(function (theme) { return ({
    root: {
        position: 'relative',
        '& .feedback': {
            marginTop: "".concat(theme.spacing(.5), " !important"),
        },
    },
    innerWrapper: function (props) {
        var _a, _b;
        return ({
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            cursor: 'pointer',
            userSelect: 'none',
            height: (props === null || props === void 0 ? void 0 : props.radioSize) ? "".concat(props.radioSize, "px") : theme.spacing(1),
            width: (props === null || props === void 0 ? void 0 : props.radioSize) ? "".concat(props.radioSize, "px") : theme.spacing(1),
            '& input:checked ~ .custom__radio': {
                backgroundColor: (_a = props.checkedBackground) !== null && _a !== void 0 ? _a : theme.design.colors.waz_primary100,
                outline: "1px solid ".concat((_b = props.checkedBackground) !== null && _b !== void 0 ? _b : theme.design.colors.waz_primary100),
            },
        });
    },
    radioWrapper: function (props) { return ({
        display: 'flex',
        flexDirection: (props === null || props === void 0 ? void 0 : props.position) === 'horizontal' ? 'row' : 'column',
        gap: (props === null || props === void 0 ? void 0 : props.position) === 'horizontal' ? theme.spacing(1.4) : theme.spacing(1.1),
        justifyContent: 'center',
        alignItems: 'center',
    }); },
    labelStyle: function (props) { return ({
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        letterSpacing: "0.13px",
        textTransform: "uppercase",
        order: (props === null || props === void 0 ? void 0 : props.position) === 'horizontal' ? 2 : -1,
        cursor: 'pointer'
    }); },
    input: {
        position: 'absolute',
        opacity: '0',
        cursor: 'pointer',
        height: '0',
        width: '0',
    },
    checkedIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate( -50%, -50%)'
    },
    helperText: {
        fontSize: theme.typography.fontSize - 2,
        marginTop: theme.typography.fontSize - 6
    },
    customRadio: function (props) {
        var _a;
        return ({
            position: 'absolute',
            top: 0,
            left: 0,
            height: (props === null || props === void 0 ? void 0 : props.radioSize) ? "".concat(props.radioSize, "px") : theme.spacing(1),
            width: (props === null || props === void 0 ? void 0 : props.radioSize) ? "".concat(props.radioSize, "px") : theme.spacing(1),
            borderRadius: theme.spacing(8),
            backgroundColor: (_a = props.unCheckedBackground) !== null && _a !== void 0 ? _a : theme.design.colors.grey500,
            outline: "1px solid ".concat(theme.design.colors.grey700),
            outlineOffset: theme.spacing(.45),
            opacity: (props === null || props === void 0 ? void 0 : props.disabled) ? .2 : 1,
            "&:hover": {
                borderColor: theme.design.colors.primary500,
            },
            "&:focus, &:hover:focus, &:active": {
                borderColor: theme.design.colors.primary400,
            },
            '&:after': {
                content: '',
                position: 'absolute',
                display: 'none'
            }
        });
    }
}); });
