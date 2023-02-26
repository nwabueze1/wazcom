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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import _ from "lodash";
export var useHandleControlsChange = function (setControls) {
    return function (e) {
        setControls(function (controls) {
            var _a;
            return (__assign(__assign({}, controls), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
};
export var getJsxContent = function (data) {
    var _a;
    var children = ((_a = data.props) === null || _a === void 0 ? void 0 : _a.children) || undefined;
    if (Array.isArray(data)) {
        // Multiple children
        var joinedNodes_1 = [];
        data.forEach(function (node) {
            if (typeof node === "object")
                joinedNodes_1.push(getJsxContent(node));
            else if (typeof node === "string")
                joinedNodes_1.push(node);
        });
        return joinedNodes_1.join(" ");
    }
    if (children === undefined) {
        if (typeof data === "string")
            return data;
        else
            return " ";
    }
    if (typeof children === "object") {
        return getJsxContent(data.props.children);
    }
    if (typeof children === "string") {
        return data.props.children;
    }
    return "";
};
export var useUpdateTableValue = function (setTableValue, initialTableValue, controlsFormData, filters) {
    setTableValue(function () {
        if (_.size(initialTableValue) == 0) {
            return initialTableValue;
        }
        var result = [];
        // filter result by search
        result = initialTableValue.filter(function (rowValues) {
            var status = false;
            Object.values(rowValues).map(function (value) {
                var _a, _b;
                if (typeof value == "object") {
                    var stringFromJsx = getJsxContent(value);
                    if ("".concat(stringFromJsx).toLowerCase().includes((_a = controlsFormData.search) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                        status = true;
                    }
                    return null;
                }
                if ("".concat(value).toLowerCase().includes((_b = controlsFormData.search) === null || _b === void 0 ? void 0 : _b.toLowerCase())) {
                    status = true;
                }
                return null;
            });
            return status;
        });
        // filter result by filter panel
        var newFilterResult = controlsFormData.search
            ? __spreadArray([], __read(result), false) : __spreadArray([], __read(initialTableValue), false);
        if (filters.length > 0) {
            return newFilterResult.filter(function (rowValues) {
                var status = [];
                Object.entries(rowValues).map(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    var idx = -1;
                    filters.map(function (item, index) {
                        if (item.field == key) {
                            idx = index;
                        }
                        else {
                            idx = -1;
                        }
                        if (idx !== -1) {
                            var term = value == null
                                ? ""
                                : typeof value == "object"
                                    ? getJsxContent(value)
                                    : String(value);
                            if (!filters[idx].values.includes(term)) {
                                return status.push(true);
                            }
                            status.push(false);
                        }
                        return;
                    });
                });
                return !status.includes(false);
            });
        }
        return result;
    });
};
export var generateNumbersBetweenRange = function (max) {
    var arr = [];
    for (var i = 0; i < max; i++) {
        arr.push(i);
    }
    return arr;
};
