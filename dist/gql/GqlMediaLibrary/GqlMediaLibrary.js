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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { Grow } from "@mui/material";
import clx from "classnames";
import { Button } from "../../core/Button";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Loader } from "../../core/Loader/Loader";
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
export var GqlMediaLibrary = function (_a) {
    var className = _a.className, _b = _a.config, client = _b.client, _c = _b.query, query = _c.name, queryVariables = _c.variables, upload = _b.upload, onChange = _a.onChange, name = _a.name;
    var fileRef = useRef();
    var classes = useMediaLibraryStyles();
    var _d = useState([]), images = _d[0], setImages = _d[1];
    var _e = useState({ currentPage: 1, lastPage: 1 }), paginatorInfo = _e[0], setPaginatorInfo = _e[1];
    var _f = useState(true), loading = _f[0], setLoading = _f[1];
    var _g = useState(false), imageLoading = _g[0], setImageLoading = _g[1];
    var listInnerRef = useRef(null);
    var _h = useState(0), mediaIndex = _h[0], setMediaIndex = _h[1];
    var fetchData = function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.query({
                        query: query,
                        fetchPolicy: "network-only",
                        variables: variables,
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    useEffect(function () {
        fetchData(__assign({}, queryVariables))
            .then(function (res) {
            var _a, _b;
            setLoading(false);
            if (!images) {
                setImages((_a = res.data) === null || _a === void 0 ? void 0 : _a.images.images);
            }
            else {
                setImages(__spreadArray(__spreadArray([], images, true), (_b = res.data) === null || _b === void 0 ? void 0 : _b.images.images, true));
            }
            setPaginatorInfo(res.data.images.paginatorInfo);
        })
            .catch(function () {
            setLoading(false);
        });
    }, []);
    useEffect(function () {
        if (mediaIndex && mediaIndex > 0) {
            var currentPage = paginatorInfo.currentPage, lastPage = paginatorInfo.lastPage;
            if (currentPage !== lastPage) {
                setImageLoading(true);
                fetchData({ page: currentPage + 1, count: queryVariables.count }).then(function (res) {
                    setImages(function (images) { return __spreadArray(__spreadArray([], images, true), res.data.images.images, true); });
                    setImageLoading(false);
                    setPaginatorInfo(res.data.images.paginatorInfo);
                });
            }
        }
    }, [mediaIndex]);
    var selectImage = function (data) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "image", value: data });
    };
    var updateMediaLibrary = function (image) {
        setImages(function (images) { return __spreadArray([image], images, true); });
    };
    var handleFileSelect = useCallback(function () {
        var fileInput = fileRef.current;
        if (fileInput) {
            fileInput.click();
        }
    }, []);
    var onScroll = useCallback(function () {
        if (listInnerRef.current) {
            var _a = listInnerRef.current, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            if (scrollTop + clientHeight === scrollHeight && scrollHeight > 550) {
                setMediaIndex(Math.random() * 5000);
            }
        }
    }, [mediaIndex]);
    return (_jsx("div", __assign({ className: classes.wrapper, ref: listInnerRef, onScroll: function () {
            onScroll();
        } }, { children: _jsx("div", __assign({ className: clx(classes.root, className) }, { children: _jsxs("div", __assign({ className: classes.library }, { children: [_jsx(Uploader, { ref: fileRef, config: __assign({ client: client }, upload), setLoading: setLoading, updateMediaLibrary: updateMediaLibrary }, void 0), _jsx("div", __assign({ className: classes.actions }, { children: _jsx(Button, __assign({ color: "primary", startIcon: _jsx(IoCloudUploadOutline, {}, void 0), onClick: handleFileSelect }, { children: "Upload Image" }), void 0) }), void 0), _jsx("div", __assign({ className: classes.collection }, { children: images.length === 0 || loading ? (_jsx(Loader, {}, void 0)) : (_jsx(_Fragment, { children: images &&
                                split(images, 3).map(function (_, columnIndex) {
                                    return (_jsx("div", __assign({ className: classes.column }, { children: _.map(function (theImage, index) {
                                            return (_jsx(Grow, __assign({ in: true }, { children: _jsx("div", __assign({ className: classes.thumbnail }, { children: _jsx("img", { onClick: function () { return selectImage(theImage); }, src: theImage === null || theImage === void 0 ? void 0 : theImage.url, className: classes.image }, void 0) }), void 0) }), index));
                                        }) }), columnIndex));
                                }) }, void 0)) }), void 0), images.length > 0 && imageLoading && (_jsx("div", __assign({ className: classes.loaderParent }, { children: _jsx(Loader, { className: classes.loader }, void 0) }), void 0))] }), void 0) }), void 0) }), void 0));
};
