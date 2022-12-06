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
import { handleElementClick } from "../../utilities";
export var MbmcBlock7 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, _c = _a.activeElement, activeElement = _c === void 0 ? "" : _c, handleClick = _a.handleClick, index = _a.index, heading = _a.heading, description = _a.description, _d = _a.images, images = _d === void 0 ? [] : _d, services = _a.services, integratedService = _a.integratedService, site_uuid = _a.site_uuid;
    var classes = useMbmcBlock7Styles();
    var client = useMemo(function () { return createApolloClient(services ? services[integratedService] : ""); }, []);
    var _e = useQuery(GET_INSTAGRAM_IMAGES, {
        client: client,
        variables: {
            uuid: site_uuid,
            platform: "Instagram",
            sociable_type: "site",
        },
    }), data = _e.data, loading = _e.loading;
    var _f = __read(useState([]), 2), instagramImages = _f[0], setInstagramImages = _f[1];
    useEffect(function () {
        if (data) {
            setInstagramImages(function () {
                var images = data.getInstagramImages.images;
                return images.filter(function (image) {
                    var imageFileTypes = ["jpeg", "jpg", "gif", "png"];
                    var imageUrl = image.split("?")[0];
                    var ext = imageUrl.substring(imageUrl.lastIndexOf(".") + 1);
                    return imageFileTypes.includes(ext);
                });
            });
        }
    }, [data]);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.headerContent }, { children: [_jsx("h3", __assign({ className: clx(classes.headerTitle, activeElement === "".concat(String(index), ".heading") && classes.block7ActiveElement), onClick: function () {
                            return handleElementClick(mode, "".concat(String(index), ".heading"), handleClick);
                        } }, { children: heading }), void 0), _jsx("p", __assign({ className: clx(classes.headerDescription, activeElement === "".concat(String(index), ".description") && classes.block7ActiveElement), onClick: function () {
                            return handleElementClick(mode, "".concat(String(index), ".description"), handleClick);
                        } }, { children: description }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.mobileCardContainer }, { children: !loading ? (instagramImages.length > 0 ? (instagramImages
                    .slice(0, 9)
                    .map(function (image, idx) { return (_jsx(LazyImage, { src: image, mode: mode, className: clx(classes.imageContainer) }, idx)); })) : (images.map(function (image, idx) { return (_jsx(LazyImage, { src: image, className: clx(classes.imageContainer) }, idx)); }))) : (_jsx(_Fragment, {}, void 0)) }), void 0)] }), void 0));
};
