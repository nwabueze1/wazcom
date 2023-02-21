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
import { useEffect, useState, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useMbmcBlock6Styles } from "./styles";
import { GET_MENU_BY_UUID } from "./graphql";
import { MbmcCard } from "../../../../templates/mbmc/components/MbmcCard";
import clx from "classnames";
import { handleElementClick } from "../../utilities";
import { createApolloClient } from "../../../../helpers/graphQL";
export var MbmcBlock6 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, activeElement = _a.activeElement, handleClick = _a.handleClick, services = _a.services, integratedService = _a.integratedService, index = _a.index, heading = _a.heading, description = _a.description, menu_uuid = _a.menu_uuid;
    var classes = useMbmcBlock6Styles();
    var _c = __read(useState([]), 2), categories = _c[0], setCategories = _c[1];
    var client = useMemo(function () { return createApolloClient(services ? services[integratedService] : ""); }, []);
    var _d = useQuery(GET_MENU_BY_UUID, {
        client: client,
        variables: { uuid: menu_uuid },
    }), data = _d.data, error = _d.error;
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
                    if (activeMenuCategories_1_1 && !activeMenuCategories_1_1.done && (_a = activeMenuCategories_1.return)) _a.call(activeMenuCategories_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            setCategories(parsedCategories);
        }
        if (error) {
            console.log(error);
        }
    }, [data, error]);
    var displayCategories = function () {
        return categories.map(function (category, index) { return (_jsx(MbmcCard, __assign({}, category, { mode: mode, handleClick: handleClick }), index)); });
    };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.block6Container }, { children: [_jsxs("div", __assign({ className: classes.block6Content }, { children: [_jsx("h3", __assign({ className: clx(classes.block6Heading, activeElement === "".concat(String(index), ".heading") &&
                                classes.block6ActiveElement), onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".heading"), handleClick);
                            } }, { children: heading })), _jsx("p", __assign({ className: clx(classes.block6Description, activeElement === "".concat(String(index), ".description") &&
                                classes.block6ActiveElement), onClick: function () {
                                return handleElementClick(mode, "".concat(String(index), ".description"), handleClick);
                            } }, { children: description }))] })), _jsx("div", __assign({ className: clx(classes.block6ScrollContainer, activeElement === "".concat(String(index), ".menu_uuid") &&
                        classes.block6ActiveElement), onClick: function () {
                        return handleElementClick(mode, "".concat(String(index), ".menu_uuid"), handleClick);
                    } }, { children: displayCategories() }))] })) })));
};
