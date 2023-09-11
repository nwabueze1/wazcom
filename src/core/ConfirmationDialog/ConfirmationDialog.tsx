import React from "react";
import { Modal, Button } from "../";
import { FaTimes } from "react-icons/fa";
import clx from "classnames";
import { ConfirmationDialogProps } from "./types";
import { useConfirmationDialogStyles } from "./styles";

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  title,
  submitText,
  cancelText,
  description,
  isOpen,
  onClose,
  onSubmit,
  className,
  classNames,
}) => {
  const classes = useConfirmationDialogStyles();

  return (
    <Modal open={isOpen} handleClose={onClose} className={classes.root}>
      <div className={clx(classes.container, className)}>
        <div className={classes.header}>
          <h1 className={clx(classes.title, classNames?.titleClass)}>{title}</h1>
          <FaTimes className={classes.icon} onClick={onClose} />
        </div>
        <div className={classes.body}>
          <p className={classes.description}>{description}</p>
        </div>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            className={clx(classes.button, classNames?.buttonClass)}
            onClick={onSubmit}
          >
            {submitText}
          </Button>
          <Button
            variant="outlined"
            className={clx(classes.button, classNames?.buttonClass)}
            onClick={onClose}
          >
            {cancelText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
