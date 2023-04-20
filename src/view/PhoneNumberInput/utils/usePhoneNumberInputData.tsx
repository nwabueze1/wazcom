import { ComponentPropsType } from "../../../core/ComponentProps/types";
import { useState } from "react";

const initialState = {
  country: "",
  autoFormat: false,
  enableAreaCodes: false,
  disableDropDown: false,
  defaultErrorMessage: "",
  specialLabel: "",
  value: "",
};
export const usePhoneNumberInputData = () => {
  const [state, setState] = useState(initialState);
  const handleChange = (e: any) => {
    typeof e === "object"
      ? setState({ ...state, [e.name]: e.value })
      : setState({ ...state, value: `${e}` });
  };
  const data: Partial<ComponentPropsType>[] = [
    {
      name: "value",
      description: "This represents the value of the Input component.",
      default: "null",
      control: {
        name: "value",
        onChange: handleChange,
        type: "tel",
      },
    },
    {
      name: "country",
      description:
        "This is used to set the default country of the phone number input which will help to load the country tel code on component render.",
      default: "undefined",
      control: {
        name: "country",
        onChange: handleChange,
        type: "text",
      },
    },
    {
      name: "autoFormat",
      description:
        "This props just as the name implies is used to tell the phone-number-input to automatically format.",
      default: "false",
      control: {
        name: "autoFormat",
        type: "checkbox",
        onChange: handleChange,
      },
    },
    {
      name: "enableAreaCodes",
      description: "This represents whether area codes are enabled or not.",
      default: "false",
      control: {
        name: "enableAreaCodes",
        type: "checkbox",
        onChange: handleChange,
      },
    },
    {
      name: "disableDropDown",
      description: "This determines if the Country codes dropdown is disabled or not.",
      default: "false",
      control: {
        name: "disableDropDown",
        type: "checkbox",
        onChange: handleChange,
      },
    },
    {
      name: "defaultErrorMessage",
      description: "This represents the error message displayed for the Input component.",
      default: "undefined",
      control: {
        type: "text",
        onChange: handleChange,
        name: "defaultErrorMessage",
      },
    },
    {
      name: "specialLabel",
      description: "This prop is used to set label for the phone number input",
      default: "undefined",
      control: {
        type: "text",
        onChange: handleChange,
        name: "specialLabel",
      },
    },
    {
      name: "regions",
      description: "This represents all regions included in the dropdown e.g [af, eu].",
      default: "[all regions]",
    },
    {
      name: "onlyCountries",
      description:
        "This is used to show which countries that are accepted in the phone number input, this will show only the countries specified here in the dropdown.",
      default: "all",
    },
    {
      name: "excludeCountries",
      description:
        "This prop is used to exclude countries that should not be shown in the dropdown. Countries whose codes are listed here will not be shown in the phone number input dropdown.",
      default: "empty array.",
    },
    {
      name: "placeholder",
      description: "This prop is used to specify the placeholder of the input.",
      default: "undefined",
    },
    {
      name: "searchPlaceholder",
      description:
        "This prop is used to set the placeholder of the dropdown for searching a country",
      default: "undefined",
    },
    {
      name: "searchNotFound",
      description:
        "This prop is used to specify the text that should be shown if the searched country was not found.",
      default: "undefined",
    },
  ];

  return {
    data,
    state,
    handleReset: () => setState(initialState),
  };
};
