import { FormikProps, useField } from "formik";
import { FC } from "react";
import clx from "classnames";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  FormikTextInputPropsType,
  RadioButtonClassNamesPropsType,
  RadioButtonFormikPropsType,
  RadioButtonGroup,
  RadioButtonInputPropsType,
  TextArea,
  TextField,
} from "./TextField";
import { SelectInput } from "../../SelectInput";
import { useTextFieldStyles } from "./TextField/useTextFieldStyles";
import { FormikSelectPropsType, PhoneNumberInputClassNamesPropsType } from "../type";

export const RadioButtonFormik: FC<RadioButtonFormikPropsType> = ({
  label,
  control,
  multiple,
  classNames,
  ...props
}) => {
  const [field] = useField({ ...props, type: control });
  const classes = useTextFieldStyles();

  return (
    <label className={clx(classes.radioLabel)} htmlFor={label}>
      <input
        {...field}
        type={control}
        multiple={multiple}
        id={label}
        className={classNames?.radioButtonOrCheckBox}
      />{" "}
      <span>{label}</span>
    </label>
  );
};
export const FormikTextInput: FC<FormikTextInputPropsType> = ({
  className,
  isRequired,
  classNames,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      classNames={classNames}
      className={className}
      isError={(meta.touched && meta.error) as boolean}
      errorMessage={meta.touched ? meta.error : ""}
      placeholder={props.placeholder || props.name}
      isRequired={isRequired}
      type={props?.type}
    />
  );
};

export const FormikPhoneNumber: FC<
  Omit<FormikTextInputPropsType, "classNames"> & {
    default_country: string;
    classNames?: Partial<PhoneNumberInputClassNamesPropsType>;
    formikProps?: FormikProps<Record<string, any>>;
  }
> = ({ default_country, classNames, formikProps, name }) => {
  const classes = useTextFieldStyles();
  const isInvalid = formikProps?.touched?.[name] && formikProps?.errors?.[name];

  return (
    <div className={classNames?.root}>
      <label className={clx(classes.legend, classNames?.label)}>{name}</label>
      <PhoneNumber
        country={default_country.toLowerCase()}
        onChange={(e) => formikProps?.setFieldValue(name, e)}
        onBlur={formikProps?.handleBlur}
        onFocus={() => formikProps?.setFieldTouched(name, true)}
        containerClass={clx(
          classes.phoneContainerClass,
          classNames?.phoneNumberInputContainer,
          isInvalid && "error",
        )}
        dropdownClass={classNames?.dropdownClass}
        buttonClass={classNames?.buttonClass}
        inputClass={clx(classes.phoneInput, classNames?.phoneNumberInput)}
      />
      {isInvalid && (
        <span className={classes.errorMessage}>{formikProps?.errors?.[name] as string}</span>
      )}
    </div>
  );
};
export const FormikTextArea: FC<FormikTextInputPropsType> = ({
  className,
  isRequired,
  classNames,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <TextArea
      {...field}
      classNames={classNames}
      className={className}
      isError={(meta.touched && meta.error) as boolean}
      errorMessage={meta.touched ? meta.error : ""}
      placeholder={props.name}
      isRequired={isRequired}
    />
  );
};
type FormikRadioOrCheckBoxPropsType = Omit<
  RadioButtonInputPropsType,
  "isError" | "errorMessage" | "label" | "placeholder"
> & { name: string; options: { label: string; value: string }[] };
export const FormikRadio: FC<
  Omit<FormikRadioOrCheckBoxPropsType, "children" | "classNames"> & {
    classNames?: Partial<RadioButtonClassNamesPropsType>;
  }
> = ({ className, classNames, isRequired, control = "radio", options, ...props }) => {
  const [, meta] = useField({
    ...props,
    type: "radio",
  });

  const inputProps = {
    options,
    control,
    className,
    isRequired,
    isError: (meta.touched && meta.error) as boolean,
    errorMessage: meta.error ? meta.error : "",
    placeholder: props.name,
  };

  return (
    <RadioButtonGroup {...inputProps}>
      {options.map(({ label, value }, index) => (
        <RadioButtonFormik
          name={props.name}
          value={value}
          label={label}
          key={index}
          control={control}
          classNames={classNames as RadioButtonClassNamesPropsType}
        />
      ))}
    </RadioButtonGroup>
  );
};

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
