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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useRegionSelectorStyles } from "./styles";
import { TextInput } from "../../io";
import { FaTimes } from "react-icons/fa";
export var RegionSelector = function (_a) {
    var _b;
    var country = _a.country, name = _a.name, value = _a.value, onChange = _a.onChange;
    var autoCompleteRef = useRef();
    var inputRef = useRef(null);
    var valueRef = useRef(value !== null && value !== void 0 ? value : []);
    var options = {
        componentRestrictions: { country: country !== null && country !== void 0 ? country : "ng" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["neighborhood", "sublocality"],
    };
    var classes = useRegionSelectorStyles();
    var id = "region-selector-" + (Math.random() * 1000).toFixed(2);
    useEffect(function () {
        var _a, _b;
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, options);
        (_a = autoCompleteRef.current) === null || _a === void 0 ? void 0 : _a.addListener("place_changed", function () {
            return __awaiter(this, void 0, void 0, function () {
                var place;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, ((_a = autoCompleteRef.current) === null || _a === void 0 ? void 0 : _a.getPlace())];
                        case 1:
                            place = _b.sent();
                            handleAdd(place === null || place === void 0 ? void 0 : place.name);
                            if (inputRef.current)
                                inputRef.current.value = "";
                            return [2 /*return*/];
                    }
                });
            });
        });
        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("focus", function () {
            var regionSelector = document.getElementById(id);
            var pacContainer = document.getElementsByClassName("pac-container")[0];
            regionSelector === null || regionSelector === void 0 ? void 0 : regionSelector.append(pacContainer);
        });
    }, []);
    var handleAdd = function (location) {
        var _a;
        var updatedValue = __spreadArray(__spreadArray([], __read(((_a = valueRef.current) !== null && _a !== void 0 ? _a : [])), false), [location], false);
        valueRef.current = updatedValue;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: updatedValue });
    };
    var handleDeleteLocation = function (index) {
        var updatedValue = (value !== null && value !== void 0 ? value : []).filter(function (_, valueIndex) { return index !== valueIndex; });
        valueRef.current = updatedValue;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: updatedValue });
    };
    var renderLocations = function () {
        var _a;
        return (_a = (value !== null && value !== void 0 ? value : [])) === null || _a === void 0 ? void 0 : _a.map(function (location, index) { return (_jsxs("p", { className: classes.selectorValue, children: [location, _jsx(FaTimes, { className: "icon", onClick: function () {
                        handleDeleteLocation(index);
                    } })] }, index)); });
    };
    return (_jsxs("div", { className: classes.root, children: [_jsx("div", { className: classes.selectorHeader, id: id, children: _jsx(TextInput, { name: "location", inputRef: inputRef, className: classes.selectorInputParent, classNames: { input: classes.selectorInput } }) }), ((_b = (value !== null && value !== void 0 ? value : [])) === null || _b === void 0 ? void 0 : _b.length) > 0 && (_jsx("div", { className: classes.selectorValues, children: renderLocations() }))] }));
};
