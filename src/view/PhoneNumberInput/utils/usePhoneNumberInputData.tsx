import { ComponentPropsType } from "core/ComponentProps/types";

const usePhoneNumberInputData = () => {
  const handleChange = (e: any) => {};
  const data: Partial<ComponentPropsType>[] = [
    {
      name: "country",
      description:
        "This is used to set the default country of the phone number input which will help to load the country tel code on component render.",
      default: "undefined",
    },
    {
      name: "value",
      description: "This is used to set the value of the phone number input.",
      default: "null",
      control: {
        name: "value",
        onChange: handleChange,
        type: "tel",
      },
    },
  ];
};
