import makeStyles from "@mui/styles/makeStyles";
export var usePalletteStyles = makeStyles(function () { return ({
    container: {
        border: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.main; },
        background: function (props) { var _a, _b; return (_b = (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.main) !== null && _b !== void 0 ? _b : ""; },
        opacity: 0.6,
        "&:hover": {
            border: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.hover; },
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.hover; },
        },
        "&.error": {
            border: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.error; },
        },
        "&.active": {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.main; },
            opacity: 1,
        },
    },
    text: function (props) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            color: (_b = (_a = props === null || props === void 0 ? void 0 : props.typography) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.color,
            fontFamily: (_d = (_c = props === null || props === void 0 ? void 0 : props.typography) === null || _c === void 0 ? void 0 : _c.input) === null || _d === void 0 ? void 0 : _d.fontFamily,
            fontSize: (_f = (_e = props === null || props === void 0 ? void 0 : props.typography) === null || _e === void 0 ? void 0 : _e.input) === null || _f === void 0 ? void 0 : _f.fontSize,
        });
    },
    label: function (props) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            color: (_b = (_a = props === null || props === void 0 ? void 0 : props.typography) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.color,
            fontFamily: (_d = (_c = props === null || props === void 0 ? void 0 : props.typography) === null || _c === void 0 ? void 0 : _c.label) === null || _d === void 0 ? void 0 : _d.fontFamily,
            fontSize: (_f = (_e = props === null || props === void 0 ? void 0 : props.typography) === null || _e === void 0 ? void 0 : _e.label) === null || _f === void 0 ? void 0 : _f.fontSize,
        });
    },
}); });
