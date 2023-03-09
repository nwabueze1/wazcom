export const handleInputChange = (formik: any, field: string, value: any) => {
  if (!formik.touched?.[field]) formik.touched[field] = true;
  formik.setFieldValue(field, value);
};

export const handleInputBlur = (formik: any, field: string) => {
  if (!formik.touched?.[field] && formik.values[field].trim().length > 0)
    formik.setFieldTouched(field, true);
};

export const resetFormTouched = (formik: any) => {
  Object.keys(formik.values).forEach((key) => {
    formik.setFieldTouched(key, false);
  });
};
