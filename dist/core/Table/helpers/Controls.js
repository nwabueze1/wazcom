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
export var useUpdateTableValue = function (setTableValue, initialTableValue, controlsFormData, filters) {
    return setTableValue(function () {
        if (_.size(initialTableValue) == 0) {
            return initialTableValue;
        }
        var result = [];
        // filter result by search
        result = initialTableValue.filter(function (rowValues) {
            var status = false;
            Object.values(rowValues).map(function (value) {
                var _a;
                if ("".concat(value)
                    .toLowerCase()
                    .includes((_a = controlsFormData.search) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
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
                var status = false;
                Object.entries(rowValues).map(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    var filterIndex = filters.findIndex(function (item) { return item.field == key; });
                    if (filterIndex !== -1) {
                        if (!filters[filterIndex].values.includes(value.toString())) {
                            status = true;
                        }
                    }
                    return null;
                });
                return status;
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
