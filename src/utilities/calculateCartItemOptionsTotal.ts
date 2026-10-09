import { convertNumberTo2DecimalPlace } from "./convertNumberTo2DecimalPlace";

export type MenuOptionType = {
  name: string;
  uuid: string;
  options: { name: string; amount: number }[];
  selectedChoices: { name: string; amount: number }[];
  type: "selection" | "deselection" | "extras";
};

export const calculateCartItemOptionsTotal = (options?: string | any): number => {
  if (!options || typeof options !== "string") return 0.0;

  const optionsArray: MenuOptionType[] = JSON.parse(options || "[]") ?? [];
  if (!Array.isArray(optionsArray)) return 0.0;

  const result = optionsArray.reduce(
    (a, option) =>
      a +
      option.selectedChoices.reduce(
        (a, b) => a + (option.type === "deselection" ? -Number(b.amount) : Number(b.amount)),
        0,
      ),
    0,
  );

  return convertNumberTo2DecimalPlace(result);
};
