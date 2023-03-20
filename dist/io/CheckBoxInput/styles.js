import makeStyles from "@mui/styles/makeStyles";
export var useCheckboxInputStyles = makeStyles(function (theme) { return ({
    root: {
        position: 'relative',
        '& .feedback': {
            marginTop: "".concat(theme.spacing(.5), " !important"),
        },
    },
    innerWrapper: function (props) {
        var _a;
        return ({
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            cursor: 'pointer',
            userSelect: 'none',
            height: (props === null || props === void 0 ? void 0 : props.height) ? "".concat(props.height, "px") : theme.spacing(2),
            width: (props === null || props === void 0 ? void 0 : props.width) ? "".concat(props.width, "px") : theme.spacing(2),
            '& input:checked ~ .custom__checkbox': {
                backgroundColor: (_a = props.checkedBackground) !== null && _a !== void 0 ? _a : theme.design.colors.waz_primary100
            },
            '& .checked__icon': {
                visibility: 'hidden',
                opacity: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: (props === null || props === void 0 ? void 0 : props.iconSize) ? "".concat(props.iconSize, "px") : "".concat(theme.typography.fontSize + 5, "px")
            },
            '& input:checked ~ .checked__icon': {
                color: theme.design.colors.waz_white,
                visibility: 'visible',
                opacity: 1
            },
        });
    },
    labelStyle: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: theme.spacing(.7),
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        letterSpacing: "0.13px",
        textTransform: "uppercase",
    },
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
    customCheckbox: function (props) {
        var _a;
        return ({
            position: 'absolute',
            top: 0,
            left: 0,
            height: (props === null || props === void 0 ? void 0 : props.height) ? "".concat(props.height, "px") : theme.spacing(2),
            width: (props === null || props === void 0 ? void 0 : props.width) ? "".concat(props.width, "px") : theme.spacing(2),
            borderRadius: theme.spacing(.4),
            border: "".concat(theme.spacing(.2), " solid"),
            borderColor: theme.design.colors.grey700,
            backgroundColor: (_a = props.unCheckedBackground) !== null && _a !== void 0 ? _a : theme.design.colors.grey500,
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
