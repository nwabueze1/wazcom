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
import _ from "lodash";
export var useHandleControlsChange = function (setControls) {
    return function (e) {
        setControls(function (controls) {
            var _a;
            return (__assign(__assign({}, controls), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
};
export var useUpdateTableValue = function (setTableValue, initialTableValue, controlsFormData) {
    return setTableValue(function () {
        if (_.size(initialTableValue) == 0) {
            return initialTableValue;
        }
        return initialTableValue.filter(function (rowValues) {
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
    });
};
