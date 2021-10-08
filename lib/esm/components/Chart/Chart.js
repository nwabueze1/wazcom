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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
// import { Line } from "react-chartjs-2";
import { useChartStyles } from "./style";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
export var Chart = function () {
    var _a = React.useState(""), age = _a[0], setAge = _a[1];
    var handleChange = function (event) {
        setAge(event.target.value);
    };
    var classes = useChartStyles();
    // const state = {
    //   labels: [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "jun",
    //     "jul",
    //     "Aug",
    //     "Sept",
    //     "Oct",
    //     "Nov",
    //     "Dec",
    //   ],
    //   datasets: [
    //     {
    //       label: "",
    //       lineTension: 0.5,
    //       borderColor: "red",
    //       borderWidth: 2,
    //       data: [
    //         2000, 2600, 5500, 6000, 5000, 6000, 4000, 6000, 6000, 8000, 9000,
    //         10000,
    //       ],
    //       backgroundColor: ["rgba(255, 99, 132, 0.2)"],
    //     },
    //   ],
    // };
    return (_jsxs(Card, { children: [_jsx("div", __assign({ className: classes.Desc }, { children: "Chart" }), void 0), _jsxs("div", __assign({ className: classes.chartHead }, { children: [_jsx("div", __assign({ className: classes.text }, { children: " Total Revenue" }), void 0), _jsx(FormControl, __assign({ variant: "outlined" }, { children: _jsxs(Select, __assign({ style: { width: 120 }, value: age, onChange: handleChange, label: "" }, { children: [_jsx(MenuItem, __assign({ value: 10 }, { children: "Month" }), void 0), _jsx(MenuItem, __assign({ value: 20 }, { children: "Twenty" }), void 0), _jsx(MenuItem, __assign({ value: 30 }, { children: "Thirty" }), void 0)] }), void 0) }), void 0)] }), void 0), _jsx("div", {}, void 0)] }, void 0));
};
