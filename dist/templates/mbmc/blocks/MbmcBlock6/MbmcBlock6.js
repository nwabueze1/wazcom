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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useMbmcBlock6Styles } from "./styles";
import { GET_MENU_BY_UUID } from "./graphql";
import { MbmcCard } from "templates/mbmc/components/MbmcCard";
export var MbmcBlock6 = function (_a) {
    var heading = _a.heading, description = _a.description, client = _a.client, menu_uuid = _a.menu_uuid;
    var classes = useMbmcBlock6Styles();
    var _b = __read(useState([]), 2), categories = _b[0], setCategories = _b[1];
    var _c = useQuery(GET_MENU_BY_UUID, {
        client: client,
        variables: { uuid: menu_uuid },
    }), data = _c.data, error = _c.error;
    useEffect(function () {
        var e_1, _a;
        if (data) {
            var activeMenuCategories = data.menu.activeMenuCategories;
            var parsedCategories = [];
            try {
                for (var activeMenuCategories_1 = __values(activeMenuCategories), activeMenuCategories_1_1 = activeMenuCategories_1.next(); !activeMenuCategories_1_1.done; activeMenuCategories_1_1 = activeMenuCategories_1.next()) {
                    var category = activeMenuCategories_1_1.value;
                    var parsedCategory = {
                        heading: category["title"],
                        image: category["menuItems"][0]["image_url"],
                        ctas: [{ text: "Order now", size: "sm" }],
                    };
                    parsedCategories.push(parsedCategory);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (activeMenuCategories_1_1 && !activeMenuCategories_1_1.done && (_a = activeMenuCategories_1.return)) _a.call(activeMenuCategories_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            setCategories(parsedCategories);
        }
    }, [data, error]);
    var displayCategories = function () {
        return categories.map(function (category, index) { return (_jsx(MbmcCard, __assign({}, category, { scrollableParent: true }), index)); });
    };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.block6Container }, { children: [_jsxs("div", __assign({ className: classes.block6Content }, { children: [_jsx("h3", __assign({ className: classes.block6Title }, { children: heading }), void 0), _jsx("p", __assign({ className: classes.block6Description }, { children: description }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.block6ScrollContainer }, { children: displayCategories() }), void 0)] }), void 0) }), void 0));
};
