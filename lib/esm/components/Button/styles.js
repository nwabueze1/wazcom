import { makeStyles } from "@material-ui/core/styles";
export var useButtonStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    return ({
        root: {
            display: "flex",
            minWidth: theme.spacing(36),
            minHeight: theme.spacing(7.5),
            fontSize: theme.typography.fontSize,
            background: theme.design.colors.lightRed,
            color: theme.design.colors.white,
            borderRadius: theme.spacing(1),
            justifyContent: "center",
            alignItems: "center",
            "&:focus": {
                outline: "none",
            },
        },
        wrapper: {
            display: "flex",
            justifyContent: function (_a) {
                var align = _a.align;
                return align && align == "right" ? "flex-end" : "flex-start";
            },
        },
        align: function (_a) {
            var align = _a.align;
            return ({
                justifyContent: align && align == "right" ? "flex-end" : "flex-start",
            });
        },
        title: {},
        progress: {
            color: (_a = theme.design) === null || _a === void 0 ? void 0 : _a.colors.white,
        },
        normal: {
            color: (_b = theme.design) === null || _b === void 0 ? void 0 : _b.colors.white,
            backgroundColor: (_c = theme.design) === null || _c === void 0 ? void 0 : _c.colors.primaryBlue,
            padding: theme.typography.fontSize * 0.5 + "px " + theme.typography.fontSize * 3 + "px",
            minWidth: theme.spacing(30),
            minHeight: theme.spacing(7),
        },
        small: {
            color: (_d = theme.design) === null || _d === void 0 ? void 0 : _d.colors.white,
            padding: theme.typography.fontSize * 0.5 + "px " + theme.typography.fontSize * 3 + "px",
            minWidth: theme.spacing(30),
            minHeight: theme.spacing(7),
        },
        medium: {
            color: (_e = theme.design) === null || _e === void 0 ? void 0 : _e.colors.white,
            padding: theme.typography.fontSize * 0.5 + "px " + theme.typography.fontSize * 3 + "px",
            minWidth: theme.spacing(38),
            minHeight: theme.spacing(7.5),
        },
        large: {
            color: (_f = theme.design) === null || _f === void 0 ? void 0 : _f.colors.white,
            padding: theme.typography.fontSize * 0.5 + "px " + theme.typography.fontSize * 3 + "px",
            minWidth: theme.spacing(40),
            minHeight: theme.spacing(8),
        },
        hover: {
            backgroundColor: (_g = theme.design) === null || _g === void 0 ? void 0 : _g.colors.maroon,
        },
        active: {
            backgroundColor: (_h = theme.design) === null || _h === void 0 ? void 0 : _h.colors.orange,
        },
        disable: {
            backgroundColor: (_j = theme.design) === null || _j === void 0 ? void 0 : _j.colors.paleGrey,
        },
        transparent: {
            backgroundColor: "transparent",
            color: (_k = theme.design) === null || _k === void 0 ? void 0 : _k.colors.lightRed,
            border: "2px solid " + ((_l = theme.design) === null || _l === void 0 ? void 0 : _l.colors.lightRed),
        },
        hoverOutline: {
            backgroundColor: (_m = theme.design) === null || _m === void 0 ? void 0 : _m.colors.red10,
            color: (_o = theme.design) === null || _o === void 0 ? void 0 : _o.colors.maroon,
            border: "2px solid " + ((_p = theme.design) === null || _p === void 0 ? void 0 : _p.colors.maroon),
        },
        activeOutline: {
            backgroundColor: (_q = theme.design) === null || _q === void 0 ? void 0 : _q.colors.red20,
            color: (_r = theme.design) === null || _r === void 0 ? void 0 : _r.colors.lightRed,
            border: "2px solid " + ((_s = theme.design) === null || _s === void 0 ? void 0 : _s.colors.lightRed),
        },
        disableOutline: {
            backgroundColor: (_t = theme.design) === null || _t === void 0 ? void 0 : _t.colors.white,
            color: (_u = theme.design) === null || _u === void 0 ? void 0 : _u.colors.paleGrey,
        },
    });
});
