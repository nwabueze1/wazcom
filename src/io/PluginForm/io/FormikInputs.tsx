import { FormikProps, useField } from "formik";
import { FC } from "react";
import clx from "classnames";
import { TextInput, TextArea, PhoneNumberInput, SelectInput } from "../../";
import {
  FormikTextInputPropsType,
  RadioButtonFormikPropsType,
  RadioButtonGroup,
} from "./InputGroup";
import { usePluginInputGroup } from "./InputGroup/usePluginInputGroupStyles";
import { FormikSelectPropsType, PhoneNumberInputClassNamesPropsType } from "../type";
import { FormikRadioOrCheckBoxPropsType } from "./type";

export const RadioButtonFormik: FC<RadioButtonFormikPropsType> = ({
  label,
  control,
  multiple,
  classNames,
  ...props
}) => {
  const [field] = useField({ ...props, type: control });
  const classes = usePluginInputGroup();

  return (
    <>
      <label className={clx(classes.radioLabel, classNames?.radioOrCheckboxLabel)} htmlFor={label}>
        <input
          type={control}
          multiple={multiple}
          id={label}
          className={classNames?.radioOrCheckBox}
          {...field}
        />{" "}
        <span>{label}</span>
      </label>
    </>
  );
};

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

export const FormikPhoneNumber: FC<
  Omit<FormikTextInputPropsType, "classNames"> & {
    default_country: string;
    classNames?: Partial<PhoneNumberInputClassNamesPropsType>;
    formikProps?: FormikProps<Record<string, any>>;
  }
> = ({ default_country, classNames, formikProps, name }) => {
  const classes = usePluginInputGroup();
  const isInvalid = formikProps?.touched?.[name] && formikProps?.errors?.[name];

  return (
    <div className={classNames?.root}>
      <label className={clx(classes.legend, classNames?.label)}>{name}</label>

      <PhoneNumberInput
        country={default_country.toLowerCase()}
        onChange={(e: { name: string; value: string }) => formikProps?.setFieldValue(name, e.value)}
        onBlur={() => formikProps?.setFieldTouched(name, true)}
        classNames={{
          container: clx(
            classes.phoneContainerClass,
            classNames?.phoneNumberInputContainer,
            isInvalid && "error",
          ),
          dropdown: classNames?.dropdownClass,
          input: clx(classes.phoneInput, classNames?.phoneNumberInput),
          root: classNames?.phoneNumberInputRoot,
          button: classNames?.buttonClass,
        }}
        value={formikProps?.values?.[name]}
      />
      {isInvalid && (
        <span className={classes.errorMessage}>{formikProps?.errors?.[name] as string}</span>
      )}
    </div>
  );
};

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

export const FormikRadio: FC<Omit<FormikRadioOrCheckBoxPropsType, "children">> = ({
  className,
  classNames,
  isRequired,
  control = "radio",
  options,
  formikProps,
  ...props
}) => {
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
    <RadioButtonGroup {...inputProps} classNames={classNames}>
      {options.map(({ label, value }, index) => (
        <RadioButtonFormik
          name={props.name}
          value={value}
          label={label}
          key={index}
          control={control}
          classNames={classNames}
          formikProps={formikProps}
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
