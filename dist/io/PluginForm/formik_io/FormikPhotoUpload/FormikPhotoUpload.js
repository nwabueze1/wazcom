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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { ImageSelectorInput } from "../../../ImageSelectorInput";
import { createApolloClient } from "../../../../helpers/graphQL";
import { useCustomStyles } from "./useCustomStyles";
import { handleUploadFile } from "../helper";
import clx from "classnames";
export var FormikPhotoUpload = function (_a) {
    var _b, _c, _d, _e, _f;
    var name = _a.name, label = _a.label, formikProps = _a.formikProps, isRequired = _a.isRequired, client = _a.client, form_uuid = _a.form_uuid, classNames = _a.classNames, props = __rest(_a, ["name", "label", "formikProps", "isRequired", "client", "form_uuid", "classNames"]);
    var _g = __read(useState(false), 2), loading = _g[0], setLoading = _g[1];
    var gqlClient = useMemo(function () { return client !== null && client !== void 0 ? client : createApolloClient("http://localhost:8000/graphql"); }, [client]);
    var isError = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[name]);
    var classes = useCustomStyles(props === null || props === void 0 ? void 0 : props.palette);
    return (_jsx(ImageSelectorInput, __assign({ label: label === null || label === void 0 ? void 0 : label.concat(isRequired ? " *" : ""), name: name, loading: loading, uploadFn: function (args) {
            return handleUploadFile(__assign(__assign({}, args), { client: gqlClient, form_uuid: form_uuid, setLoading: setLoading, formikProps: formikProps }));
        }, isError: Boolean(isError), helperText: ((_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _d === void 0 ? void 0 : _d[name]) && String((_e = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _e === void 0 ? void 0 : _e[name]), classNames: {
            container: clx(classes.container, classNames === null || classNames === void 0 ? void 0 : classNames.container),
            selectButton: clx(classes.selectFileButton, classNames === null || classNames === void 0 ? void 0 : classNames.selectButton),
            helperText: clx(classes.helperText, classNames === null || classNames === void 0 ? void 0 : classNames.helperText),
            label: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label),
            changeFileButton: clx(classes.changeFileButton, classNames === null || classNames === void 0 ? void 0 : classNames.changeFileButton),
            text: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.text),
        }, url: (_f = formikProps === null || formikProps === void 0 ? void 0 : formikProps.values) === null || _f === void 0 ? void 0 : _f[name] }, props)));
};
