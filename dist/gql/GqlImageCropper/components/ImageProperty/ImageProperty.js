import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextInput, TextArea } from "../../../../io";
import { Tooltip } from "../../../../core";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useImagePropertyStyles } from "./styles";
import { formFields } from "./helpers";
import { capitalizeFirstCharacter } from "./helpers";
import clx from "classnames";
export var ImageProperty = function (_a) {
    var form = _a.form, handleChange = _a.handleChange;
    var classes = useImagePropertyStyles();
    var parsedForm = JSON.parse(JSON.stringify(form));
    var displayFields = function () {
        return formFields.map(function (field, index) {
            var _a;
            var value = parsedForm[(_a = field === null || field === void 0 ? void 0 : field.field) !== null && _a !== void 0 ? _a : field === null || field === void 0 ? void 0 : field.name];
            var label = (_jsxs("div", { className: classes.placeholderContainer, children: [_jsx("p", { className: classes.formLabel, children: field.name }), field.showToolTip && (_jsx(Tooltip, { title: field.toolTipDescription, content: capitalizeFirstCharacter(field.toolTipDescription), classNames: { content: classes.tooltipContent }, children: _jsx("p", { children: _jsx(BsQuestionCircleFill, { className: classes.tooltipIcon }) }) }))] }));
            return field.name === "description" ? (_jsx(TextArea, { label: (_jsx("p", { className: classes.formLabel, children: field.name })), value: value, name: field.name, className: clx(classes.formControl, "textarea"), onChange: function (_a) {
                    var _b;
                    var value = _a.value;
                    handleChange(((_b = field === null || field === void 0 ? void 0 : field.field) !== null && _b !== void 0 ? _b : field.name).toLowerCase().replace(/ /g, "_"), value);
                }, placeholder: field.placeholder, rows: 4 }, index)) : (_jsx(TextInput, { label: label, value: value, name: field.name, className: classes.formControl, placeholder: field.placeholder, onChange: function (_a) {
                    var _b;
                    var value = _a.value;
                    handleChange(((_b = field === null || field === void 0 ? void 0 : field.field) !== null && _b !== void 0 ? _b : field.name).toLowerCase().replace(/ /g, "_"), value);
                } }, index));
        });
    };
    return _jsx("div", { className: classes.form, children: displayFields() });
};
