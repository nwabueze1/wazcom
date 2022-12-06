export var isNotRenderAnchor = function (url, mode) {
    return url === "#" || mode === "edit";
};
export var clickAction = function (url, mode, handleClick) {
    if (mode === "edit" || (mode === "view" && url !== "#"))
        handleClick();
};
