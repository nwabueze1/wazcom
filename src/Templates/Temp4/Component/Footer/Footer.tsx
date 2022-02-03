import { useFooterStyles } from "./styles";

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.copyRight}>YOU © 2021. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};
