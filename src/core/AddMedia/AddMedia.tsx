import { FC } from "react";
import { useAddMediaStyles, Backdrop, StyledModal } from "./styles";
import { CloseSharp } from "@mui/icons-material";
import { Button } from "../Button";
import { Box } from "@mui/material";
import { AddMediaProps } from "./types";

export const AddMedia: FC<AddMediaProps> = ({
  handleFilesSelection,
  open,
  setOpen,
}) => {
  const classes = useAddMediaStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color="primary" onClick={handleOpen}>
        Add New
      </Button>
      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
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
      </StyledModal>
    </div>
  );
};
