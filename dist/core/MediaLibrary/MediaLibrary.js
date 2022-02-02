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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLazyQuery } from "@apollo/client";
import { Grow } from "@mui/material";
import clx from "classnames";
import { Button } from "../Button";
import { last } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Loader } from "../Loader/Loader";
import { GET_S3_IMAGES } from "./graphQL";
import { useMediaLibraryStyles } from "./styles";
import { Uploader } from "./Uploader";
var split = function (array, count) {
    var collection = [];
    array.map(function (item, index) {
        var _a;
        var row = (_a = collection[index % count]) !== null && _a !== void 0 ? _a : [];
        collection[index % count] = __spreadArray(__spreadArray([], row, true), [item], false);
    });
    return collection;
};
export var MediaLibrary = function (_a) {
    var className = _a.className;
    var fileRef = useRef();
    var classes = useMediaLibraryStyles();
    var _b = useState(), images = _b[0], setImages = _b[1];
    var _c = useLazyQuery(GET_S3_IMAGES, {
        fetchPolicy: "network-only",
    }), getS3Images = _c[0], _d = _c[1], data = _d.data, loading = _d.loading;
    useEffect(function () {
        getS3Images({ variables: { count: 9 } });
    }, []);
    useEffect(function () {
        if (data === null || data === void 0 ? void 0 : data.getS3Images) {
            if (!images) {
                setImages(data === null || data === void 0 ? void 0 : data.getS3Images);
            }
            else {
                setImages(__spreadArray(__spreadArray([], images, true), data === null || data === void 0 ? void 0 : data.getS3Images, true));
            }
        }
    }, [data]);
    var listInnerRef = useRef();
    var onScroll = useCallback(function () {
        var _a;
        if (listInnerRef.current) {
            var _b = listInnerRef.current, scrollTop = _b.scrollTop, scrollHeight = _b.scrollHeight, clientHeight = _b.clientHeight;
            if (scrollTop + clientHeight === scrollHeight && !loading) {
                getS3Images({
                    variables: { count: 12, startAfter: (_a = last(images)) === null || _a === void 0 ? void 0 : _a.path },
                });
            }
        }
    }, [images, loading]);
    var handleFileSelect = useCallback(function () {
        var fileInput = fileRef.current;
        if (fileInput) {
            fileInput.click();
        }
    }, []);
    return (_jsx("div", __assign({ className: clx(classes.root, className) }, { children: _jsxs("div", __assign({ className: classes.library }, { children: [_jsx(Uploader, { ref: fileRef }, void 0), _jsx("div", __assign({ className: classes.actions }, { children: _jsx(Button, __assign({ color: "primary", startIcon: _jsx(IoCloudUploadOutline, {}, void 0), onClick: handleFileSelect }, { children: "Upload Image" }), void 0) }), void 0), _jsx("div", __assign({ className: classes.collection, onScroll: function () { return onScroll(); }, ref: listInnerRef }, { children: images &&
                        split(images, 3).map(function (_, columnIndex) {
                            return (_jsx("div", __assign({ className: classes.column }, { children: _.map(function (_a, index) {
                                    var path = _a.path;
                                    return (_jsx(Grow, __assign({ in: true }, { children: _jsx("div", __assign({ className: classes.thumbnail }, { children: _jsx("img", { src: path, className: classes.image }, void 0) }), void 0) }), index));
                                }) }), columnIndex));
                        }) }), void 0), images && loading && _jsx(Loader, { className: classes.loader }, void 0)] }), void 0) }), void 0));
};
