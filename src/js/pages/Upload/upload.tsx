import React, { FC } from "react";
import { uploadStyles } from "./styles";
import { ComponentNameProps } from "./types";
import { Typography } from "@material-ui/core";
import { FaRegFileAlt } from "react-icons/fa";
import clx from "classnames";

const Upload: FC<ComponentNameProps> = ({ className }) => {
  const classes = uploadStyles();

  return (
    <div className={clx(className, classes.root)}>
      <div>
        <Typography className={classes.upload} variant="h4">
          Upload File
        </Typography>
        <div className={classes.child}>
          <FaRegFileAlt className={classes.uploadlogo} />
          <Typography variant="h5">
            Drag and drop here
            <br /> or
            <Typography className={classes.upload} variant="h4">
              Browse
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Upload;
