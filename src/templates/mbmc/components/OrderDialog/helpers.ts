import { Option } from "./types";

export const calculateOptionsTotal = (options: Option[], quantity: number) => {
    if (!options || options.length === 0) return 0;
    let additions: any = options
        .filter((option) => option.type !== "deselection")
        .map((option) => option.selectedChoices.map((choice) => Number(choice.amount)));
    let subtractions: any = options
        .filter((option) => option.type === "deselection")
        .map((option) => option.selectedChoices.map((choice) => Number(choice.amount)));
    additions = [].concat.apply([], additions);
    subtractions = [].concat.apply([], subtractions);
    additions = additions.reduce((sum: number, num: number) => sum + num, 0);
    subtractions = subtractions.reduce((sum: number, num: number) => sum - num, 0);
    return quantity * (additions + subtractions);
};
