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
import { useCallback, useEffect, useRef, useState } from "react";
import clx from "classnames";
import { Loader } from "../../core/Loader/Loader";
import { useMediaLibraryStyles } from "./styles";
import { EditMedia, DeleteMedia } from "./components";
import { fetchData, mutateMedia, getUniqueImages, useFileSelect, useOnScroll, useDisplayImages, useUpdateMediaLibrary, useMediaUpload, } from "./hooks";
import { FaTimes } from "react-icons/fa";
import { Search, Sort } from "@mui/icons-material";
import { TextInput, RadioButtonInput } from "../../io";
import { Button } from "../../core";
import { AddMedia } from "./components/AddMedia/AddMedia";
import { Layout } from "./components/Layout/Layout";
import { layoutData } from "./components/Layout/data";
import { ClickAwayListener } from "@mui/base";
import { UploadDialogue } from "./components/AddMedia/UploadDialogue";
export var GqlMediaLibrary = function (_a) {
    var className = _a.className, _b = _a.config, client = _b.client, _c = _b.query, query = _c.name, queryVariables = _c.variables, upload = _b.upload, update = _b.update, remove = _b.remove, _d = _b.viewOnly, viewOnly = _d === void 0 ? false : _d, onChange = _a.onChange, name = _a.name, handleClose = _a.handleClose;
    var refs = { fileRef: useRef(), listInnerRef: useRef() };
    var handleFileSelect = useFileSelect();
    var handleOnScroll = useOnScroll();
    var handleDisplayImages = useDisplayImages();
    var handleMediaUpload = useMediaUpload();
    var handleUpdateMediaLibrary = useUpdateMediaLibrary();
    var classes = useMediaLibraryStyles();
    var _e = __read(useState([]), 2), images = _e[0], setImages = _e[1];
    var _f = __read(useState({ currentPage: 1, lastPage: 1 }), 2), paginatorInfo = _f[0], setPaginatorInfo = _f[1];
    var _g = __read(useState({
        media: false,
        mutate: false,
    }), 2), loading = _g[0], setLoading = _g[1];
    var _h = __read(useState({ type: "" }), 2), activeMedia = _h[0], setActiveMedia = _h[1];
    var _j = __read(useState(false), 2), open = _j[0], setOpen = _j[1];
    var _k = __read(useState(images), 2), displayedImages = _k[0], setDisplayedImages = _k[1];
    var _l = __read(useState(false), 2), showSort = _l[0], setShowSort = _l[1];
    var _m = __read(useState("Newest"), 2), selected = _m[0], setSelected = _m[1];
    var _o = __read(useState(1), 2), activeLayout = _o[0], setActiveLayout = _o[1];
    var _p = __read(useState(1), 2), activeTab = _p[0], setActiveTab = _p[1];
    useEffect(function () {
        setLoading(__assign(__assign({}, loading), { media: true }));
        fetchData(client, query, __assign({}, queryVariables))
            .then(function (res) {
            setLoading(__assign(__assign({}, loading), { media: false }));
            setImages(function (images) {
                return getUniqueImages(__spreadArray(__spreadArray([], __read(images), false), __read(res.data.images.images), false));
            });
            setDisplayedImages(function (images) {
                return getUniqueImages(__spreadArray(__spreadArray([], __read(images), false), __read(res.data.images.images), false));
            });
            setPaginatorInfo(res.data.images.paginatorInfo);
        })
            .catch(function () {
            setLoading(__assign(__assign({}, loading), { media: false }));
        });
    }, []);
    useEffect(function () {
        if (activeMedia.index && activeMedia.index > 0) {
            var currentPage = paginatorInfo.currentPage, lastPage = paginatorInfo.lastPage;
            if (currentPage !== lastPage) {
                setLoading(__assign(__assign({}, loading), { media: true }));
                fetchData(client, query, {
                    page: currentPage + 1,
                    count: queryVariables.count,
                }).then(function (res) {
                    setImages(function (images) {
                        return getUniqueImages(__spreadArray(__spreadArray([], __read(images), false), __read(res.data.images.images), false));
                    });
                    setLoading(__assign(__assign({}, loading), { media: false }));
                    setPaginatorInfo(res.data.images.paginatorInfo);
                });
            }
        }
    }, [activeMedia.index]);
    var handleClickAway = function () {
        setShowSort(false);
    };
    var updateMediaLibrary = useCallback(function (image, type, variables) {
        if (type === void 0) { type = "add"; }
        handleUpdateMediaLibrary(image, images, setImages, function (index) {
            setActiveMedia(__assign(__assign({}, activeMedia), { index: index }));
        }, type, variables);
        handleMediaAction("", undefined);
    }, [images, activeMedia]);
    var handleFileChange = function (event) {
        if (!event.target.files || event.target.files === 0)
            return;
        var file = event.target.files[0];
        handleMediaAction("add", file);
        setActiveTab(1);
    };
    var handleMediaAction = function (type, media) {
        if (type === "add" || type === "edit") {
            var listInnerRef = refs.listInnerRef;
            if (listInnerRef.current)
                listInnerRef.current.scrollTop = 0;
        }
        setActiveMedia({ type: type, media: media });
    };
    var handleSearchChange = useCallback(function (data) {
        var search = data.value;
        var filteredResult = images.filter(function (image) { var _a; return (_a = image.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(search.toLowerCase()); });
        setDisplayedImages(filteredResult);
    }, [displayedImages]);
    var handleMediaAdd = useCallback(function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleMediaUpload(client, upload === null || upload === void 0 ? void 0 : upload.name, __assign(__assign({}, variables), { image: activeMedia.media }), setLoading, function (image) {
                        updateMediaLibrary(image, "add");
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
                    if (!variables.id) {
                        return [2 /*return*/, handleMediaAdd(__assign({}, variables))];
                    }
                    media = activeMedia.media;
                    setLoading(__assign(__assign({}, loading), { mutate: true }));
                    return [4 /*yield*/, mutateMedia(client, update === null || update === void 0 ? void 0 : update.name, media, function () {
                            updateMediaLibrary(media, "update", variables);
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
    var handleChange = function (data) {
        setSelected(data.name);
        if (selected === "Newest") {
            var sortByNewest = images.sort(function (a, b) { return new Date(a.created_at).getTime() - new Date(b.created_at).getTime(); });
            setDisplayedImages(sortByNewest);
            return;
        }
        var sortedByOldest = images.sort(function (a, b) { return new Date(b.created_at).getTime() - new Date(a.created_at).getTime(); });
        setDisplayedImages(sortedByOldest);
    };
    var displayLayoutData = function () {
        return layoutData.map(function (count, index) { return (_jsx(Layout, { count: count, onclick: function () { return setActiveLayout(index); }, className: clx(activeLayout === index ? classes.activeLayout : "") }, index)); });
    };
    var sortType = ["Newest", "Oldest"];
    var displaySortType = function () {
        return sortType.map(function (type, index) { return (_jsxs("p", __assign({ className: classes.sortType }, { children: [_jsx(RadioButtonInput, { name: type, value: selected === type, classNames: { radioButtonInput: classes.radioButton }, onChange: handleChange }), type] }), index)); });
    };
    var tabs = ["Upload Media", "Media Library"];
    var displayTabs = function () {
        return tabs.map(function (tab, index) { return (_jsx("p", __assign({ className: clx(classes.selectorTab, activeTab !== index && classes.inActive), onClick: function () { return setActiveTab(index); } }, { children: tab }), index)); });
    };
    return (_jsx("div", __assign({ className: clx(classes.wrapper, className, viewOnly && classes.wrapperDialog), ref: refs.listInnerRef, onScroll: function () {
            handleOnScroll(refs.listInnerRef, function (index) {
                setActiveMedia(__assign(__assign({}, activeMedia), { index: index }));
            });
        } }, { children: _jsxs(_Fragment, { children: [_jsx("input", { name: "image_url", accept: "image/*", hidden: true, type: "file", ref: refs.fileRef, onChange: handleFileChange }), _jsx("div", __assign({ className: clx(classes.actions, viewOnly && classes.viewOnlyActions) }, { children: viewOnly ? (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: classes.tabs }, { children: displayTabs() })), _jsx("div", __assign({ className: classes.iconContainer }, { children: _jsx(FaTimes, { className: classes.timesIcon, onClick: handleClose }) }))] })) : (_jsxs(_Fragment, { children: [_jsx("p", __assign({ className: classes.tab }, { children: "All Media" })), _jsx(AddMedia, { handleFilesSelection: handleFileSelection, handleOpenMedia: open, handleCloseMedia: setOpen })] })) })), _jsxs("div", __assign({ className: clx(classes.searchParent, activeTab === 0 && classes.dialogueView) }, { children: [_jsxs("div", __assign({ className: clx(classes.actionsContainer, activeTab === 0 && classes.noDisplay) }, { children: [!viewOnly && (_jsx("div", __assign({ className: classes.btnContainer }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: handleClickAway }, { children: _jsxs("div", __assign({ className: classes.filter }, { children: [_jsxs(Button, __assign({ className: classes.button, variant: "outlined", onClick: function () { return setShowSort(!showSort); } }, { children: ["sort", _jsx(Sort, {})] })), _jsxs("div", __assign({ className: clx(classes.sortParent, showSort && classes.showSort) }, { children: [_jsx("p", __assign({ className: classes.sort }, { children: "sort by:" })), displaySortType()] }))] })) })) }))), !viewOnly && _jsx("div", __assign({ className: classes.layouts }, { children: displayLayoutData() })), activeTab !== 0 && (_jsxs("div", __assign({ className: classes.searchContainer }, { children: [_jsx(TextInput, { name: "search", type: "text", placeholder: "Search", onChange: handleSearchChange, className: classes.search }), _jsx(Search, { className: classes.searchIcon })] })))] })), _jsxs("div", __assign({ className: clx(classes.collection, activeTab === 0 && classes.uploadViewWidth) }, { children: [activeTab === 0 && (_jsx(UploadDialogue, { className: classes.dialogue, handleCloseMedia: setOpen, handleFilesSelection: handleFileSelection, showHeader: false, handleMediaAction: handleMediaAction, setActiveTab: setActiveTab })), activeTab === 1 ? (images.length === 0 && loading.media ? (_jsx(Loader, {})) : (_jsxs(_Fragment, { children: [(activeMedia.type === "add" ||
                                            activeMedia.type === "edit") && (_jsx(EditMedia, { loading: loading.mutate, handleEdit: function (variables) {
                                                handleMediaUpdate(variables);
                                            }, handleClose: function () {
                                                handleMediaAction("", undefined);
                                            }, image: activeMedia.media })), images &&
                                            handleDisplayImages(displayedImages, function (image) {
                                                onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: image });
                                            }, handleMediaAction, viewOnly, activeLayout)] }))) : null] })), images.length > 0 && loading.media && (_jsx("div", __assign({ className: classes.loaderParent }, { children: _jsx(Loader, { className: classes.loader }) })))] })), _jsx(DeleteMedia, { display: activeMedia.type === "delete", loading: loading.mutate, media: activeMedia.media, handleClose: function () {
                        handleMediaAction("", undefined);
                    }, handleDelete: handleMediaDelete })] }) })));
};
