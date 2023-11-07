import React from "react";
import { useAddMediaStyles } from "./styles";
import { MdClose as CloseSharp } from "react-icons/md";
import { Button } from "../../../../core";
import { Box } from "@mui/material";
import { DialogueProps } from "./types";
import clx from "classnames";

export const UploadDialogue: React.FC<DialogueProps> = ({
  className,
  handleCloseMedia,
  handleFilesSelection,
  showHeader = true,
  handleMediaAction,
  setActiveTab,
}) => {
  const classes = useAddMediaStyles();

  const handleFileChange = (event: React.ChangeEvent<any>) => {
    if (!event.target.files || event.target.files === 0) return;
    const file = event.target.files[0];
    handleMediaAction?.("add", file);
    setActiveTab?.(1);
  };

  return (
    <Box className={clx(className, classes.box)}>
      {showHeader && (
        <>
          <div className={classes.dialogueHeader}>
            <p>Upload your files</p>
            <CloseSharp onClick={() => handleCloseMedia} className={classes.close} />
          </div>
          <hr />
        </>
      )}
      <div className={classes.content}>
        <p className={classes.text}>Drop file to add to media library</p>
        <p className={classes.or}>or</p>
        <div className={classes.btn}>
          <Button onClick={handleFilesSelection}>choose file</Button>
        </div>
        <input
          type="file"
          accept="image/*"
          className={classes.uploader}
          onChange={handleFileChange}
        />
      </div>
    </Box>
  );
};
