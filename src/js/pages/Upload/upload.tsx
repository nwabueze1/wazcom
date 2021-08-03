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
      <div>
        <Typography>Upload File</Typography>
        <Typography>Drag and drop here or Browse</Typography>
        <FaRegFileAlt />
      </div>
    </div>
  );
};

export default Upload;
