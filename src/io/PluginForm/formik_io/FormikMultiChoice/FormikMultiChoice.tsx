import { FC } from "react";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";
import { CheckBoxInput } from "../../../CheckBoxInput";
import clx from "classnames";
import { FormikCheckBoxInputPropsType } from "./types";

export const FormikMultiChoice: FC<FormikCheckBoxInputPropsType> = ({
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
        <CheckBoxInput
          key={index}
          onChange={handleChange}
          name={props.name}
          value={hasValue}
          id={id}
          onBlur={formikProps?.handleBlur}
          classNames={{
            checkBoxInput: clx(classes.checkBox, classNames?.checkboxInput),
            label: clx(classes.checkBoxLabel, classNames?.label),
            input: classNames?.input,
          }}
          label={option.label}
          className={clx(classes.checkboxInputOptionContainer, classNames?.optionContainer)}
        />
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
