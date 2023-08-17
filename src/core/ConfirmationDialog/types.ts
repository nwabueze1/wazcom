export type ConfirmationDialogProps = {
  status?: boolean;
  statusText?: boolean;
  title?: string;
  description?: string;
  submitText?: string;
  cancelText?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};
