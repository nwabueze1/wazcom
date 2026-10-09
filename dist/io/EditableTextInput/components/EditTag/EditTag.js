import { jsx as _jsx } from "react/jsx-runtime";
import { useEditableTextStyles } from "../../styles";
export var EditTag = function (_a) {
    var name = _a.name, cmd = _a.cmd, arg = _a.arg, Icon = _a.Icon;
    var classes = useEditableTextStyles();
    return (_jsx("div", { onMouseDown: function (evt) {
            evt.preventDefault();
            document.execCommand(cmd !== null && cmd !== void 0 ? cmd : "", false, arg);
        }, className: classes.controlIcon, children: Icon ? _jsx(Icon, {}) : name }, cmd));
};
