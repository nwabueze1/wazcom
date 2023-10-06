export const pluginFormData = {
  form_uuid: "19ad8133-cb92-40e4-9839-e2594d4e4559",
  form: {
    site_uuid: "d93bf217-fe51-44de-ab36-ca9211d12e71",
    title: "Contact us form",
    author: "Basit@smail.com",
    status: "1",
    uuid: "19ad8133-cb92-40e4-9839-e2594d4e4559",
    questions: [
      {
        fields: {
          character_limit: null,
        },
        question: "What is your name",
        is_required: true,
        type: "SHORT_TEXT",
        description: null,
      },
      {
        fields: {
          character_limit: "",
        },
        question: "Describe yourself",
        is_required: true,
        type: "MULTILINE",
        description: null,
      },
      {
        fields: {
          choices: ["Biscuit", "Bread", "Soup", "Stew"],
        },
        question: "What are your favourite foods",
        is_required: true,
        type: "MULTI_CHOICE",
        description: null,
      },
      {
        fields: {
          choices: ["Male", "Female"],
        },
        question: "What is your gender",
        is_required: true,
        type: "SINGLE_CHOICE",
        description: null,
      },
      {
        fields: {
          choices: ["Yes", "No"],
        },
        question: "Are you employed",
        is_required: true,
        type: "YES_OR_NO",
        description: null,
      },
      {
        fields: {
          default_country_code: "NG",
        },
        question: "Enter your phone number",
        is_required: true,
        type: "PHONE_NUMBER",
        description: null,
      },
      {
        fields: [],
        question: "what is your email address",
        is_required: true,
        type: "EMAIL_ADDRESS",
        description: null,
      },
      {
        fields: {
          character_limit: null,
        },
        question: "Enter a web url",
        is_required: true,
        type: "WEB_URL",
        description: null,
      },
      {
        fields: {
          city: "City",
          state: "State",
          zip_code: "Zip code",
          address_line_1: "Address line 1",
          address_line_2: "Address line 2",
          default_country_code: "CN",
        },
        question: "Your address Informations",
        is_required: true,
        type: "ADDRESS",
        description: null,
      },
      {
        fields: [],
        question: "date of birth",
        is_required: true,
        type: "DATE_FORMAT",
        description: null,
      },
      {
        fields: [],
        question: "date of graduation",
        is_required: true,
        type: "DATE_FORMAT",
        description: null,
      },
    ],
    setting: {
      uuid: "e23dde06-ed1c-46eb-b71c-6fecc7e0d6bc",
      end_date: null,
      allow_multiple_responses: true,
      response_limit: 1000000,
      submission_text: "",
      notification_email: "",
      __typename: "FormSetting",
    },
    __typename: "Form",
  },
};
