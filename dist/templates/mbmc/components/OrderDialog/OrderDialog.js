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
        while (_) try {
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
import { useState, useCallback, useContext, useMemo } from "react";
import { MbmcButton } from "../MbmcButton/MbmcButton";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useMbmcBlock16Styles } from "./styles";
import { getCurrency } from "../../../../utilities";
import { RestaurantContext } from "../../contexts";
import { Modal } from "../../../../core";
import { Options } from "./components";
import { calculateOptionsTotal } from "./helpers";
import { useAddToCart } from "./hooks";
export var OrderDialog = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var itemUuid = _a.itemUuid, handleClose = _a.handleClose, setContextProps = _a.setContextProps;
    var _h = useContext(RestaurantContext), menu = _h.menu, loading = _h.loading;
    var classes = useMbmcBlock16Styles();
    var _j = __read(useState(1), 2), quantity = _j[0], setQuantity = _j[1];
    var _k = __read(useState([]), 2), selectedOptions = _k[0], setSelectedOptions = _k[1];
    var addToCart = useAddToCart();
    var menuItem = useMemo(function () {
        var _a;
        if (!itemUuid) {
            setQuantity(1);
            setSelectedOptions([]);
            return undefined;
        }
        return (_a = menu === null || menu === void 0 ? void 0 : menu.menuItems) === null || _a === void 0 ? void 0 : _a.find(function (item) { return (item === null || item === void 0 ? void 0 : item.uuid) === itemUuid; });
    }, [itemUuid]);
    var handleIncrement = function () {
        setQuantity(function (prev) { return prev + 1; });
    };
    var handleDecrement = function () {
        setQuantity(function (prev) { return (prev <= 1 ? 1 : prev - 1); });
    };
    var updateSelectedOptions = useCallback(function (updatedOption) {
        var index = selectedOptions.findIndex(function (option) { return option.name.toString() === updatedOption.name.toString(); });
        var newOptions = __spreadArray([], __read(selectedOptions), false);
        if (index === -1)
            newOptions.push(updatedOption);
        else if (updatedOption.selectedChoices.length === 0)
            newOptions = newOptions.filter(function (option) { return option.name.toString() !== updatedOption.name.toString(); });
        else
            newOptions[index] = updatedOption;
        setSelectedOptions(newOptions);
    }, [selectedOptions]);
    var calculateDishTotal = useCallback(function () {
        if (!menuItem)
            return 0;
        return (quantity * (menuItem === null || menuItem === void 0 ? void 0 : menuItem.price) +
            calculateOptionsTotal(selectedOptions, quantity));
    }, [quantity, selectedOptions, menuItem === null || menuItem === void 0 ? void 0 : menuItem.price]);
    var price = "".concat(getCurrency((_d = (_c = (_b = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "")).concat(calculateDishTotal());
    var handleAddToCart = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, addToCart({
                        menu_item_uuid: menuItem === null || menuItem === void 0 ? void 0 : menuItem.uuid,
                        quantity: quantity,
                        detail: menuItem === null || menuItem === void 0 ? void 0 : menuItem.description,
                        options: selectedOptions.length > 0 ? JSON.stringify(selectedOptions) : undefined,
                    }, handleClose, setContextProps)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(Modal, __assign({ open: Boolean(itemUuid), handleClose: handleClose }, { children: _jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.dialogContainer }, { children: [_jsxs("div", __assign({ className: classes.topContent }, { children: [_jsx("img", { className: classes.dialogImage, src: (_e = menuItem === null || menuItem === void 0 ? void 0 : menuItem.image_url) !== null && _e !== void 0 ? _e : "", alt: (_f = menuItem === null || menuItem === void 0 ? void 0 : menuItem.name) !== null && _f !== void 0 ? _f : "" }, void 0), _jsxs("div", __assign({ className: classes.content }, { children: [_jsx("p", __assign({ className: classes.title }, { children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.name }), void 0), _jsx("p", __assign({ className: classes.description }, { children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.description }), void 0), _jsxs("div", __assign({ className: classes.priceContainer }, { children: [_jsx("p", __assign({ className: classes.price }, { children: price }), void 0), _jsxs("div", __assign({ className: classes.quantityCountContainer }, { children: [_jsx("span", __assign({ className: "".concat(classes.quantityButton, " ").concat(quantity == 1 && classes.disable), onClick: handleDecrement }, { children: _jsx(RemoveRoundedIcon, { className: classes.operationIcon }, void 0) }), void 0), _jsx("span", { children: quantity }, void 0), _jsx("span", __assign({ className: classes.quantityButton, onClick: handleIncrement }, { children: _jsx(AddRoundedIcon, { className: classes.operationIcon }, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.dialogOptionsContent }, { children: [(menuItem === null || menuItem === void 0 ? void 0 : menuItem.options) && menuItem.options.length > 0 && (_jsx(Options, { selectedOptions: selectedOptions, handleUpdateSelectedOptions: updateSelectedOptions, itemOptions: (_g = menuItem === null || menuItem === void 0 ? void 0 : menuItem.options) !== null && _g !== void 0 ? _g : [] }, void 0)), _jsx("div", __assign({ className: classes.dialogButtonContainer }, { children: _jsxs(MbmcButton, __assign({ className: classes.dialogButton, variant: "SECONDARY", size: "sm", handleClick: handleAddToCart, loading: loading }, { children: ["Add to cart (", price, ")"] }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0) }), void 0));
};
