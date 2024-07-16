import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFilterStyles } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
export var Filter = function (_a) {
    var name = _a.name, column = _a.column, type = _a.type, operator = _a.operator, value = _a.value, handleDelete = _a.handleDelete;
    var classes = useFilterStyles();
    var getRelation = function () {
        switch (type) {
            case "string":
                return operator === "=" ? ": " : ": not ";
            case "number":
                return ": ".concat(operator, " ");
            default:
                return operator === ">" ? ": in the last " : ": before ";
        }
    };
    return (_jsxs("div", { className: classes.root, children: [_jsx("span", { className: classes.filterColumn, children: typeof name === "string" ? name : column.replace(/./g, " ") }), getRelation(), value, _jsx(AiOutlineClose, { className: classes.filterCloseIcon, onClick: handleDelete })] }));
};
