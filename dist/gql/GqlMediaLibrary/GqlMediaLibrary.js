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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Loader } from "../../core";
import { TextInput } from "../../io";
import clx from "classnames";
import { useGetInstagramImages, useGetLibraryImages, useGetPexelsImages, useGetUnsplashImages, } from "../GqlMediaLibrarySelector/hooks/get";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { DeleteMedia, EditMedia } from "./components";
import { AddMedia } from "./components/AddMedia/AddMedia";
import { Instagram } from "./components/Instagram";
import { Layout } from "./components/Layout/Layout";
import { layoutData } from "./components/Layout/data";
import { medialibraryTabs, selectorTabs } from "./data";
import { getUniqueImages, mutateMedia, useDisplayEmptyMediaLibrary, useDisplayImages, useFileSelect, useMediaUpload, useOnScroll, useUpdateMediaLibrary, } from "./hooks";
import { useMediaLibraryStyles } from "./styles";
import { useIntegrateInstagramAccount } from "../GqlMediaLibrarySelector/hooks/connect";
import { validateImg } from "../../helpers/imageValidator";
import { notify, getCodeFromUrl } from "../../helpers";
import { GqlImageCropper } from "../GqlImageCropper";
export var GqlMediaLibrary = function (_a) {
    var className = _a.className, config = _a.config, onChange = _a.onChange, _b = _a.name, name = _b === void 0 ? "image" : _b, handleClose = _a.handleClose, _c = _a.isSelector, isSelector = _c === void 0 ? false : _c, showAddMedia = _a.showAddMedia, header = _a.header, library_uuid = _a.library_uuid, _d = _a.imageServiceDomain, imageServiceDomain = _d === void 0 ? "img.wazobia.tech" : _d, onSelect = _a.onSelect;
    var client = config.client, upload = config.upload, update = config.update, remove = config.remove, query = config.query, unsplash = config.unsplash, instagram = config.instagram, pexels = config.pexels;
    var refs = { fileRef: useRef(), listInnerRef: useRef() };
    var handleFileSelect = useFileSelect();
    var handleOnScroll = useOnScroll();
    var handleDisplayImages = useDisplayImages();
    var handleMediaUpload = useMediaUpload();
    var handleUpdateMediaLibrary = useUpdateMediaLibrary();
    var handleEmptymediaLibrary = useDisplayEmptyMediaLibrary();
    var classes = useMediaLibraryStyles();
    var _e = __read(useState({ currentPage: 1, lastPage: 2, pexelsPage: 0, unsplashPage: 0 }), 2), paginatorInfo = _e[0], setPaginatorInfo = _e[1];
    var _f = __read(useState({
        media: false,
        mutate: false,
    }), 2), loading = _f[0], setLoading = _f[1];
    var _g = __read(useState({ type: "" }), 2), activeMedia = _g[0], setActiveMedia = _g[1];
    var _h = __read(useState(false), 2), open = _h[0], setOpen = _h[1];
    var _j = __read(useState([]), 2), displayedImages = _j[0], setDisplayedImages = _j[1];
    var _k = __read(useState(1), 2), activeLayout = _k[0], setActiveLayout = _k[1];
    var _l = __read(useState({
        selectorTab: 0,
        mediaTab: 0,
        sort: 0,
    }), 2), activeTab = _l[0], setActiveTab = _l[1];
    var _m = __read(useState(), 2), libraryImages = _m[0], setLibraryImages = _m[1];
    var _o = __read(useState(), 2), splash = _o[0], setUnsplash = _o[1];
    var _p = __read(useState(), 2), instagramImages = _p[0], setInstagramImages = _p[1];
    var _q = __read(useState(), 2), pexelsImages = _q[0], setPexelsImages = _q[1];
    var _r = __read(useState(""), 2), search = _r[0], setSearch = _r[1];
    var _s = __read(useState(false), 2), showCropper = _s[0], setShowCropper = _s[1];
    var _t = __read(useState({
        caption: "",
        name: "",
        description: "",
        alternative_text: "",
        src: "",
    }), 2), imageUrl = _t[0], setImageUrl = _t[1];
    var _u = __read(useState(), 2), fileMedia = _u[0], setFileMedia = _u[1];
    var getLibraryImages = useGetLibraryImages();
    var getUnsplashImages = useGetUnsplashImages();
    var getPexelsImages = useGetPexelsImages();
    var getInstagramImages = useGetInstagramImages();
    var integrateInstagram = useIntegrateInstagramAccount();
    var imageSignal;
    useEffect(function () {
        var instagramCode = getCodeFromUrl();
        if (instagramCode) {
            integrateInstagram(client, instagram.integrate, {
                code: instagramCode,
                library_uuid: library_uuid,
            });
        }
        var params = new URLSearchParams(window.location.search);
        var tab = params.get("instagram_integrated");
        if (tab)
            setActiveTab(__assign(__assign({}, activeTab), { mediaTab: 2 }));
    }, []);
    useEffect(function () {
        setDisplayedImages([]);
        if (showAddMedia) {
            showAddMedia({
                isSelector: isSelector,
                mediaTab: activeTab.mediaTab,
                fileRef: refs.fileRef,
                handleMediaAction: handleMediaAction,
                addBtn: classes.addBtn,
            });
        }
        fetchImages();
    }, [activeTab.mediaTab, activeTab.selectorTab]);
    useEffect(function () {
        if (activeMedia.index && activeMedia.index > 0)
            fetchImages(true);
    }, [activeMedia.index]);
    useEffect(function () {
        if (!search) {
            if (activeTab.mediaTab ||
                activeTab.selectorTab === 1 ||
                activeTab.mediaTab === 1 ||
                activeTab.selectorTab) {
                splash && setUnsplash(undefined);
            }
            if (activeTab.mediaTab ||
                activeTab.selectorTab === 3 ||
                activeTab.mediaTab === 3 ||
                activeTab.selectorTab) {
                pexelsImages && setPexelsImages(undefined);
            }
            return;
        }
        var getSearchData = setTimeout(function () {
            fetchImages();
        }, 1000);
        return function () { return clearTimeout(getSearchData); };
    }, [search]);
    var fetchImages = function (isPagination) {
        if (isPagination === void 0) { isPagination = false; }
        var type;
        if (activeTab.mediaTab === 0 || activeTab.selectorTab === 0)
            type = "library";
        if (activeTab.mediaTab === 1 || activeTab.selectorTab === 1)
            type = "unsplash";
        if (activeTab.mediaTab === 2 || activeTab.selectorTab === 2)
            type = "instagram";
        if (activeTab.mediaTab === 3 || activeTab.selectorTab === 3)
            type = "pexels";
        var loadImages = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getImages(type, isPagination)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        loadImages();
    };
    var getImages = function (type, isPagination) {
        if (isPagination === void 0) { isPagination = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            var setState, images, callback, onError;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        switch (type) {
                            case "library":
                                setState = setLibraryImages;
                                images = libraryImages;
                                break;
                            case "unsplash":
                                setState = setUnsplash;
                                images = splash;
                                break;
                            case "pexels":
                                setState = setPexelsImages;
                                images = pexelsImages;
                                break;
                            case "instagram":
                                setState = setInstagramImages;
                                images = instagramImages;
                                break;
                            default:
                                setState = setLibraryImages;
                                images = libraryImages;
                        }
                        if (type === "instagram" && images === null)
                            return [2 /*return*/];
                        else if (images && !isPagination && !search) {
                            setDisplayedImages(function () { return getUniqueImages(images); });
                            return [2 /*return*/];
                        }
                        if (type === "library" && (paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.currentPage) === (paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.lastPage))
                            return [2 /*return*/];
                        if (type === "instagram" && isPagination)
                            return [2 /*return*/];
                        setLoading(__assign(__assign({}, loading), { media: true }));
                        imageSignal = (Math.random() * 5000).toString(2);
                        localStorage.setItem("imageSignal", String(imageSignal));
                        callback = function (response) {
                            var callbackImageSignal = imageSignal;
                            if (localStorage.getItem("imageSignal") !== callbackImageSignal)
                                return;
                            var fetchedImages = response.images, fetchedPaginatorInfo = response.paginatorInfo;
                            var allImages = isPagination ? __spreadArray(__spreadArray([], __read((images !== null && images !== void 0 ? images : [])), false), __read(fetchedImages), false) : __spreadArray([], __read(fetchedImages), false);
                            setState(getUniqueImages(__spreadArray([], __read(allImages), false)));
                            setDisplayedImages(getUniqueImages(__spreadArray([], __read(allImages), false)));
                            if (type === "library")
                                setPaginatorInfo(__assign(__assign({}, paginatorInfo), fetchedPaginatorInfo));
                            else if (type === "unsplash")
                                setPaginatorInfo(__assign(__assign({}, paginatorInfo), { unsplashPage: isPagination ? (paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.unsplashPage) + 1 : 1 }));
                            else if (type === "pexels")
                                setPaginatorInfo(__assign(__assign({}, paginatorInfo), { pexelsPage: isPagination ? (paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.pexelsPage) + 1 : 1 }));
                            setLoading(__assign(__assign({}, loading), { media: false }));
                        };
                        onError = function () {
                            setLoading(__assign(__assign({}, loading), { media: false }));
                        };
                        if (!(type === "library")) return [3 /*break*/, 2];
                        return [4 /*yield*/, getLibraryImages(client, query.name, isPagination
                                ? { page: ((_a = paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.currentPage) !== null && _a !== void 0 ? _a : 0) + 1, count: 10, library_uuid: library_uuid }
                                : { count: 10, library_uuid: library_uuid }, callback, onError)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        if (!(type === "unsplash")) return [3 /*break*/, 4];
                        return [4 /*yield*/, getUnsplashImages(client, unsplash.name, isPagination
                                ? { page: ((_b = paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.unsplashPage) !== null && _b !== void 0 ? _b : 0) + 1, limit: 10, search: search }
                                : { limit: 10, search: search }, callback, onError)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        if (!(type === "pexels")) return [3 /*break*/, 6];
                        return [4 /*yield*/, getPexelsImages(client, pexels.name, isPagination
                                ? { page: ((_c = paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.pexelsPage) !== null && _c !== void 0 ? _c : 0) + 1, limit: 10, search: search }
                                : { limit: 10, search: search }, callback, onError)];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6:
                        if (!(type === "instagram")) return [3 /*break*/, 8];
                        return [4 /*yield*/, getInstagramImages(client, instagram.name, library_uuid, callback, function () {
                                onError();
                                setInstagramImages(null);
                            })];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    var renderPage = function () {
        if (loading.media && !activeMedia.index)
            return displayMediaLibraryImages();
        if (activeTab.mediaTab === 2 || activeTab.selectorTab === 2)
            return (_jsx(Instagram, { connected: Boolean(instagramImages), displayImages: displayMediaLibraryImages, onChange: onChange, library_uuid: library_uuid, client: client, mutation: instagram.connect }));
        return displayMediaLibraryImages();
    };
    var updateMediaLibrary = useCallback(function (image, type, variables) {
        if (type === void 0) { type = "add"; }
        handleUpdateMediaLibrary(image, displayedImages, function (images) {
            setDisplayedImages(images);
            setLibraryImages(images);
        }, function (index) {
            setActiveMedia(__assign(__assign({}, activeMedia), { index: index }));
        }, type, variables);
        handleMediaAction("", undefined);
    }, [activeMedia]);
    var handleFileChange = function (event) {
        if (!event.target.files || event.target.files === 0)
            return;
        var file = event.target.files[0];
        if (!validateImg(file, 5000000))
            return;
        handleMediaAction("add", file);
        setActiveTab({ selectorTab: 0 });
    };
    var handleMediaAction = function (type, media) {
        if (type === "add" || type === "edit") {
            var listInnerRef = refs.listInnerRef;
            if (listInnerRef.current)
                listInnerRef.current.scrollTop = 0;
        }
        displayImage(media);
        if (media instanceof File)
            setFileMedia(media);
    };
    var handleSearchChange = useCallback(function (data) {
        if (activeTab.mediaTab === 1 ||
            activeTab.selectorTab === 1 ||
            activeTab.mediaTab === 3 ||
            activeTab.selectorTab === 3) {
            return setSearch(data.value);
        }
    }, [displayedImages, activeTab.mediaTab, activeTab.selectorTab]);
    var handleMediaAdd = useCallback(function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!validateImg(activeMedia.media, 5000000))
                        return [2 /*return*/];
                    return [4 /*yield*/, handleMediaUpload(client, upload === null || upload === void 0 ? void 0 : upload.name, __assign(__assign({}, variables), { image: activeMedia.media, library_uuid: library_uuid }), setLoading, function (image) {
                            updateMediaLibrary(image, "add");
                            notify("success", "Image added successfully");
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [activeMedia, loading]);
    var handleMediaUpdate = useCallback(function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var media;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!variables.uuid) {
                        return [2 /*return*/, handleMediaAdd(__assign({}, variables))];
                    }
                    media = activeMedia.media;
                    setLoading(__assign(__assign({}, loading), { mutate: true }));
                    return [4 /*yield*/, mutateMedia(client, update === null || update === void 0 ? void 0 : update.name, media, function () {
                            updateMediaLibrary(media, "update", variables);
                            handleMediaAction("", undefined);
                            notify("success", "Image updated successfully");
                        }, variables)];
                case 1:
                    _a.sent();
                    setLoading(__assign(__assign({}, loading), { mutate: false }));
                    return [2 /*return*/];
            }
        });
    }); }, [activeMedia]);
    var handleMediaDelete = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var media;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    media = activeMedia.media;
                    setLoading(__assign(__assign({}, loading), { mutate: true }));
                    return [4 /*yield*/, mutateMedia(client, remove === null || remove === void 0 ? void 0 : remove.name, media, function () {
                            updateMediaLibrary(media, "delete");
                            handleMediaAction("", undefined);
                            notify("success", "Image deleted successfully");
                        })];
                case 1:
                    _a.sent();
                    setLoading(__assign(__assign({}, loading), { mutate: false }));
                    return [2 /*return*/];
            }
        });
    }); }, [activeMedia, loading]);
    var handleFileSelection = function () {
        handleFileSelect(refs.fileRef);
        setOpen(false);
    };
    var displayLayoutData = function () {
        return layoutData.map(function (count, index) { return (_jsx(Layout, { count: count, onclick: function () { return setActiveLayout(index); }, className: clx(activeLayout === index ? classes.activeLayout : ""), active: Boolean(activeLayout === index) }, index)); });
    };
    var displaySelectorTabs = function () {
        return selectorTabs.map(function (tab, index) { return (_jsx("p", __assign({ className: clx(classes.selectorTab, activeTab.selectorTab !== index && classes.inActive), onClick: function () {
                setSearch("");
                setActiveMedia(__assign(__assign({}, activeMedia), { index: undefined }));
                setActiveTab(__assign(__assign({}, activeTab), { selectorTab: index }));
            } }, { children: tab }), index)); });
    };
    var displayMediaTabs = function () {
        return medialibraryTabs.map(function (tab, index) {
            var isActive = activeTab.mediaTab === index;
            return (_jsxs("div", __assign({ className: clx(classes.mediaTab, isActive && "active"), onClick: function () {
                    setSearch("");
                    setActiveMedia(__assign(__assign({}, activeMedia), { index: undefined }));
                    setActiveTab(__assign(__assign({}, activeTab), { mediaTab: index }));
                } }, { children: [tab.icon && (_jsx("p", __assign({ className: clx(classes.mediaTabIcon, isActive && "active") }, { children: tab.icon }))), _jsx("p", __assign({ className: clx(classes.tabName, isActive && "active") }, { children: tab.name }))] }), index));
        });
    };
    var displayMediaLibraryImages = function () { return (_jsx("div", __assign({ className: clx(classes.wrapper), ref: refs.listInnerRef, onScroll: function () {
            handleOnScroll(refs.listInnerRef, function (index) {
                setActiveMedia(__assign(__assign({}, activeMedia), { index: index }));
            });
        } }, { children: _jsxs(_Fragment, { children: [_jsx("input", { name: "image_url", accept: "image/*", hidden: true, type: "file", ref: refs.fileRef, onChange: handleFileChange }), isSelector && (_jsxs("div", __assign({ className: classes.selectorSearchBox }, { children: [[1, 3].includes(activeTab.selectorTab) && (_jsx(TextInput, { name: "search", type: "text", placeholder: "Search images here", value: search, onChange: handleSearchChange, className: classes.selectorSearch })), activeTab.selectorTab === 0 && (_jsx(AddMedia, { handleFilesSelection: handleFileSelection, handleOpenMedia: open, handleCloseMedia: setOpen, handleMediaAction: handleMediaAction, buttonText: "Upload" }))] }))), _jsxs("div", __assign({ className: clx(activeTab.selectorTab === 0 && classes.dialogueView) }, { children: [_jsxs("div", __assign({ className: clx(classes.collection, activeTab.selectorTab === 0 && classes.uploadViewWidth) }, { children: [loading.media && !activeMedia.index ? (_jsx(Loader, {})) : (_jsxs(_Fragment, { children: [(activeMedia.type === "add" || activeMedia.type === "edit") && (_jsx(EditMedia, { loading: loading.mutate, handleEdit: function (variables) {
                                                handleMediaUpdate(variables);
                                            }, handleClose: function () {
                                                handleMediaAction("", undefined);
                                            }, image: activeMedia.media })), displayedImages.length > 0
                                            ? handleDisplayImages(displayedImages, function (image) {
                                                onSelect === null || onSelect === void 0 ? void 0 : onSelect({
                                                    name: name !== null && name !== void 0 ? name : "",
                                                    value: image,
                                                });
                                            }, handleMediaAction, isSelector ? false : activeTab.mediaTab === 0, activeLayout)
                                            : handleEmptymediaLibrary(handleFileSelection, open, setOpen, handleMediaAction, activeTab.mediaTab > 0 || activeTab.selectorTab > 0
                                                ? "Search Results"
                                                : undefined, activeTab.mediaTab > 0 || activeTab.selectorTab > 0
                                                ? search
                                                    ? "There are no results for " + "\"".concat(search, "\"")
                                                    : "There are no search results"
                                                : undefined)] })), activeTab.selectorTab === 1 && loading.media && !activeMedia.index && (_jsxs(_Fragment, { children: [(activeMedia.type === "add" || activeMedia.type === "edit") && (_jsx(EditMedia, { loading: loading.mutate, handleEdit: function (variables) {
                                                handleMediaUpdate(variables);
                                            }, handleClose: function () {
                                                handleMediaAction("", undefined);
                                            }, image: activeMedia.media })), displayedImages.length > 0 &&
                                            handleDisplayImages(displayedImages, function (image) {
                                                onChange === null || onChange === void 0 ? void 0 : onChange({
                                                    name: name !== null && name !== void 0 ? name : "",
                                                    value: image,
                                                });
                                            }, handleMediaAction, isSelector, activeLayout)] }))] })), displayedImages.length > 0 && loading.media && activeMedia.index && (_jsx("div", __assign({ className: classes.loaderParent }, { children: _jsx(Loader, { className: classes.loader }) })))] })), _jsx(DeleteMedia, { display: activeMedia.type === "delete", loading: loading.mutate, media: activeMedia.media, handleClose: function () {
                        handleMediaAction("", undefined);
                    }, handleDelete: handleMediaDelete })] }) }))); };
    var displayMediaLibrary = function () { return (_jsxs("div", __assign({ className: clx(classes.container, className) }, { children: [_jsx("div", __assign({ className: clx(classes.actions, isSelector && classes.viewOnlyActions) }, { children: isSelector ? (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes.tabs }, { children: displaySelectorTabs() })), _jsx("div", __assign({ className: classes.iconContainer }, { children: _jsx(FaTimes, { className: classes.timesIcon, onClick: handleClose }) }))] })) : (_jsx("div", __assign({ className: clx(classes.actionsContainer) }, { children: !isSelector && (_jsxs("div", __assign({ className: clx(classes.selectorContainer, activeTab.mediaTab == 2 && "instagram") }, { children: [activeTab.mediaTab !== 2 && activeTab.mediaTab !== 0 && (_jsx("div", __assign({ className: classes.searchContainer }, { children: _jsx(TextInput, { name: "search", type: "text", placeholder: "Search images here", value: search, onChange: handleSearchChange, className: classes.search, classNames: { textInput: classes.textInput } }) }))), _jsx("div", __assign({ className: clx(classes.layouts, activeTab.mediaTab === 2 && "instagram") }, { children: displayLayoutData() }))] }))) }))) })), renderPage()] }))); };
    var displayImage = function (media) {
        if (!(media instanceof File))
            return media === null || media === void 0 ? void 0 : media.url;
        var reader = new FileReader();
        reader.onload = function () {
            setImageUrl({
                src: reader.result,
                name: media === null || media === void 0 ? void 0 : media.name,
                description: media === null || media === void 0 ? void 0 : media.name,
                alternative_text: media === null || media === void 0 ? void 0 : media.name,
                caption: "",
            });
            setShowCropper(true);
        };
        reader.readAsDataURL(media);
    };
    return (_jsxs("div", __assign({ className: classes.base }, { children: [header && _jsxs("header", __assign({ className: classes.header }, { children: [header, !isSelector && _jsx("div", __assign({ className: clx(classes.mediaTabs) }, { children: displayMediaTabs() }))] })), displayMediaLibrary(), showCropper && imageUrl && (_jsx(GqlImageCropper, { name: name, config: config, open: true, value: {
                    src: imageUrl === null || imageUrl === void 0 ? void 0 : imageUrl.src,
                    name: imageUrl === null || imageUrl === void 0 ? void 0 : imageUrl.name,
                    description: imageUrl === null || imageUrl === void 0 ? void 0 : imageUrl.caption,
                    alternative_text: imageUrl === null || imageUrl === void 0 ? void 0 : imageUrl.alternative_text,
                    caption: imageUrl === null || imageUrl === void 0 ? void 0 : imageUrl.caption,
                }, fileMedia: fileMedia, handleClose: function () {
                    handleClose === null || handleClose === void 0 ? void 0 : handleClose();
                    setShowCropper(false);
                }, onChange: onChange, imageServiceDomain: imageServiceDomain }))] })));
};
