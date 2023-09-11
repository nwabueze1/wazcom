import { FC } from "react";
import { Modal } from "../Modal";
import { DialogProps } from "./types";
import { useDialogStyles } from "./styles";

export const Dialog: FC<DialogProps> = ({ open = false, handleClose, children }) => {
  const classes = useDialogStyles();

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className={classes.root}>{children}</div>
    </Modal>
  );
};
