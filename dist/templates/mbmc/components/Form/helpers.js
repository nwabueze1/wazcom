export var handleInputChange = function (formik, field, value) {
    var _a;
    if (!((_a = formik.touched) === null || _a === void 0 ? void 0 : _a[field]))
        formik.touched[field] = true;
    formik.setFieldValue(field, value);
};
