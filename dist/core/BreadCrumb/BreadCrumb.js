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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import clx from "classnames";
import { BreadCrumbStyles } from "./styles";
export var BreadCrumb = function (_a) {
    var className = _a.className, crumbs = _a.crumbs, handleClick = _a.handleClick;
    var classes = BreadCrumbStyles();
    return (_jsx("div", __assign({ className: clx(className, classes.root) }, { children: crumbs.map(function (crumb, index) {
            return (_jsx(Breadcrumbs, __assign({ separator: _jsx(NavigateNextIcon, { fontSize: "small" }, void 0), "aria-label": "breadcrumb" }, { children: _jsxs("p", __assign({ color: "inherit", onClick: function () {
                        handleClick(crumb.path);
                    }, className: clx(classes.link, index === crumbs.length - 1 && classes.lastCrumb) }, { children: [crumb.label, index !== crumbs.length - 1 && (_jsx(NavigateNextIcon, { className: classes.navIcon, fontSize: "small" }, void 0))] }), void 0) }), index));
        }) }), void 0));
};
