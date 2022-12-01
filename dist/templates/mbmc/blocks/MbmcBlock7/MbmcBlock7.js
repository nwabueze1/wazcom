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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMbmcBlock7Styles } from "./styles";
import clx from "classnames";
import { useEffect, useMemo, useState } from "react";
import { LazyImage } from "../../../../core";
import { GET_INSTAGRAM_IMAGES } from "./graphql";
import { createApolloClient } from "../../../../helpers/graphQL";
import { useQuery } from "@apollo/client";
export var MbmcBlock7 = function (_a) {
    var heading = _a.heading, description = _a.description, _b = _a.images, images = _b === void 0 ? [] : _b, services = _a.services, integratedService = _a.integratedService, site_uuid = _a.site_uuid;
    var classes = useMbmcBlock7Styles();
    var client = useMemo(function () { return createApolloClient(services ? services[integratedService] : ""); }, []);
    var _c = useQuery(GET_INSTAGRAM_IMAGES, {
        client: client,
        variables: {
            uuid: site_uuid,
            platform: "Instagram",
            sociable_type: "site",
        },
    }), data = _c.data, loading = _c.loading;
    var _d = __read(useState([]), 2), instagramImages = _d[0], setInstagramImages = _d[1];
    useEffect(function () {
        if (data) {
            setInstagramImages(data.getInstagramImages.images);
        }
    }, [data]);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.headerContent }, { children: [_jsx("h3", __assign({ className: classes.headerTitle }, { children: heading }), void 0), _jsx("p", __assign({ className: classes.headerDescription }, { children: description }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.mobileCardContainer }, { children: !loading ? (instagramImages.length > 0 ? (instagramImages.map(function (image, idx) { return (_jsx(LazyImage, { src: image, className: clx(classes.imageContainer) }, idx)); })) : (images.map(function (image, idx) { return (_jsx(LazyImage, { src: image, className: clx(classes.imageContainer) }, idx)); }))) : (_jsx(_Fragment, {}, void 0)) }), void 0)] }), void 0));
};
