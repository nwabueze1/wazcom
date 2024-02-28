import makeStyles from "@mui/styles/makeStyles";
export var usePallette = makeStyles(function () { return ({
    rating: function (pallette) {
        var _a, _b, _c;
        return ({
            "& > svg": {
                fill: (_a = pallette === null || pallette === void 0 ? void 0 : pallette.colors) === null || _a === void 0 ? void 0 : _a.main,
                opacity: 0.4,
                "&.filled": {
                    opacity: 1,
                    fill: (_b = pallette === null || pallette === void 0 ? void 0 : pallette.colors) === null || _b === void 0 ? void 0 : _b.main,
                },
                "&:hover": {
                    fill: (_c = pallette === null || pallette === void 0 ? void 0 : pallette.colors) === null || _c === void 0 ? void 0 : _c.hover,
                },
            },
        });
    },
    label: function (props) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            fontSize: (_b = (_a = props === null || props === void 0 ? void 0 : props.typography) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.fontSize,
            color: (_d = (_c = props === null || props === void 0 ? void 0 : props.typography) === null || _c === void 0 ? void 0 : _c.label) === null || _d === void 0 ? void 0 : _d.color,
            fontFamily: (_f = (_e = props === null || props === void 0 ? void 0 : props.typography) === null || _e === void 0 ? void 0 : _e.label) === null || _f === void 0 ? void 0 : _f.fontFamily,
        });
    },
}); });
