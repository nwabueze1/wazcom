import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelectorStyles } from "./styles";
import { AiOutlineCheck } from "react-icons/ai";
import { Button } from "../";
import clx from "classnames";
export var Selector = function (_a) {
    var options = _a.options, selectorValue = _a.value, handleChange = _a.handleChange;
    var classes = useSelectorStyles();
    var displayOptions = function () {
        return options.map(function (_a, index) {
            var name = _a.name, value = _a.value;
            var isActive = (value === null || value === void 0 ? void 0 : value.toLowerCase()) === (selectorValue !== null && selectorValue !== void 0 ? selectorValue : "").toLowerCase();
            return (_jsxs(Button, { onClick: function () {
                    handleChange === null || handleChange === void 0 ? void 0 : handleChange(value);
                }, className: clx(classes.selectorOption, index === 0 && classes.selectorOptionInitial, index === options.length - 1 && classes.selectorOptionFinal, isActive && classes.selectorOptionActive), children: [name, " ", isActive && _jsx(AiOutlineCheck, { className: classes.selectorIcon })] }, index));
        });
    };
    return _jsx("div", { className: classes.root, children: displayOptions() });
};
