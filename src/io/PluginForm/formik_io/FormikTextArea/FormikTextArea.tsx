import { FC } from "react";
import { TextArea } from "../../../TextArea";
import { FormikTextInputPropsType } from "../FormikTextInput";
import clx from "classnames";

export const FormikTextArea: FC<Omit<FormikTextInputPropsType, "type">> = ({
  className,
  isRequired,
  classNames,
  name,
  formikProps,
  rows,
  placeholder,
}) => {
  const isError = formikProps?.touched?.[name] && formikProps?.errors?.[name];

  return (
    <TextArea
      rows={Number(rows)}
      className={className}
      placeholder={`${placeholder} ${isRequired ? "*" : ""}`}
      value={formikProps?.values?.[name]}
      onChange={({ value }) => formikProps?.setFieldValue(name, value)}
      onBlur={() => formikProps?.setFieldTouched(name, true)}
      isError={isError as boolean}
      helperText={isError ? (isError as string) : undefined}
      classNames={{
        textAreaContainer: clx(classNames?.inputContainer, isError && "error") ?? "",
        input: clx(classNames?.input, isError && "error") ?? "",
        helperTextError: classNames?.errorMessage ?? "",
      }}
    />
  );
};
