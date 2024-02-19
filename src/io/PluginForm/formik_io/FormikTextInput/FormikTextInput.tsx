import { FC } from "react";
import { TextInput } from "../../../TextInput";
import { FormikTextInputPropsType } from "./type";
import clx from "classnames";

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

  const handleChange = ({ value }: { name: string; value: string }) => {
    if (type === "tel") {
      // phone number
      const valueRegExp = value.length > 1 ? /[^0-9]/g : /[^0-9+]/g;
      value = value.replace(valueRegExp, ""); //allow only numbers and +

      //check it value starts with + and if it doesn't add + at the beginning
      if (value.length > 0 && !value.startsWith("+")) {
        value = "+" + value;
      }
    }
    formikProps?.setFieldValue(name, value);
  };

  return (
    <TextInput
      {...props}
      name={name}
      onChange={handleChange}
      onBlur={() => formikProps?.setFieldTouched(name, true)}
      isError={isError}
      helperText={errorMessage ? (errorMessage as string) : undefined}
      placeholder={`${placeholder} ${isRequired ? "*" : ""} ${
        type === "tel" ? "(eg: +2349032432432)" : ""
      }`}
      value={formikProps?.values?.[name]}
      className={className}
      classNames={{
        input: clx(classNames?.inputContainer, isError && "error") ?? "",
        inputField: clx(classNames?.input, isError && "error") ?? "",
        label: classNames?.label ?? "",
        errorMessage: classNames?.errorMessage ?? "",
      }}
      type={type}
      required={isRequired}
    />
  );
};
