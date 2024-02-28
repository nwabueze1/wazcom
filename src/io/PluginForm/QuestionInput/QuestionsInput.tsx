import { FC } from "react";
import clx from "classnames";
import {
  FormikSingleChoice,
  FormikSelect,
  FormikTextArea,
  FormikTextInput,
  FormikMultiChoice,
  FormikOpinionScale,
  FormikRatingInput,
  usePalletteStyles,
} from "../formik_io";
import { useQuestionInputStyles } from "./style";
import { QuestionInputPropsType } from "./type";
import { FormikProps } from "formik";
import { FormPallette } from "../type";

export const QuestionsInput: FC<
  QuestionInputPropsType & { formikProps?: FormikProps<Record<string, any>> }
> = ({
  name,
  type,
  fields,
  is_required,
  classNames,
  formikProps,
  mscProperties,
  label,
  palette,
}) => {
  const classes = useQuestionInputStyles();
  const paletteStyles = usePalletteStyles(palette as FormPallette);

  const commonInputProps = {
    name,
    isRequired: is_required,
    placeholder: label,
    classNames: classNames?.textField,
    formikProps,
    palette,
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
            placeholder={label}
            palette={palette}
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
            placeholder={label}
            pallette={palette}
          />
        );

      case "PHONE_NUMBER":
        return <FormikTextInput {...commonInputProps} type="tel" />;

      case "DATE_FORMAT":
        return (
          <FormikTextInput
            {...commonInputProps}
            type={"date"}
            placeholder={""}
            label={commonInputProps.placeholder}
          />
        );

      case "ADDRESS":
        addressKeys = Object.keys(fields as Record<string, string>);
        return (
          <div className={clx(classes.fieldSet, classNames?.addressInput?.fieldset)}>
            <label
              className={clx(
                classes.legend,
                paletteStyles?.label,
                classNames?.addressInput?.legend,
              )}
            >
              {label}
            </label>
            {addressKeys.map((key, index) => (
              <FormikTextInput
                is_address={true}
                {...commonInputProps}
                name={`${name}.${fields?.[key]}`}
                key={index}
                placeholder={index === addressKeys.length - 1 ? "Country" : fields?.[key]}
              />
            ))}
          </div>
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
