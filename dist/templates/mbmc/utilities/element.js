export var handleElementClick = function (mode, element, handleClick) {
    if (mode === "view")
        return;
    handleClick === null || handleClick === void 0 ? void 0 : handleClick(element);
};
