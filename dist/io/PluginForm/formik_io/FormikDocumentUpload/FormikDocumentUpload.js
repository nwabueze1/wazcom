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
import { FileSelectorInput } from "../../../FileSelectorInput";
import { createApolloClient } from "helpers/graphQL";
import { handleUploadFile } from "../helper";
import { useFormikDocumentsUploadStyles } from "./styles";
import clx from "classnames";
export var FormikDocumentUpload = function (_a) {
    var _b, _c, _d, _e;
    var name = _a.name, label = _a.label, formikProps = _a.formikProps, form_uuid = _a.form_uuid, client = _a.client, isRequired = _a.isRequired, classNames = _a.classNames, props = __rest(_a, ["name", "label", "formikProps", "form_uuid", "client", "isRequired", "classNames"]);
    var _f = __read(useState(false), 2), loading = _f[0], setLoading = _f[1];
    var gqlClient = useMemo(function () { return client !== null && client !== void 0 ? client : createApolloClient("http://localhost:8000/graphql"); }, [client]);
    var isError = ((_b = formikProps === null || formikProps === void 0 ? void 0 : formikProps.touched) === null || _b === void 0 ? void 0 : _b[name]) && ((_c = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _c === void 0 ? void 0 : _c[name]);
    var classes = useFormikDocumentsUploadStyles(props === null || props === void 0 ? void 0 : props.palette);
    return (_jsx(FileSelectorInput, __assign({ label: label === null || label === void 0 ? void 0 : label.concat(isRequired ? " *" : ""), name: name, loading: loading, isError: Boolean(isError), helperText: ((_d = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _d === void 0 ? void 0 : _d[name]) && String((_e = formikProps === null || formikProps === void 0 ? void 0 : formikProps.errors) === null || _e === void 0 ? void 0 : _e[name]), uploadFn: function (args) {
            return handleUploadFile(__assign(__assign({}, args), { setLoading: setLoading, client: gqlClient, form_uuid: form_uuid, formikProps: formikProps }));
        }, classNames: {
            helperText: clx(classes.helperText, classNames === null || classNames === void 0 ? void 0 : classNames.helperText),
            selectButton: clx(classes.selectFileButton, classNames === null || classNames === void 0 ? void 0 : classNames.selectButton),
            changeFileButton: clx(classes.changeFileButton, classNames === null || classNames === void 0 ? void 0 : classNames.changeFileButton),
            label: clx(classes === null || classes === void 0 ? void 0 : classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label),
        } }, props)));
};
