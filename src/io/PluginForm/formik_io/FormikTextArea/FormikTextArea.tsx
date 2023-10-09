import { FC } from "react";
import { TextArea } from "../../../TextArea";
import { FormikTextInputPropsType } from "../FormikTextInput";

export const FormikTextArea: FC<Omit<FormikTextInputPropsType, "type">> = ({
  className,
  isRequired,
  classNames,
  name,
  formikProps,
  rows,
}) => {
  return (
    <TextArea
      rows={Number(rows)}
      className={className}
      placeholder={`${name} ${isRequired && "*"}`}
      value={formikProps?.values?.[name]}
      onChange={({ value }) => formikProps?.setFieldValue(name, value)}
      onBlur={() => formikProps?.setFieldTouched(name, true)}
      isError={(formikProps?.touched?.[name] && formikProps?.errors?.[name]) as boolean}
      helperText={
        (formikProps?.touched?.[name] as boolean)
          ? (formikProps?.errors?.[name] as string)
          : undefined
      }
      classNames={{
        textAreaContainer: classNames?.inputContainer ?? "",
        input: classNames?.input ?? "",
        helperTextError: classNames?.errorMessage ?? "",
      }}
    />
  );
};
