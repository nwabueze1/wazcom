export var isNotRenderAnchor = function (url, mode) {
    return (url === null || url === void 0 ? void 0 : url.startsWith("/")) || url === "#" || mode === "edit";
};
export var clickAction = function (url, mode, handleClick) {
    if (mode === "edit" || (mode === "view" && url !== "#"))
        handleClick();
};
