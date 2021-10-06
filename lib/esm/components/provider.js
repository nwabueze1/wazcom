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
import { createContext, useState } from "react";
import Cookies from "universal-cookie";
import { Spinner } from "./Common/Spinner/Spinner";
var load = false;
var initial = {
    site: "",
    user: {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        email_verified_at: false,
        avatar: "",
    },
    setSite: function (site_id) {
        initial.site = site_id;
    },
    changeUser: function (user) {
        initial.user = user;
    },
    changeLoading: function (loading) {
        load = loading;
    },
};
export var AppStateContext = createContext(initial);
function AppStateProvider(_a) {
    var _b;
    var children = _a.children;
    // app state
    var cookies = new Cookies();
    var _c = useState(cookies.get("site_id")), site = _c[0], setSite = _c[1];
    var userFromCookie = (_b = cookies.get("user")) !== null && _b !== void 0 ? _b : {};
    var _d = useState(userFromCookie), user = _d[0], setUser = _d[1];
    var _e = useState(load), loading = _e[0], setLoading = _e[1];
    return (_jsxs(AppStateContext.Provider, __assign({ value: {
            site: site,
            user: user,
            setSite: function (site_id) {
                setSite(site_id);
                cookies.set("site_id", site_id, {
                    path: "/",
                });
            },
            changeUser: function (user) {
                setUser(user);
            },
            changeLoading: function (loading) {
                setLoading(loading);
            },
        } }, { children: [children, _jsx(Spinner, { opacity: loading ? 100 : 0 }, void 0)] }), void 0));
}
export default AppStateProvider;
