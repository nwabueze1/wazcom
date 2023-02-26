import { Option } from "./Buzz/CartDialog";
import { CoreCartItemFields } from "./types/CoreCartItemFields";
import { CoreMenuFields } from "./types/CoreMenuFields";
import { CoreMenuItemFields } from "./types/CoreMenuItemFields";

export const calculateOptionsTotal = (options: Option[], quantity: number) => {
  if (!options || options.length === 0) return 0;
  let additions: any = options
    .filter((option) => option.type !== "deselection")
    .map((option) => option.selectedChoices.map((choice) => Number(choice.amount)));
  let subtractions: any = options
    .filter((option) => option.type === "deselection")
    .map((option) => option.selectedChoices.map((choice) => Number(choice.amount)));
  additions = [...additions];
  subtractions = [...subtractions];
  additions = additions.reduce((sum: number, num: number) => sum + num, 0);
  subtractions = subtractions.reduce((sum: number, num: number) => sum - num, 0);
  return quantity * (additions + subtractions);
};

export const parseOptionString = (item: CoreCartItemFields) => {
  if (!item.options) "";
  const options = JSON.parse(item.options) as Option[];
  const parsedOptions = options
    .map((option) => option.selectedChoices.map((choice) => choice.name).join(", "))
    .join(", ");
  return parsedOptions.length > 150 ? parsedOptions.slice(0, 145) + "..." : parsedOptions;
};

export const findMenuItem = (menus: CoreMenuFields[], itemId: number) => {
  let menuItems: any = menus.map((menu) => menu.activeMenuItems) as CoreMenuItemFields[][];
  let newMenuItems: CoreMenuItemFields[] = [];
  menuItems.forEach((items: CoreMenuItemFields[]) => {
    newMenuItems = [...newMenuItems, ...items];
  });
  menuItems = newMenuItems;
  return menuItems.find((item: any) => item.id.toString() === itemId.toString());
};
