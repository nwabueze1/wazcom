import { FC } from "react";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";
import clx from "classnames";
import { RadioButtonInput } from "../../../RadioButtonInput";
import { FormikRadioOrCheckBoxPropsType } from "./type";
import { usePalletteStyles } from "./usePalletteStyles";
import { FormPallette } from "../../type";

export const FormikSingleChoice: FC<Omit<FormikRadioOrCheckBoxPropsType, "children">> = ({
  className,
  classNames,
  isRequired,
  options,
  formikProps,
  ...props
}) => {
  const classes = usePluginInputGroup();
  const isError = formikProps?.touched?.[props?.name] && formikProps?.errors?.[props?.name];
  const errorMessage = formikProps?.errors?.[props?.name];
  const paletteStyles = usePalletteStyles(props?.palette as FormPallette);
  const radioInputClass = {
    radioButtonInput: clx(classes.radioButtonInput, classNames?.radioButtonInput),
    label: clx(
      classes.checkBoxLabel,
      classes.radioInputLabel,
      paletteStyles?.input,
      classNames?.label,
    ),
    input: classNames?.input,
    root: clx(paletteStyles?.root, (classNames as any)?.root),
  };

  const renderOptions = () =>
    options?.map(({ label, value }, index) => {
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
      <div className={clx(classes.fieldSet, isError && "error", classNames?.fieldset)}>
        <p className={clx(classes.legend, classNames?.legend, paletteStyles?.label)}>
          {props?.placeholder} {isRequired && <sup>*</sup>}
        </p>
        {renderOptions()}
      </div>
      {isError && errorMessage && (
        <span className={clx(classes.errorMessage, classNames?.errorMessage)}>
          {errorMessage as string}
        </span>
      )}
    </div>
  );
};
