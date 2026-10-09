import { useCopyrightStyles } from "./styles";

export const Copyright = () => {
  const classes = useCopyrightStyles();

  return (
    <div className={classes.root}>
      <p>{new Date().getFullYear()} &copy; All rights reserved</p>
    </div>
  );
};
