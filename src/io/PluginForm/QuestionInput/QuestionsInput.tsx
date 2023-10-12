import { FC } from "react";
import clx from "classnames";
import {
  FormikSingleChoice,
  FormikSelect,
  FormikTextArea,
  FormikTextInput,
  FormikMultiChoice,
  FormikPhoneNumber,
  FormikOpinionScale,
  FormikRatingInput,
} from "../formik_io";
import { useQuestionInputStyles } from "./style";
import { QuestionInputPropsType } from "./type";
import { FormikProps } from "formik";
import { capitalizeFirstChar } from "../helpers";

export const QuestionsInput: FC<
  QuestionInputPropsType & { formikProps?: FormikProps<Record<string, any>> }
> = ({ name, type, fields, is_required, classNames, formikProps, mscProperties }) => {
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
      case "DOC":
      case "VIDEO":
        return <FormikTextInput {...commonInputProps} />;

      case "MULTILINE":
        return <FormikTextArea {...commonInputProps} classNames={classNames?.textArea} />;

      case "YES_OR_NO":
      case "SINGLE_CHOICE":
        options = (fields?.choices as string[]).map((field) => ({
          label: field,
          value: field,
        }));
        return (
          <FormikSingleChoice
            options={options}
            name={name}
            control={"radio"}
            classNames={classNames?.radioButtonInput}
            formikProps={formikProps}
          />
        );

      case "MULTI_CHOICE":
        options = (fields?.choices as string[]).map((field) => ({
          label: field,
          value: field,
        }));
        return (
          <FormikMultiChoice
            options={options}
            name={name}
            multiple={options.length > 1}
            classNames={classNames?.checkBoxInput}
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
            default_country={(fields?.default_country_code as string).toUpperCase()}
            classNames={classNames?.phoneNumberInput}
          />
        );
      case "OPINION":
        return (
          <FormikOpinionScale
            {...commonInputProps}
            label={commonInputProps.placeholder}
            classNames={{
              ...classNames?.opinionScale,
              label: clx(classes?.ratingLabel, classNames?.opinionScale?.label),
            }}
            variant={mscProperties?.opinionScale?.variant ?? "contained"}
          />
        );

      case "RATING":
        return (
          <FormikRatingInput
            {...commonInputProps}
            label={commonInputProps.placeholder}
            classNames={{
              ...classNames?.ratingInput,
              label: clx(classes?.ratingLabel, classNames?.ratingInput?.label),
            }}
            variant={mscProperties?.rating?.variant ?? "contained"}
            min={Number(fields?.["from"]) ?? 1}
            max={Number(fields?.["to"]) ?? 5}
          />
        );

      default:
        return null;
    }
  };

  return <div className={classes.inputContainer}>{renderFields()}</div>;
};
