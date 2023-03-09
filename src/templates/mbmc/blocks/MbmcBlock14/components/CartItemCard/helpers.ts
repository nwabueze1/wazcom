import { Option } from "../../../../components";

export const parseOptionString = (options: Option[]) => {
  const parsedOptions = options
    .map((option) => option.selectedChoices.map((choice) => choice.name).join(", "))
    .join(", ");
  return parsedOptions.length > 150 ? parsedOptions.slice(0, 145) + "..." : parsedOptions;
};
