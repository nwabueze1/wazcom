import { FC } from "react";
import { useAddMediaStyles } from "./styles";
import { CloseSharp } from "@mui/icons-material";
import { Button } from "../../../../core/Button";
import { Box, Modal } from "@mui/material";
import { AddMediaProps } from "./types";

export const AddMedia: FC<AddMediaProps> = ({
  handleFilesSelection,
  handleOpenMedia,
  handleCloseMedia,
}) => {
  const classes = useAddMediaStyles();
  const handleOpen = () => handleCloseMedia(true);
  const handleClose = () => handleCloseMedia(false);

  return (
    <div>
      <Button color="primary" onClick={handleOpen}>
        Add New
      </Button>
      <Modal
        className={classes.modalBox}
        open={handleOpenMedia}
        onClose={handleClose}
      >
        <Box className={classes.box}>
          <div className={classes.dialogueHeader}>
            <p>Upload your files</p>
            <CloseSharp onClick={handleClose} className={classes.close} />
          </div>
          <hr />
          <div className={classes.content}>
            <p className={classes.text}>Drop file to add to media library</p>
            <p className={classes.or}>or</p>
            <div className={classes.btn}>
              <Button color="primary" onClick={handleFilesSelection}>
                choose file
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
