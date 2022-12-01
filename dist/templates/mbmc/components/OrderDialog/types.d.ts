export declare type OrderDialogProps = {
    itemUuid?: string;
    handleClose: () => void;
    setContextProps?: (contextProps: {
        [key: string]: any;
    }) => void;
};
export declare type Option = {
    name: string;
    type: string;
    selectedChoices: {
        name: string;
        amount: string;
    }[];
};
