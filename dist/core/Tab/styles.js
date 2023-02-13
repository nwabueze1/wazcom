import { makeStyles } from "@mui/styles";
export var useTabStyles = makeStyles(function (theme) { return ({
    root: function (props) { return ({
        display: 'flex',
        flexDirection: props.variant === 'vertical' ? 'column' : 'row',
        justifyContent: props.variant === 'vertical' ? 'start' : '',
        fontSize: theme.typography.fontSize,
        width: "100%"
    }); },
    tabs: function (props) {
        var _a, _b;
        return ({
            width: props.variant === 'vertical' ? ((_a = props.width) !== null && _a !== void 0 ? _a : '100%') : 200,
            height: props.variant === 'vertical' ? ((_b = props.height) !== null && _b !== void 0 ? _b : '100%') : 300,
            minWidth: props.variant === 'vertical' ? '100%' : 200,
            minHeight: props.variant === 'vertical' ? '100%' : 300,
            display: props.variant === 'vertical' ? 'flex' : '',
            justifyContent: props.variant === 'vertical' ? 'start' : '',
            gap: props.variant === 'vertical' ? '20px' : '',
            padding: theme.spacing(2),
            background: theme.design.colors.white,
            marginRight: theme.spacing(2),
            borderRadius: theme.spacing(.5)
        });
    },
    tab: function (props) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            height: props.variant === 'vertical' ? 30 : '',
            display: props.variant === 'vertical' ? 'flex' : '',
            justifyContent: props.variant === 'vertical' ? 'center' : '',
            alignItems: props.variant === 'vertical' ? 'center' : '',
            background: props.variant === 'vertical' ? ((_a = props.backgroundColor) !== null && _a !== void 0 ? _a : '#F7FCF8') : '',
            color: props.variant === 'vertical' ? ((_b = props.color) !== null && _b !== void 0 ? _b : theme.design.colors.waz_black) : '',
            borderWidth: (_c = props.borderWidth) !== null && _c !== void 0 ? _c : 1,
            borderStyle: (_d = props.borderStyle) !== null && _d !== void 0 ? _d : 'solid',
            borderColor: props.variant === 'vertical' ? ((_e = props.borderColor) !== null && _e !== void 0 ? _e : '#F7FCF8') : theme.design.colors.primary700,
            borderRadius: props.variant === 'vertical' ? ((_f = props.borderRadius) !== null && _f !== void 0 ? _f : 14) : theme.spacing(.5),
            padding: theme.spacing(1.7, 2),
            marginBottom: theme.spacing(1),
            fontWeight: theme.typography.fontWeightMedium,
            cursor: 'pointer',
            transition: 'all .5s ease-out',
            '&:hover': {
                color: props.variant === 'vertical' ? ((_g = props.color) !== null && _g !== void 0 ? _g : theme.design.colors.primary100) : theme.design.colors.primary200,
                borderColor: props.variant === 'vertical' ? ((_h = props.borderColor) !== null && _h !== void 0 ? _h : theme.design.colors.primary500) : theme.design.colors.primary500,
            }
        });
    },
    tabIsActive: function (props) {
        var _a, _b, _c, _d, _e;
        return ({
            background: props.variant === 'vertical' ? ((_a = props.backgroundColor) !== null && _a !== void 0 ? _a : theme.design.colors.primary100) : '',
            color: props.variant === 'vertical' ? ((_b = props.color) !== null && _b !== void 0 ? _b : theme.design.colors.waz_white) : '',
            borderColor: props.variant === 'vertical' ? ((_c = props.borderColor) !== null && _c !== void 0 ? _c : theme.design.colors.primary100) : theme.design.colors.primary100,
            '&:hover': {
                color: props.variant === 'vertical' ? ((_d = props.color) !== null && _d !== void 0 ? _d : theme.design.colors.waz_white) : theme.design.colors.primary200,
                borderColor: props.variant === 'vertical' ? ((_e = props.borderColor) !== null && _e !== void 0 ? _e : theme.design.colors.primary100) : theme.design.colors.primary500,
            }
        });
    },
    contentWrapper: {
        padding: theme.spacing(1.7, 2),
        background: theme.design.colors.white,
        flex: '100',
        borderRadius: theme.spacing(.5)
    },
    content: {
        display: 'none'
    },
    contentIsActive: {
        display: 'block'
    }
}); });
