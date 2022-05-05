import { FC } from "react";
import { useAddMediaStyles } from "./styles";
import { Button } from "../../../../core/Button";
import { Box, Modal } from "@mui/material";
import { AddMediaProps } from "./types";
import { UploadDialogue } from "./UploadDialogue";

export const AddMedia: FC<AddMediaProps> = ({
  handleFilesSelection,
  handleOpenMedia,
  handleCloseMedia,
  viewOnly,
}) => {
  const classes = useAddMediaStyles();
  const handleOpen = () => handleCloseMedia(true);
  const handleClose = () => handleCloseMedia(false);

  return (
    <div>
      {!viewOnly && (
        <Button color="primary" onClick={handleOpen}>
          Add New
        </Button>
      )}
      <Modal
        className={classes.modalBox}
        open={handleOpenMedia}
        onClose={handleClose}
      >
        <UploadDialogue
          handleCloseMedia={handleCloseMedia}
          handleFilesSelection={handleFilesSelection}
        />
      </Modal>
    </div>
  );
};
