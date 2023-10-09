import { FC } from "react";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";
import clx from "classnames";
import { RadioButtonInput } from "../../../RadioButtonInput";
import { FormikRadioOrCheckBoxPropsType } from "./type";

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
  const radioInputClass = {
    radioButtonInput: classNames?.radioButtonInput,
    label: clx(classes.checkBoxLabel, classNames?.label),
  };

  const renderOptions = () =>
    options.map(({ label, value }, index) => {
      const handleChange = (e: { name: string; value: any }) => {
        formikProps?.setFieldValue(props.name, e.value);
      };

      return (
        <RadioButtonInput
          key={index}
          label={label}
          onChange={handleChange}
          name={props.name}
          isBooleanValue={false}
          value={value as any}
          checked={formikProps?.values?.[props.name] === value}
          classNames={radioInputClass}
          onBlur={() => formikProps?.setFieldTouched(props?.name, true)}
          className={clx(classes.radioButtonOptionContainer, classNames?.optionContainer)}
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
