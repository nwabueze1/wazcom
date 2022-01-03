import { Button } from "@mui/material";
import { FC } from "react";
import { useSocialButtonStyles } from "./styles";
import { SocialButtonProps } from "./types";

export const SocialButton: FC<SocialButtonProps> = ({ image, title }) => {
  const classes = useSocialButtonStyles();

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
