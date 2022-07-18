import { FC } from "react";
import { useFooterStyles } from "./styles";
import { FooterProps } from "./types";
import clx from "classnames";

export const Footer: FC<FooterProps> = ({ name, className }) => {
  const classes = useFooterStyles();
  const fullYear = new Date().getFullYear();
  return (
    <div className={clx(classes.root, className)}>
      <p>
        ©{fullYear} by {name}. Proudly created with
      </p>
      <a
        href="https://hivedeck.com"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Hivedeck
      </a>
    </div>
  );
};
