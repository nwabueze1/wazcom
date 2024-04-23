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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useEffect, useState } from "react";
import { ComboBoxInput } from "../../io";
import { get } from "lodash";
export var GqlComboBox = memo(function (_a) {
    var initialValue = _a.value, _b = _a.config, client = _b.client, key = _b.key, labelKey = _b.labelKey, valueKey = _b.valueKey, query = _b.name, postFetchHook = _a.postFetchHook, addOption = _a.addOption, onChange = _a.onChange, label = _a.label, variables = _a.variables, props = __rest(_a, ["value", "config", "postFetchHook", "addOption", "onChange", "label", "variables"]);
    var _c = __read(useState([]), 2), options = _c[0], setOptions = _c[1];
    var _d = __read(useState(true), 2), fetching = _d[0], setFetching = _d[1];
    var _e = __read(useState(initialValue), 2), value = _e[0], setValue = _e[1];
    useEffect(function () {
        setValue(initialValue);
    }, [initialValue]);
    var fetchData = function (search) {
        if (search === void 0) { search = ""; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.query({
                            query: query,
                            fetchPolicy: "network-only",
                            variables: __assign(__assign({}, variables), { search: search }),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var getData = function (search) {
        if (search === void 0) { search = ""; }
        return __awaiter(void 0, void 0, void 0, function () {
            var data, r_options, formattedOptions_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setFetching(true);
                        return [4 /*yield*/, fetchData(search)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data) {
                            r_options = get(data, key === null || key === void 0 ? void 0 : key.join("."));
                            formattedOptions_1 = r_options.map(function (option) { return ({
                                label: option[labelKey],
                                value: option[valueKey],
                            }); });
                            setOptions(function (options) {
                                console.log("==========> options", options);
                                return __spreadArray(__spreadArray([], __read(options), false), __read(formattedOptions_1), false);
                            });
                            postFetchHook === null || postFetchHook === void 0 ? void 0 : postFetchHook(__spreadArray(__spreadArray([], __read(options), false), __read(formattedOptions_1), false));
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        e_1 = _a.sent();
                        console.log("===============> error", e_1);
                        postFetchHook === null || postFetchHook === void 0 ? void 0 : postFetchHook([]);
                        setOptions([]);
                        return [3 /*break*/, 4];
                    case 3:
                        setFetching(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    useEffect(function () {
        getData();
    }, [query]);
    var handleChange = useCallback(function (selectedValue) { return __awaiter(void 0, void 0, void 0, function () {
        var label, value, response;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    label = (_a = options === null || options === void 0 ? void 0 : options.find(function (option) { return option.value.toLowerCase() === selectedValue.toLowerCase(); })) === null || _a === void 0 ? void 0 : _a.label;
                    value = selectedValue;
                    if (!!label) return [3 /*break*/, 2];
                    setFetching(true);
                    return [4 /*yield*/, handleAdd(selectedValue.startsWith("Add ") ? selectedValue.split("Add ")[1] : selectedValue)];
                case 1:
                    response = _b.sent();
                    label = response === null || response === void 0 ? void 0 : response.label;
                    value = response === null || response === void 0 ? void 0 : response.value;
                    _b.label = 2;
                case 2:
                    setValue(value);
                    onChange === null || onChange === void 0 ? void 0 : onChange({ name: props.name, value: value });
                    setFetching(false);
                    return [2 /*return*/];
            }
        });
    }); }, [options]);
    var handleAdd = useCallback(function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var response, value_1, label_1, newOptions, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (addOption === null || addOption === void 0 ? void 0 : addOption(value))];
                case 1:
                    response = _a.sent();
                    if (response === null || response === void 0 ? void 0 : response.status) {
                        value_1 = response.value;
                        label_1 = response.label;
                        newOptions = __spreadArray(__spreadArray([], __read(options), false), [{ label: label_1, value: value_1 }], false);
                        setOptions(newOptions);
                        postFetchHook === null || postFetchHook === void 0 ? void 0 : postFetchHook(newOptions);
                        return [2 /*return*/, { label: label_1, value: value_1 }];
                    }
                    return [2 /*return*/];
                case 2:
                    error_1 = _a.sent();
                    setFetching(false);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [options]);
    return (_jsx(ComboBoxInput, __assign({ label: label, options: options, value: value !== null && value !== void 0 ? value : "", onChange: function (data) {
            if (data.type && data.type == "search" && !(variables === null || variables === void 0 ? void 0 : variables.all)) {
                getData(data.value);
            }
            else {
                handleChange(data.value);
            }
        }, handleAdd: handleChange, isLoading: fetching }, props)));
});
GqlComboBox.displayName = "GqlComboBox";
