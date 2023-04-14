import { FC } from "react";
import { usePaperStyles } from "./styles";
import { PaperType } from "./type";

const Paper: FC<PaperType> = ({ children, padding }) => {
  const classes = usePaperStyles();

  return (
    <div style={{ padding }} className={classes.root}>
      {children}
    </div>
  );
};

export default Paper;
