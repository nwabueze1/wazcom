import { Button } from "@mui/material";
import { FC } from "react";
import { useStyles } from "./styles";
import { SocialButtonProps } from "./types";

export const SocialButton: FC<SocialButtonProps> = ({
  image,
  title,
}) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="inherit"
      className={classes.button}
      startIcon={<img src={image.src} className="icon" alt={image.alt} />}
    >
      {title}
    </Button>
  );
};
