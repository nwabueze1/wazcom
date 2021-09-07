import React, { FC, useState } from "react";
import { uploadStyles } from "./styles";
import { UploadProps } from "./types";
import { Typography } from "@material-ui/core";
import { FaRegFileAlt } from "react-icons/fa";
import clx from "classnames";

export const Upload: FC<UploadProps> = ({ className, width }) => {
  const classes = uploadStyles({ width });
  const [loading, setloading] = useState(false);
  const handleClick = () => {
    setloading(true);
  };
  return (
    <div className={clx(className, classes.root)}>
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
                  <br /> or
                  <Typography
                    className={classes.upload}
                    variant="h5"
                    onClick={handleClick}
                  >
                    Browse
                  </Typography>
                </Typography>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
