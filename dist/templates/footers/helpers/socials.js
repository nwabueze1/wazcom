import { jsx as _jsx } from "react/jsx-runtime";
import { clickAction } from "./anchor";
export var displaySocials = function (mode, socialIcons, socials, classes, activeElement, handleClick) {
    return (socials !== null && socials !== void 0 ? socials : []).map(function (_a, index) {
        var type = _a.type, url = _a.url;
        var socialId = "footer_socials." + String(index);
        if (mode === "edit")
            return (_jsx("div", { onClick: function (e) {
                    e.stopPropagation();
                    clickAction(url, mode, function () {
                        handleClick(mode === "edit" ? socialId : url);
                    });
                }, className: activeElement === socialId && classes.activeElement, children: socialIcons[type] }, index));
        return (_jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", children: socialIcons[type] }, index));
    });
};
