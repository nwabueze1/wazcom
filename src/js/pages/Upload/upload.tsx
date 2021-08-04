import React, { FC, useState } from "react";
import { uploadStyles } from "./styles";
import { ComponentNameProps } from "./types";
import { Typography, withWidth } from "@material-ui/core";
import { FaRegFileAlt } from "react-icons/fa";
import clx from "classnames";

const Upload: FC<ComponentNameProps> = ({ className }) => {
  const classes = uploadStyles(withWidth);
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
                <div className={classes.innerbox}>100 %</div>
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

export default Upload;
