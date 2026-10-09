import { jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { RiLoader4Line } from "react-icons/ri";
import { useSpinnerStyles } from "./styles";
export var Spinner = function (_a) {
    var variant = _a.variant;
    var classes = useSpinnerStyles({ variant: variant });
    var _className = clx(variant === "primary"
        ? classes.contained
        : variant === "secondary"
            ? classes.outlined
            : classes.default);
    return (_jsx("span", { className: classes.root, children: _jsx(RiLoader4Line, { className: _className }) }));
};
