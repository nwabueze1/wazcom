import * as Yup from "yup";
import { QuestionType } from "./type";

export const buildValidationSchema = (questions: QuestionType[]) => {
  const schemaObject: Record<any, any> = {};
  const phoneNumberRegExp =
    /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

  const addressSchema: Record<string, any> = {};
  questions.forEach(({ question, type, is_required, fields }) => {
    if (is_required) {
      const requiredMessage = "This field is required";
      switch (type) {
        case "SHORT_TEXT":
        case "MULTILINE":
        case "DROP_DOWN":
          schemaObject[question] = Yup.string()
            .required(requiredMessage)
            .min(3)
            .label("This field");
          break;
        case "SINGLE_CHOICE":
        case "YES_OR_NO":
          schemaObject[question] = Yup.string().required(requiredMessage);
          break;
        case "PHONE_NUMBER":
          schemaObject[question] = Yup.string()
            .matches(phoneNumberRegExp, "This field must be a valid phone number")
            .required(requiredMessage);
          break;
        case "EMAIL_ADDRESS":
          schemaObject[question] = Yup.string()
            .email("This field must be a valid email address")
            .required(requiredMessage);
          break;
        case "WEB_URL":
        case "DOC":
        case "VIDEO":
        case "PHOTO":
          schemaObject[question] = Yup.string()
            .url("This field must be a valid url")
            .required(requiredMessage);
          break;
        case "OPINION":
        case "RATING":
          schemaObject[question] = Yup.number()
            .required(requiredMessage)
            .min(
              1,
              fields?.["from"]
                ? `This field cannot be less than ${fields?.["from"]}`
                : requiredMessage,
            );
          break;
        case "DATE_FORMAT":
          schemaObject[question] = Yup.date().required(requiredMessage);
          break;
        case "MULTI_CHOICE":
          schemaObject[question] = Yup.array()
            .min(1, "You must select at least one option")
            .required();
          break;
        case "ADDRESS":
          Object.values(fields).forEach(
            (value) =>
              (addressSchema[value as string] = Yup.string().required("This field is required")),
          );
          schemaObject[question] = Yup.object().shape(addressSchema);
          break;
        default:
          break;
      }
    }
  });

  return Yup.object().shape(schemaObject);
};
