import { makeStyles } from "@mui/styles";
export var useFormikDocumentsUploadStyles = makeStyles(function () { return ({
    helperText: function (props) {
        var _a, _b, _c;
        return ({
            fontFamily: (_b = (_a = props === null || props === void 0 ? void 0 : props.typography) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.fontFamily,
            fontSize: 10,
            color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c.error,
        });
    },
    selectFileButton: function (props) {
        var _a, _b, _c, _d;
        return ({
            borderColor: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.main,
            color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b.main,
            "&:hover": {
                color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c.main,
                borderColor: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d.hover,
            },
        });
    },
    label: function (props) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            fontFamily: (_b = (_a = props === null || props === void 0 ? void 0 : props.typography) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.color,
            color: (_d = (_c = props === null || props === void 0 ? void 0 : props.typography) === null || _c === void 0 ? void 0 : _c.label) === null || _d === void 0 ? void 0 : _d.color,
            fontSize: (_f = (_e = props === null || props === void 0 ? void 0 : props.typography) === null || _e === void 0 ? void 0 : _e.label) === null || _f === void 0 ? void 0 : _f.fontSize,
        });
    },
    changeFileButton: function (props) {
        var _a, _b, _c, _d;
        return ({
            background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.main,
            fontFamily: (_c = (_b = props === null || props === void 0 ? void 0 : props.typography) === null || _b === void 0 ? void 0 : _b.input) === null || _c === void 0 ? void 0 : _c.fontFamily,
            "&:hover": {
                background: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d.main,
            },
        });
    },
}); });
