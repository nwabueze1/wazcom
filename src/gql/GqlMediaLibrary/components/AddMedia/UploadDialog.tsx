import React from "react";
import { useAddMediaStyles } from "./styles";
import { Button } from "../../../../core";
import { Box } from "@mui/material";
import { DialogProps } from "./types";
import clx from "classnames";
import { MdClose } from "react-icons/md";

export const UploadDialog: React.FC<DialogProps> = ({
    className,
    handleFilesSelection,
    showHeader = true,
    handleMediaAction,
    handleCloseMedia,
}) => {
    const classes = useAddMediaStyles();

    const handleFileChange = (event: React.ChangeEvent<any>) => {
        if (!event.target.files || event.target.files === 0) return;
        handleMediaAction?.("add", Array.from(event.target.files));
        handleCloseMedia(false);
    };

    return (
        <>
            <Box className={clx(className, classes.box)}>
                {showHeader && (
                    <>
                        <div className={classes.dialogueHeader}>
                            <p>Upload your files</p>
                            <MdClose
                                onClick={() => handleCloseMedia(false)}
                                className={classes.close}
                            />
                        </div>
                        <hr />
                    </>
                )}
                <div className={classes.dropBox}>
                    <div className={classes.outline}>
                        <div className={classes.content}>
                            <p className={classes.text}>Drop file to add to media library</p>
                            <p className={classes.or}>or</p>
                            <Button className={clx(classes.btn, classes.uploadBtn)} onClick={handleFilesSelection}>
                                Choose file
                            </Button>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            className={classes.uploader}
                            onChange={handleFileChange}
                            multiple
                        />
                    </div>
                </div>
            </Box>
        </>
    );
};
