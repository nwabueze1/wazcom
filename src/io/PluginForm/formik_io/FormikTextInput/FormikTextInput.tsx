import { FC } from "react";
import { TextInput } from "../../../TextInput";
import { FormikTextInputPropsType } from "./type";
import clx from "classnames";
import { usePalletteStyles } from "../";
import { FormPallette } from "../../type";

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
  const names = is_address ? name?.split?.(".") : [name];

  const isAddressTouched =
    is_address && (formikProps?.touched?.[names?.[0]] as Record<string, boolean>)?.[names?.[1]];

  const addressError = (formikProps?.errors?.[names[0]] as Record<string, string>)?.[names[1]];
  const paletteStyles = usePalletteStyles(props?.palette as FormPallette);
  const isError = is_address
    ? ((isAddressTouched && addressError) as boolean)
    : ((formikProps?.touched?.[name] && formikProps?.errors?.[name]) as boolean);

  const errorMessage = is_address
    ? isAddressTouched && addressError
    : formikProps?.touched?.[name] && formikProps?.errors?.[name];

  const handleChange = ({ value }: { name: string; value: string }) => {
    if (type === "tel") value = value.replace(/[^0-9+]/g, ""); //allow only numbers and +

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
        input: clx(paletteStyles?.baseInput, classNames?.inputContainer, isError && "error") ?? "",
        inputField: clx(paletteStyles?.field, classNames?.input, isError && "error") ?? "",
        label: clx(paletteStyles?.label, classNames?.label ?? ""),
        errorMessage: classNames?.errorMessage ?? "",
      }}
      type={type}
      required={isRequired}
    />
  );
};
