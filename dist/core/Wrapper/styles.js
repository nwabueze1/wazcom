var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { makeStyles } from "@mui/styles";
export var useWrapperStyles = makeStyles(function (theme) { return ({
    root: function (props) { return (__assign({ background: theme.design.background.waz_primaryWhite, borderWidth: 1, borderStyle: "solid", borderColor: theme.design.colors.waz_grey300, borderRadius: 3, padding: '20px', paddingLeft: 24, paddingRight: 24, minHeight: 120, display: "flex", flexDirection: 'column', justifyContent: 'center', gap: 30, maxWidth: "1100px" }, props === null || props === void 0 ? void 0 : props.style)); },
}); });
