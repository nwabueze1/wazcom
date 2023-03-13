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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useMbmcBlock6Styles } from "./styles";
import { MbmcCard } from "../../../../templates/mbmc/components/MbmcCard";
import clx from "classnames";
import { handleElementClick } from "../../utilities";
export var MbmcBlock6 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, activeElement = _a.activeElement, handleClick = _a.handleClick, index = _a.index, heading = _a.heading, description = _a.description;
    var classes = useMbmcBlock6Styles();
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var categories = useMemo(function () {
        var e_1, _a;
        var menu = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu;
        var menuCategories = menu === null || menu === void 0 ? void 0 : menu.menuCategories;
        var parsedCategories = [];
        try {
            for (var menuCategories_1 = __values(menuCategories), menuCategories_1_1 = menuCategories_1.next(); !menuCategories_1_1.done; menuCategories_1_1 = menuCategories_1.next()) {
                var category = menuCategories_1_1.value;
                var parsedCategory = {
                    heading: category === null || category === void 0 ? void 0 : category.title,
                    image: category["menuItems"][0]["image_url"],
                    ctas: [
                        {
                            text: "Order now",
                            size: "sm",
                            url: "/menu?category_uuid=".concat(category.uuid, "#menu"),
                        },
                    ],
                };
                parsedCategories.push(parsedCategory);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (menuCategories_1_1 && !menuCategories_1_1.done && (_a = menuCategories_1.return)) _a.call(menuCategories_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return parsedCategories;
    }, []);
    var displayCategories = function () {
        return categories.map(function (category, index) { return (_jsx(MbmcCard, __assign({}, category, { mode: mode, handleClick: handleClick }), index)); });
    };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.block6Container }, { children: [_jsxs("div", __assign({ className: classes.block6Content }, { children: [_jsx("h3", __assign({ className: clx(classes.block6Heading, activeElement === "".concat(String(index), ".heading") && classes.block6ActiveElement), onClick: function () { return handleElementClick(mode, "".concat(String(index), ".heading"), handleClick); } }, { children: heading })), _jsx("p", __assign({ className: clx(classes.block6Description, activeElement === "".concat(String(index), ".description") && classes.block6ActiveElement), onClick: function () { return handleElementClick(mode, "".concat(String(index), ".description"), handleClick); } }, { children: description }))] })), _jsx("div", __assign({ className: clx(classes.block6ScrollContainer, activeElement === "".concat(String(index), ".menu_uuid") && classes.block6ActiveElement), onClick: function () { return handleElementClick(mode, "".concat(String(index), ".menu_uuid"), handleClick); } }, { children: displayCategories() }))] })) })));
};
