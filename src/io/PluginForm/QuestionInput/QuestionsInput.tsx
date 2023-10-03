import { FC } from "react";
import clx from "classnames";

import { FormikRadio, FormikSelect, FormikTextArea, FormikTextInput } from "../io";
import { capitalizeFirstChar } from "./CapitalizeFirstCharacter";
import { useQuestionInputStyles } from "./style";
import { QuestionInputPropsType } from "./type";
import { FormikProps } from "formik";
import { FormikPhoneNumber } from "../io/FormikInputs";

export const QuestionsInput: FC<
  QuestionInputPropsType & { formikProps?: FormikProps<Record<string, any>> }
> = ({ name, type, fields, is_required, classNames, formikProps }) => {
  const classes = useQuestionInputStyles();

  const commonInputProps = {
    name,
    isRequired: is_required,
    placeholder: name,
    classNames: classNames?.textField,
    formikProps,
  };
  const renderFields = () => {
    let addressKeys: string[] = [];
    let options: { label: string; value: string }[] = [];

    switch (type) {
      case "SHORT_TEXT":
      case "PHOTO":
      case "WEB_URL":
      case "EMAIL_ADDRESS":
        return <FormikTextInput {...commonInputProps} />;

      case "MULTILINE":
        return <FormikTextArea {...commonInputProps} classNames={classNames?.textArea} />;

      case "YES_OR_NO":
      case "SINGLE_CHOICE":
      case "MULTI_CHOICE":
        options = (fields?.choices as string[]).map((field) => ({
          label: field,
          value: field,
        }));
        return (
          <FormikRadio
            options={options}
            name={name}
            control={type === "MULTI_CHOICE" ? "checkbox" : "radio"}
            multiple={type === "MULTI_CHOICE"}
            classNames={classNames?.radioInputOrCheckbox}
            formikProps={formikProps}
          />
        );

      case "DATE_FORMAT":
        return (
          <div>
            <label className={clx(classes.legend, classes.label, classNames?.textField?.label)}>
              {capitalizeFirstChar(name)}
            </label>
            <FormikTextInput {...commonInputProps} type={"date"} />
          </div>
        );

      case "ADDRESS":
        addressKeys = Object.keys(fields as Record<string, string>);
        return (
          <fieldset className={clx(classes.fieldSet, classNames?.addressInput?.fieldset)}>
            <legend className={clx(classes.legend, classNames?.addressInput?.legend)}>
              {name}
            </legend>
            {addressKeys.map((key, index) => (
              <FormikTextInput
                is_address={true}
                {...commonInputProps}
                name={`${name}.${fields?.[key]}`}
                key={index}
                placeholder={index === addressKeys.length - 1 ? "Country" : fields?.[key]}
              />
            ))}
          </fieldset>
        );

      case "DROP_DOWN":
        options = (fields?.choices as string[]).map((choice) => ({
          label: choice.toLocaleUpperCase(),
          value: choice,
        }));
        return (
          <FormikSelect
            classNames={classNames?.selectInput}
            formikProps={formikProps}
            name={name}
            options={options}
          />
        );

      case "PHONE_NUMBER":
        return (
          <FormikPhoneNumber
            name={name}
            formikProps={formikProps}
            default_country={"NG"}
            classNames={classNames?.phoneNumberInput}
          />
        );

      default:
        return null;
    }
  };

  return <div className={classes.inputContainer}>{renderFields()}</div>;
};
