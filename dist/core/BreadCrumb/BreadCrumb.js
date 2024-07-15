import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { MdNavigateNext as NavigateNextIcon } from "react-icons/md";
import clx from "classnames";
import { BreadCrumbStyles } from "./styles";
export var BreadCrumb = function (_a) {
    var className = _a.className, crumbs = _a.crumbs, handleClick = _a.handleClick;
    var classes = BreadCrumbStyles();
    return (_jsx("div", { className: clx(className, classes.root), children: crumbs.map(function (crumb, index) {
            return (_jsx(Breadcrumbs, { separator: _jsx(NavigateNextIcon, { fontSize: "small" }), "aria-label": "breadcrumb", children: _jsxs("p", { color: "inherit", onClick: function () {
                        handleClick(crumb.path);
                    }, className: clx(classes.link, index === crumbs.length - 1 && classes.lastCrumb), children: [crumb.label, index !== crumbs.length - 1 && (_jsx(NavigateNextIcon, { className: classes.navIcon, fontSize: "small" }))] }) }, index));
        }) }));
};
