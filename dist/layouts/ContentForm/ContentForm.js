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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useStyles from "./styles";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import clx from "classnames";
import { useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { get } from "lodash";
import { FaTimes } from "react-icons/fa";
import { WysiwygInput } from "../../io";
import { Button } from "../../core";
var CreateContentLayout = function (_a) {
    var _b, _c, _d;
    var _e = _a.getContentConfig, GET_CONTENT = _e.GET_CONTENT, getContentVariables = _e.variables, getContentClient = _e.client, dataKey = _e.dataKey, onGoBack = _a.onGoBack, isEdit = _a.isEdit, isPublished = _a.isPublished, children = _a.children, showRightSidebar = _a.showRightSidebar, onDataFetchCompleted = _a.onDataFetchCompleted, onFormSubmit = _a.onFormSubmit, isSubmitting = _a.isSubmitting, isDisabled = _a.isDisabled, type = _a.type, tabControls = _a.tabControls, handleChange = _a.handleChange, formData = _a.formData;
    var classes = useStyles();
    var state = useLocation().state;
    var _f = __read(useState("details"), 2), activeTab = _f[0], setActiveTab = _f[1];
    // const { user } = useContext(AppStateContext);
    var _g = __read(useLazyQuery(GET_CONTENT, {
        variables: __assign({}, getContentVariables),
        client: getContentClient,
        fetchPolicy: "network-only",
    }), 1), getContent = _g[0];
    useEffect(function () {
        if (location.pathname.includes("edit")) {
            if (state === null || state === void 0 ? void 0 : state.row) {
                onDataFetchCompleted(state.row);
            }
            else {
                getContent().then(function (res) {
                    onDataFetchCompleted(get(res.data, dataKey === null || dataKey === void 0 ? void 0 : dataKey.join(".")));
                });
            }
        }
    }, [state]);
    var displayControls = function () {
        if (!activeTab) {
            return null;
        }
        return tabControls[activeTab].form || tabControls.details.form;
    };
    var displayTabs = function () {
        return Object.keys(tabControls)
            .map(function (key) {
            var icon = tabControls[key].icon;
            return { name: key, icon: icon };
        })
            .map(function (tab, index) {
            var _a, _b;
            return (_jsx("div", __assign({ className: clx(classes.tab, (activeTab === null || activeTab === void 0 ? void 0 : activeTab.toLowerCase()) === tab.name.toLowerCase() && classes.activeTab), onClick: function () { return setActiveTab(tab.name); } }, { children: _jsxs("div", __assign({ className: classes.tabContent }, { children: [tab.icon, _jsx("p", __assign({ className: classes.tabName, style: ((_b = (_a = tab === null || tab === void 0 ? void 0 : tab.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("related")) ? { left: "10%", width: "80%" } : {} }, { children: tab.name }))] })) }), index));
        });
    };
    return (_jsx("div", __assign({ className: classes.contentRoot }, { children: _jsxs("div", __assign({ className: classes.contentContainer }, { children: [_jsxs("div", __assign({ className: classes.formParent }, { children: [_jsxs("div", __assign({ className: clx(classes.formEditor, (_b = {},
                                _b[classes.formEditorActive] = !(activeTab && showRightSidebar),
                                _b)) }, { children: [_jsxs("div", __assign({ className: classes.headerContainer }, { children: [_jsx(BsArrowLeft, { onClick: function () {
                                                onGoBack();
                                            } }), _jsx("p", __assign({ className: classes.headerTitle }, { children: isEdit ? "Edit ".concat(type) : "Create ".concat(type) })), _jsx("div", __assign({ className: clx(classes.postStatus, (_c = {},
                                                _c[classes.postStatusPublished] = isPublished,
                                                _c)) }, { children: _jsx("p", __assign({ className: classes.postStatusText }, { children: isPublished ? "Published" : "Draft" })) }))] })), _jsx(WysiwygInput, { value: { title: formData === null || formData === void 0 ? void 0 : formData.title, content: formData === null || formData === void 0 ? void 0 : formData.content }, onChange: handleChange, embed: formData.embed, initiateEmbed: function (type) {
                                        return handleChange({
                                            name: "embedType",
                                            value: type,
                                        });
                                    } }), _jsxs("section", __assign({ className: classes.actionButton }, { children: [_jsx(Button, __assign({ onClick: onFormSubmit === null || onFormSubmit === void 0 ? void 0 : onFormSubmit.draft, className: classes.primary, isLoading: isSubmitting === null || isSubmitting === void 0 ? void 0 : isSubmitting.draft, variant: "outlined", isDisabled: isDisabled === null || isDisabled === void 0 ? void 0 : isDisabled.draft }, { children: isEdit ? "Unpublish" : "Save as Draft" })), _jsx(Button, __assign({ onClick: onFormSubmit === null || onFormSubmit === void 0 ? void 0 : onFormSubmit.publish, isLoading: isSubmitting === null || isSubmitting === void 0 ? void 0 : isSubmitting.publish, isDisabled: isDisabled === null || isDisabled === void 0 ? void 0 : isDisabled.publish }, { children: isEdit ? "Update" : "Publish" }))] })), children] })), _jsxs("div", __assign({ className: clx(classes.tabContainer, (_d = {},
                                _d[classes.tabContainerActive] = activeTab && showRightSidebar,
                                _d)) }, { children: [_jsxs("div", __assign({ className: classes.titleHeader }, { children: [_jsx("p", __assign({ className: classes.activeTitle }, { children: activeTab })), _jsx("div", __assign({ className: classes.tabIconParent, onClick: function () {
                                                setActiveTab(undefined);
                                            } }, { children: _jsx(FaTimes, { className: "icon" }) }))] })), showRightSidebar && displayControls()] }))] })), _jsx("div", __assign({ className: classes.tabParent }, { children: displayTabs() }))] })) })));
};
export default CreateContentLayout;
