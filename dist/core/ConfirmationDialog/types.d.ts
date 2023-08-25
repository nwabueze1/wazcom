export type ConfirmationDialogProps = {
    status?: boolean;
    statusText?: boolean;
    title?: string;
    description?: string;
    submitText?: string;
    cancelText?: string;
    isOpen: boolean;
    className?: string;
    onClose: () => void;
    onSubmit: () => void;
};
