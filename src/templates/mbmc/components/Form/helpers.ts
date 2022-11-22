export const handleInputChange = (
    formik: any,
    field: string,
    value: any,
  ) => {
    if (!formik.touched?.[field]) formik.touched[field] = true;
    formik.setFieldValue(field, value);
  };
  