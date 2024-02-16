export type MenuOptionType = {
    name: string;
    uuid: string;
    options: {
        name: string;
        amount: number;
    }[];
    selectedChoices: {
        name: string;
        amount: number;
    }[];
    type: "selection" | "deselection" | "extras";
};
export declare const calculateCartItemOptionsTotal: (options?: string | any) => number;
