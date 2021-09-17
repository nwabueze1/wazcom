import { Button as MuiButton } from "@material-ui/core";
import { ButtonDimension } from "./types";
import { useButtonStyles } from "./styles";

export const Button = ({ ...props }: ButtonDimension) => {
  const dimension = {
    width: props.dimension ? props.dimension.width : "100px",
    height: props.dimension ? props.dimension.height : "100px",
  };
  const classes = useButtonStyles({ dimension });

  return (
    <MuiButton
      classes={{
        root: classes.root,
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
      }}
      variant="contained"
      {...props}
    />
  );
};
