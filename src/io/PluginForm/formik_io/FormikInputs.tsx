import { FormikProps } from "formik";
import { FC } from "react";
import clx from "classnames";
import {
  CheckBoxInput,
  PhoneNumberInput,
  SelectInput,
  TextArea,
  TextInput,
  RadioButtonInput,
} from "../../";
import { usePluginInputGroup } from "./usePluginInputGroupStyles";
import { FormikSelectPropsType, PhoneNumberInputClassNamesPropsType } from "../type";
import {
  FormikCheckBoxInputPropsType,
  FormikRadioOrCheckBoxPropsType,
  FormikTextInputPropsType,
} from "./type";

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
  options,
  formikProps,
  ...props
}) => {
  const classes = usePluginInputGroup();
  const isError = formikProps?.touched?.[props.name] && formikProps?.errors?.[props.name];
  const errorMessage = formikProps?.errors?.[props.name];

  const renderOptions = () =>
    options.map(({ label, value }, index) => {
      const id = props.name + label;

      const handleChange = (e: { name: string; value: any }) => {
        formikProps?.setFieldValue(props.name, e.value);
      };

      return (
        <article
          key={index}
          className={clx(classes.radioButtonOptionContainer, classNames?.optionContainer)}
        >
          <RadioButtonInput
            id={id}
            onChange={handleChange}
            name={props.name}
            hasBooleanValue={false}
            value={value as any}
            checked={formikProps?.values?.[props.name] === value}
            classNames={{ radioButtonInput: classNames?.radioButtonInput }}
            onBlur={() => formikProps?.setFieldTouched(props?.name, true)}
          />
          <label htmlFor={id} className={clx(classes.checkBoxLabel, classNames?.label)}>
            {label}
          </label>
        </article>
      );
    });

  return (
    <div className={className}>
      <fieldset className={clx(classes.fieldSet, isError && "error", classNames?.fieldset)}>
        <legend className={clx(classes.legend, classNames?.legend)}>
          {props.name} {isRequired && <sup>*</sup>}
        </legend>
        {renderOptions()}
      </fieldset>
      {isError && errorMessage && (
        <span className={clx(classes.errorMessage, classNames?.errorMessage)}>
          {errorMessage as string}
        </span>
      )}
    </div>
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

export const FormikCheckBox: FC<FormikCheckBoxInputPropsType> = ({
  className,
  classNames,
  isRequired,
  options,
  formikProps,
  ...props
}) => {
  const classes = usePluginInputGroup();
  const isError = formikProps?.touched?.[props.name] && formikProps?.errors?.[props.name];
  const errorMessage = formikProps?.errors?.[props.name];

  const renderOptions = () =>
    options.map((option, index) => {
      const id = props.name + option.value;
      const hasValue: boolean = props.multiple
        ? formikProps?.values?.[props?.name]?.includes(option.value)
        : formikProps?.values?.[props?.name];

      const handleChange = (e: { name: string; value: boolean }) => {
        const isChecked = e.value;
        if (!props.multiple) {
          formikProps?.setFieldValue(props.name, isChecked ? option.value : null);
        } else {
          const values = isChecked
            ? [...formikProps?.values?.[props.name], option.value]
            : formikProps?.values?.[props.name].filter((value: string) => value !== option.value);
          formikProps?.setFieldValue(props.name, values);
        }
      };

      return (
        <article key={index} className={classes.checkboxInputOptionContainer}>
          <CheckBoxInput
            onChange={handleChange}
            name={props.name}
            value={hasValue}
            id={id}
            onBlur={formikProps?.handleBlur}
            classNames={{
              checkBoxInput: clx(classes.checkBox, classNames?.checkboxInput),
            }}
          />{" "}
          <label htmlFor={id} className={clx(classes.checkBoxLabel, classNames?.label)}>
            {option.label}
          </label>
        </article>
      );
    });

  return (
    <div className={className}>
      <fieldset className={clx(classes.fieldSet, isError && "error", classNames?.fieldset)}>
        <legend className={clx(classes.legend, classNames?.legend)}>
          {props.name} {isRequired && <sup>*</sup>}
        </legend>
        {renderOptions()}
      </fieldset>
      {isError && errorMessage && (
        <span className={clx(classes.errorMessage, classNames?.errorMessage)}>
          {errorMessage as string}
        </span>
      )}
    </div>
  );
};
