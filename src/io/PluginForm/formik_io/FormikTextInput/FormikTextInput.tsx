import { FC } from "react";
import { TextInput } from "../../../TextInput";
import { FormikTextInputPropsType } from "./type";

export const FormikTextInput: FC<FormikTextInputPropsType & { is_address?: boolean }> = ({
  className,
  isRequired,
  name,
  type,
  formikProps,
  classNames,
  placeholder,
  is_address = false,
  ...props
}) => {
  const names = name.split(".");
  const isAddressTouched = (formikProps?.touched?.[names[0]] as Record<string, boolean>)?.[
    names[1]
  ];

  const addressError = (formikProps?.errors?.[names[0]] as Record<string, string>)?.[names[1]];

  const isError = is_address
    ? ((isAddressTouched && addressError) as boolean)
    : ((formikProps?.touched?.[name] && formikProps?.errors?.[name]) as boolean);

  const errorMessage = is_address
    ? isAddressTouched && addressError
    : formikProps?.touched?.[name] && formikProps?.errors?.[name];

  return (
    <TextInput
      {...props}
      name={name}
      onChange={({ value }) => formikProps?.setFieldValue(name, value)}
      onBlur={() => formikProps?.setFieldTouched(name, true)}
      isError={isError}
      helperText={errorMessage ? (errorMessage as string) : undefined}
      placeholder={`${placeholder} ${isRequired && "*"}`}
      value={formikProps?.values?.[name]}
      className={className}
      classNames={{
        input: classNames?.inputContainer ?? "",
        inputField: classNames?.input ?? "",
        label: classNames?.label ?? "",
        errorMessage: classNames?.errorMessage ?? "",
      }}
      type={type}
      required={isRequired}
    />
  );
};
