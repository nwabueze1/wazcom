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
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createApolloClient } from "../../../../helpers/graphQL";
import { GET_MENU } from "./graphql";
export var useGetClientMenu = function () {
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = useMemo(function () { return createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : ""); }, []);
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, _b, activeMenuCategories, activeMenuItems, rest, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.query({ query: GET_MENU, variables: variables })];
                case 1:
                    _a = _c.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors)
                        return [2 /*return*/, []];
                    _b = data === null || data === void 0 ? void 0 : data.getMenu, activeMenuCategories = _b.activeMenuCategories, activeMenuItems = _b.activeMenuItems, rest = __rest(_b, ["activeMenuCategories", "activeMenuItems"]);
                    return [2 /*return*/, __assign(__assign({}, rest), { menuCategories: activeMenuCategories, menuItems: activeMenuItems })];
                case 2:
                    error_1 = _c.sent();
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var initialClientMenu = {
    __typename: "Menu",
    uuid: "8b63de49-6087-4a66-b1e4-90e8d9ef1629",
    name: "okakak",
    options_config: [
        {
            __typename: "MenuOptionsConfig",
            name: "Fries",
            uuid: "20426712-9ed0-4e83-ac99-43c0dd9aa248",
            type: "selection",
            options: {
                __typename: "OptionsConfig",
                selection: [
                    {
                        __typename: "DishOption",
                        amount: 15,
                        name: "Milk Fries",
                    },
                    {
                        __typename: "DishOption",
                        amount: 10,
                        name: "Chocolate Fries",
                    },
                    {
                        __typename: "DishOption",
                        amount: 5,
                        name: "French Fries",
                    },
                ],
                extras: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                deselection: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
            },
        },
        {
            __typename: "MenuOptionsConfig",
            name: "Sodas",
            uuid: "769eb3e4-7b90-49d9-811a-2a58d1ed158d",
            type: "extras",
            options: {
                __typename: "OptionsConfig",
                selection: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                extras: [
                    {
                        __typename: "DishOption",
                        amount: 10,
                        name: "Coke",
                    },
                    {
                        __typename: "DishOption",
                        amount: 12,
                        name: "Pepsi",
                    },
                    {
                        __typename: "DishOption",
                        amount: 20,
                        name: "Fanta",
                    },
                ],
                deselection: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
            },
        },
        {
            __typename: "MenuOptionsConfig",
            name: "defend",
            uuid: "b96877e6-58b8-4fcf-abd7-91f0e4411d2c",
            type: "selection",
            options: {
                __typename: "OptionsConfig",
                selection: [
                    {
                        __typename: "DishOption",
                        amount: 10,
                        name: "rice",
                    },
                    {
                        __typename: "DishOption",
                        amount: 5,
                        name: "beans",
                    },
                ],
                extras: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                deselection: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
            },
        },
        {
            __typename: "MenuOptionsConfig",
            name: "cryke",
            uuid: "a200028a-a201-49f2-8994-4140665d4d0d",
            type: "selection",
            options: {
                __typename: "OptionsConfig",
                selection: [
                    {
                        __typename: "DishOption",
                        amount: 20,
                        name: "fanta",
                    },
                ],
                extras: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                deselection: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
            },
        },
        {
            __typename: "MenuOptionsConfig",
            name: "gririri",
            uuid: "1efa645a-f22f-4f9c-b94a-6461ef1ea1c6",
            type: "deselection",
            options: {
                __typename: "OptionsConfig",
                selection: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                extras: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                deselection: [
                    {
                        __typename: "DishOption",
                        amount: 23,
                        name: "sjs.ms,s",
                    },
                    {
                        __typename: "DishOption",
                        amount: 32,
                        name: "ssklsms",
                    },
                ],
            },
        },
        {
            __typename: "MenuOptionsConfig",
            name: "gririri",
            uuid: "8c51208d-476b-4169-a07d-1ffb81926b1f",
            type: "deselection",
            options: {
                __typename: "OptionsConfig",
                selection: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                extras: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                deselection: [
                    {
                        __typename: "DishOption",
                        amount: 23,
                        name: "sjs.ms,s",
                    },
                    {
                        __typename: "DishOption",
                        amount: 32,
                        name: "ssklsms",
                    },
                ],
            },
        },
        {
            __typename: "MenuOptionsConfig",
            name: "fries",
            uuid: "90c63f78-86f0-4855-b844-bbe0dc3c9b8c",
            type: "deselection",
            options: {
                __typename: "OptionsConfig",
                selection: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                extras: [
                    {
                        __typename: "DishOption",
                        amount: 0,
                        name: "",
                    },
                ],
                deselection: [
                    {
                        __typename: "DishOption",
                        amount: 12,
                        name: "sweet fries",
                    },
                    {
                        __typename: "DishOption",
                        amount: 20,
                        name: "salty fries",
                    },
                ],
            },
        },
        {
            __typename: "MenuOptionsConfig",
            name: "drinks",
            uuid: "10ca7f58-9ebf-4d1b-982b-3840550a47cc",
            type: "selection",
            options: {
                selection: [
                    {
                        amount: 10,
                        name: "Fanta",
                    },
                    {
                        amount: 10,
                        name: "Coke",
                    },
                    {
                        amount: 5,
                        name: "Pepsi",
                    },
                ],
                extras: [
                    {
                        amount: 0,
                        name: "",
                    },
                ],
                deselection: [
                    {
                        amount: 0,
                        name: "",
                    },
                ],
            },
        },
    ],
    restaurant: {
        uuid: "c831a85e-6a75-4ee0-9f93-bfe1293ae677",
        site: {
            uuid: "ae043bd3-6250-47e3-8717-e08a55937088",
        },
        bank_info: {
            currency: "USD",
            delivery_fee: 13,
        },
    },
    menuCategories: [
        {
            id: "3",
            uuid: "f3f7bff8-880c-437d-a98f-15e1702a1bbe",
            title: "Salads",
        },
        {
            id: "4",
            uuid: "93419cd7-2755-4bd3-8665-60624de2f6c1",
            title: "Soups and Stews",
        },
        {
            id: "26",
            uuid: "01248e07-3fcd-42ec-92f6-249b584de5f9",
            title: "Chicken Potpourri",
        },
    ],
    menuItems: [
        {
            __typename: "MenuItem",
            uuid: "c4cdcace-6993-4840-9d93-1d6a64c08dd3",
            name: "suya suya",
            description: "excellent suya from north ameria",
            menuCategory: {
                id: "3",
            },
            options: ["b96877e6-58b8-4fcf-abd7-91f0e4411d2c"],
            image_url: "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/koYLtSyKSjsWpEmM43AeRZtkdQpBEL5soRvR9nQ2.jpg",
            price: 100,
        },
        {
            __typename: "MenuItem",
            uuid: "16e2a94e-5b69-4e86-9eec-fabe073c7506",
            name: "ssss",
            description: "sss",
            menuCategory: {
                id: "4",
            },
            options: [],
            image_url: "https://sytbuildr.s3.eu-west-2.amazonaws.com/5a246d83-b966-4557-b6bb-19791c662d73/VDim4VIsdd15c6FqETBUVMfYZAvGAGpz5NW0glOt.jpg",
            price: 56,
        },
        {
            __typename: "MenuItem",
            uuid: "5771cb58-67b4-4d51-850d-f46bf2c0b9db",
            name: "sksl,s/,ss sj,s",
            description: "nms",
            menuCategory: {
                id: "4",
            },
            options: [],
            image_url: "https://sytbuildr.s3.eu-west-2.amazonaws.com/5a246d83-b966-4557-b6bb-19791c662d73/VDim4VIsdd15c6FqETBUVMfYZAvGAGpz5NW0glOt.jpg",
            price: 50,
        },
        {
            __typename: "MenuItem",
            uuid: "7525132e-eaf6-4ac0-a87d-5e6424027323",
            name: "Olamileke Biodun",
            description: "snilsk.,ms skk",
            menuCategory: {
                id: "4",
            },
            options: [],
            image_url: "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/koYLtSyKSjsWpEmM43AeRZtkdQpBEL5soRvR9nQ2.jpg",
            price: 100,
        },
        {
            __typename: "MenuItem",
            uuid: "e1131308-324a-4c2b-ba4b-0d1155021367",
            name: "holly wood",
            description: "holly wood",
            menuCategory: {
                id: "26",
            },
            options: [],
            image_url: "https://images.pexels.com/photos/15823317/pexels-photo-15823317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            price: 11,
        },
    ],
};
