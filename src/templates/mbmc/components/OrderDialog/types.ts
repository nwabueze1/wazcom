export type OrderDialogProps = {
    itemUuid?: string;
    handleClose: () => void;
};

export type Option = {
    name: string;
    type: string;
    selectedChoices: { name: string; amount: string }[];
};
