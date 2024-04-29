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
import { notify } from "./notify";
export var errorHandler = function (error, key) {
    if (error.graphQLErrors) {
        error.graphQLErrors.map(function (_a) {
            var _b, _c, _d, _e, _f;
            var extensions = _a.extensions, message = _a.message;
            if (extensions === null || extensions === void 0 ? void 0 : extensions.validation) {
                if (key && ((_b = extensions === null || extensions === void 0 ? void 0 : extensions.validation) === null || _b === void 0 ? void 0 : _b[key][0]))
                    return notify("error", (_d = (_c = extensions === null || extensions === void 0 ? void 0 : extensions.validation) === null || _c === void 0 ? void 0 : _c[key][0]) !== null && _d !== void 0 ? _d : "");
                Object.entries(extensions.validation).map(function (_a) {
                    var _b = __read(_a, 2), messages = _b[1];
                    return messages.map(function (message) { return notify("error", message); });
                });
                return null;
            }
            else if (extensions === null || extensions === void 0 ? void 0 : extensions.reason) {
                return notify("error", (_e = extensions === null || extensions === void 0 ? void 0 : extensions.reason) !== null && _e !== void 0 ? _e : "");
            }
            else {
                var parsedMessage = message;
                if ((_f = parsedMessage === null || parsedMessage === void 0 ? void 0 : parsedMessage.toLowerCase()) === null || _f === void 0 ? void 0 : _f.includes("invalid email or password"))
                    parsedMessage = "Incorrect User Credentials";
                return notify("error", parsedMessage);
            }
        });
    }
    return key;
};
