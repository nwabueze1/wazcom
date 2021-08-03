import React, { FC } from "react";
import { useComponentNameStyles } from "./styles";
import { ComponentNameProps } from "./types";
import { Typography } from "@material-ui/core";
import { FaRegFileAlt } from "react-icons/fa";
import clx from "classnames";

const Upload: FC<ComponentNameProps> = ({ className }) => {
  const classes = useComponentNameStyles();

  return (
    <div className={clx(className, classes.root)}>
      <div className={classes.bigform}>
        <Typography variant="h3" className={classes.UploadFile}>
          Upload File
        </Typography>
        <div className={classes.container}>
          <FaRegFileAlt className={classes.uploadlogo} />
          <Typography>
            Drag and drop here
            <br /> or <br /> Browse
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Upload;
