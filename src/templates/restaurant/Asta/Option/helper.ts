import { Option } from "../CartDialog/types";

export const parseSelectedChoices = (selectedOptions: Option[], name: string) => {
    const selectedOption = selectedOptions.find(option => option.name === name);
    if (selectedOption) return selectedOption.selectedChoices;
    return [];
}