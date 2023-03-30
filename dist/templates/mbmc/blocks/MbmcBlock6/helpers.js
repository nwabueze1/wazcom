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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createApolloClient } from "../../../../helpers/graphQL";
import { GET_MENU_CATEGORIES } from "./graphql";
export var useGetClientCategories = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = useMemo(function () { return createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : ""); }, []);
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, menuCategories, parsedCategories, menuCategories_1, menuCategories_1_1, category, parsedCategory, error_1;
        var e_1, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({ query: GET_MENU_CATEGORIES, variables: variables })];
                case 1:
                    _a = _d.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors)
                        return [2 /*return*/, []];
                    menuCategories = (_c = data === null || data === void 0 ? void 0 : data.getMenu) === null || _c === void 0 ? void 0 : _c.activeMenuCategories;
                    parsedCategories = [];
                    try {
                        for (menuCategories_1 = __values(menuCategories), menuCategories_1_1 = menuCategories_1.next(); !menuCategories_1_1.done; menuCategories_1_1 = menuCategories_1.next()) {
                            category = menuCategories_1_1.value;
                            parsedCategory = {
                                heading: category === null || category === void 0 ? void 0 : category.title,
                                image: category["menuItems"][0]["image_url"],
                                ctas: [
                                    {
                                        text: "Order now",
                                        size: "sm",
                                        url: "/menu?category_uuid=".concat(category.uuid, "#menu"),
                                    },
                                ],
                            };
                            parsedCategories.push(parsedCategory);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (menuCategories_1_1 && !menuCategories_1_1.done && (_b = menuCategories_1.return)) _b.call(menuCategories_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [2 /*return*/, parsedCategories];
                case 2:
                    error_1 = _d.sent();
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var initialClientCategories = [
    {
        heading: "Continental Breakfast",
        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/3Q7uCQ60OxRGrMn4C4tCVF0Vw0J46q1aWj8QNYL9.jpg",
        ctas: [
            {
                text: "Order now",
                size: "sm",
                url: "/menu",
            },
        ],
    },
    {
        heading: "Soups and Stews",
        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/koYLtSyKSjsWpEmM43AeRZtkdQpBEL5soRvR9nQ2.jpg",
        ctas: [
            {
                text: "Order now",
                size: "sm",
                url: "/menu",
            },
        ],
    },
    {
        heading: "Chicken Potpourri",
        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/dKYVwmX4ao6WpEck4AWMh6Rup83WxDkMUGOrmpEi.jpg",
        ctas: [
            {
                text: "Order now",
                size: "sm",
                url: "/menu",
            },
        ],
    },
];
