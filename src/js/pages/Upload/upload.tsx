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
        <Typography className={classes.upload} variant="h5">
          Upload File
        </Typography>
        <div className={classes.child}>
          <FaRegFileAlt className={classes.uploadlogo} />
          <div className={classes.text}>
            <Typography variant="h6">
              Drag and drop here
              <br /> or
              <Typography className={classes.upload} variant="h5">
                Browse
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
