import makeStyles from "@mui/styles/makeStyles";
export var usePalletteStyles = makeStyles(function () { return ({
    root: function (props) {
        var _a;
        return ({
            "& input:checked ~ .custom__checkbox": {
                backgroundColor: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.main,
            },
        });
    },
    label: function (props) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            color: (_b = (_a = props === null || props === void 0 ? void 0 : props.typography) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.color,
            fontSize: (_d = (_c = props === null || props === void 0 ? void 0 : props.typography) === null || _c === void 0 ? void 0 : _c.label) === null || _d === void 0 ? void 0 : _d.fontSize,
            fontFamily: (_f = (_e = props === null || props === void 0 ? void 0 : props.typography) === null || _e === void 0 ? void 0 : _e.label) === null || _f === void 0 ? void 0 : _f.fontFamily,
        });
    },
    input: function (props) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            color: (_b = (_a = props === null || props === void 0 ? void 0 : props.typography) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.color,
            fontSize: (_d = (_c = props === null || props === void 0 ? void 0 : props.typography) === null || _c === void 0 ? void 0 : _c.input) === null || _d === void 0 ? void 0 : _d.fontSize,
            fontFamily: (_f = (_e = props === null || props === void 0 ? void 0 : props.typography) === null || _e === void 0 ? void 0 : _e.input) === null || _f === void 0 ? void 0 : _f.fontFamily,
        });
    },
}); });
