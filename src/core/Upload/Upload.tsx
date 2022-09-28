import { FC } from "react";
import { uploadStyles } from "./styles";
import { UploadProps } from "./types";
import { Typography } from "@mui/material";
import { FaRegFileAlt } from "react-icons/fa";
import clx from "classnames";

export const Upload: FC<UploadProps> = ({ className, width }) => {
    const classes = uploadStyles({ width });
    const loading = false;

    return (
        <div className={clx(classes.root, className)}>
            <div>
                <Typography className={classes.upload} variant="h5">
                    Upload File
                </Typography>

                <div className={classes.child}>
                    {loading ? (
                        <div className={classes.bar}>
                            <div className={classes.outerbox}>
                                <div className={classes.innerbox}>{width}</div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <FaRegFileAlt className={classes.uploadlogo} />
                            <div className={classes.text}>
                                <Typography variant="h6">
                                    Drag and drop here
                                    <br /> or <br />
                                    <input type="file" id="fileInput" style={{ display: "none" }} />
                                    <label htmlFor="fileInput" className={classes.upload}>
                                        Browse
                                    </label>
                                </Typography>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
