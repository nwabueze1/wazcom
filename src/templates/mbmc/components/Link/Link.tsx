import clx from "classnames";
import { useLinkStyles } from "./styles";

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link = ({ children, className, ...props }: LinkProps) => {
  const classes = useLinkStyles();

  return (
    <a
      {...props}
      className={clx(classes.linkRoot, className)}
      target={props.href?.startsWith("/") ? "_self" : "_blank"}
      rel={"noreferrer noopener"}
    >
      {children}
    </a>
  );
};
