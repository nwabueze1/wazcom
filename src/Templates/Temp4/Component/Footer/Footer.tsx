import { useFooterStyles } from "./styles";

export const Footer = () => {
  const classes = useFooterStyles();
  const date = new Date().getFullYear();
  
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.copyRight}>YOU © {date}. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};
