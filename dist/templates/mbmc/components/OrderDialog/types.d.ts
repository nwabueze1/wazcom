export declare type OrderDialogProps = {
    itemUuid?: string;
    handleClose: () => void;
};
export declare type Option = {
    name: string;
    type: string;
    selectedChoices: {
        name: string;
        amount: string;
    }[];
};
