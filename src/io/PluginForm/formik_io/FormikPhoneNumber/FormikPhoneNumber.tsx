import { FC } from "react";
import { PhoneNumberInputClassNamesPropsType } from "../../type";
import { FormikProps } from "formik";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";
import clx from "classnames";
import { PhoneNumberInput } from "../../../PhoneNumberInput";
import { FormikTextInputPropsType } from "../FormikTextInput";

export const FormikPhoneNumber: FC<
  Omit<FormikTextInputPropsType, "classNames"> & {
    default_country: string;
    classNames?: Partial<PhoneNumberInputClassNamesPropsType>;
    formikProps?: FormikProps<Record<string, any>>;
  }
> = ({ default_country, classNames, formikProps, name }) => {
  const classes = usePluginInputGroup();
  const isInvalid = formikProps?.touched?.[name] && formikProps?.errors?.[name];

  const handleChange = (value: string) => {
    formikProps?.setFieldValue(name, value);
  };

  return (
    <div className={classNames?.root}>
      <PhoneNumberInput
        country={default_country.toLowerCase()}
        onChange={handleChange}
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
        placeholder={name}
      />
      {isInvalid && (
        <span className={classes.errorMessage}>{formikProps?.errors?.[name] as string}</span>
      )}
    </div>
  );
};
