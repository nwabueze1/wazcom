import * as Yup from "yup";
export var buildValidationSchema = function (questions) {
    var schemaObject = {};
    var phoneNumberRegExp = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
    var addressSchema = {};
    questions.forEach(function (_a) {
        var uuid = _a.uuid, type = _a.type, is_required = _a.is_required, fields = _a.fields;
        if (is_required) {
            var requiredMessage = "This field is required";
            switch (type) {
                case "SHORT_TEXT":
                case "MULTILINE":
                case "DROP_DOWN":
                    schemaObject[uuid] = Yup.string().required(requiredMessage).min(3).label("This field");
                    break;
                case "SINGLE_CHOICE":
                case "YES_OR_NO":
                    schemaObject[uuid] = Yup.string().required(requiredMessage);
                    break;
                case "PHONE_NUMBER":
                    schemaObject[uuid] = Yup.string()
                        .matches(phoneNumberRegExp, "This field must be a valid phone number")
                        .required(requiredMessage);
                    break;
                case "EMAIL_ADDRESS":
                    schemaObject[uuid] = Yup.string()
                        .email("This field must be a valid email address")
                        .required(requiredMessage);
                    break;
                case "WEB_URL":
                case "DOC":
                case "VIDEO":
                case "PHOTO":
                    schemaObject[uuid] = Yup.string()
                        .url("This field must be a valid url")
                        .required(requiredMessage);
                    break;
                case "OPINION":
                case "RATING":
                    schemaObject[uuid] = Yup.number()
                        .required(requiredMessage)
                        .min(1, (fields === null || fields === void 0 ? void 0 : fields["from"])
                        ? "This field cannot be less than ".concat(fields === null || fields === void 0 ? void 0 : fields["from"])
                        : requiredMessage);
                    break;
                case "DATE_FORMAT":
                    schemaObject[uuid] = Yup.date().required(requiredMessage);
                    break;
                case "MULTI_CHOICE":
                    schemaObject[uuid] = Yup.array().min(1, "You must select at least one option").required();
                    break;
                case "ADDRESS":
                    Object.values(fields).forEach(function (value) {
                        return (addressSchema[value] = Yup.string().required("This field is required"));
                    });
                    schemaObject[uuid] = Yup.object().shape(addressSchema);
                    break;
                default:
                    break;
            }
        }
    });
    return Yup.object().shape(schemaObject);
};
