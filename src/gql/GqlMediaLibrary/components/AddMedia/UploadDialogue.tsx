import React from "react";
import { useAddMediaStyles } from "./styles";
import { CloseSharp } from "@mui/icons-material";
import { Button } from "../../../../core/Button";
import { Box } from "@mui/material";
import { DialogueProps } from "./types";
import clx from "classnames";

export const UploadDialogue: React.FC<DialogueProps> = ({
  className,
  handleCloseMedia,
  handleFilesSelection,
  showHeader = true,
}) => {
  const classes = useAddMediaStyles();
  return (
    <Box className={clx(className, classes.box)}>
      {showHeader && (
        <>
          <div className={classes.dialogueHeader}>
            <p>Upload your files</p>
            <CloseSharp
              onClick={() => handleCloseMedia}
              className={classes.close}
            />
          </div>
          <hr />
        </>
      )}
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
  );
};
