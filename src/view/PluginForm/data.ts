export const pluginFormData = {
  form_uuid: "2c149824-4595-49b4-b44c-277b568f52a6",
  form: {
    uuid: "2c149824-4595-49b4-b44c-277b568f52a6",
    site_uuid: "b7a6df60-3fd5-4666-b481-5055608228ad",
    title: "Contact us form",
    author: "createaccount@mail.com",
    status: "1",
    questions: [
      {
        uuid: "31618ad1-0957-453c-9f75-570c540191eb",
        question: "Your name",
        description: null,
        type: "SHORT_TEXT",
        is_required: true,
        fields: {
          character_limit: null,
        },
        __typename: "Question",
      },
      {
        uuid: "17664899-0dc6-47e2-9ac4-829370b8f7e3",
        question: "Your phone number",
        description: null,
        type: "PHONE_NUMBER",
        is_required: true,
        fields: {
          default_country_code: "US",
        },
        __typename: "Question",
      },
      {
        uuid: "a46bbda2-8c12-4a50-b097-79c236566b4a",
        question: "Your Email",
        description: null,
        type: "EMAIL_ADDRESS",
        is_required: true,
        fields: [],
        __typename: "Question",
      },
      {
        uuid: "41a2d1a8-8910-428c-81d3-66fdd66a3662",
        question: "Send us a message",
        description: null,
        type: "MULTILINE",
        is_required: true,
        fields: {
          character_limit: "",
        },
        __typename: "Question",
      },
    ],
    setting: {
      uuid: "e8f4edf0-99f8-42f9-b5a2-d4675e8cf31b",
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
