export type OrderDialogProps = {
    itemUuid?: string;
    handleClose: () => void;
    setContextProps?: (contextProps: {
        [key: string]: any;
    }) => void;
};
export type Option = {
    name: string;
    type: string;
    selectedChoices: {
        name: string;
        amount: string;
    }[];
};
