export var handleInputChange = function (formik, field, value) {
    var _a;
    if (!((_a = formik.touched) === null || _a === void 0 ? void 0 : _a[field]))
        formik.touched[field] = true;
    formik.setFieldValue(field, value);
};
export var handleInputBlur = function (formik, field) {
    var _a;
    if (!((_a = formik.touched) === null || _a === void 0 ? void 0 : _a[field]) && formik.values[field].trim().length > 0)
        formik.setFieldTouched(field, true);
};
export var resetFormTouched = function (formik) {
    Object.keys(formik.values).forEach(function (key) {
        formik.setFieldTouched(key, false);
    });
};
