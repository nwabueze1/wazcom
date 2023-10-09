import { FC } from "react";
import { FormikSelectPropsType } from "../../type";
import { SelectInput } from "../../../SelectInput";

export const FormikSelect: FC<FormikSelectPropsType> = ({
  classNames,
  className,
  options,
  name,
  formikProps,
}) => {
  const isInvalid = formikProps?.touched?.[name] && formikProps?.["errors"]?.[name];

  return (
    <SelectInput
      options={options}
      name={name}
      isError={isInvalid as boolean}
      helperText={isInvalid as string}
      onChange={({ value }) => formikProps?.setFieldValue(name, value)}
      onBlur={() => formikProps?.setFieldTouched(name, true)}
      label={name}
      containerClass={className}
      classNames={classNames}
    />
  );
};
