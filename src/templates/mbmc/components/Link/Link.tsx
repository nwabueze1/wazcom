import clx from "classnames";
import { useLinkStyles } from "./styles";

export const Link: React.FC<
    React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ children, className, ...props }) => {
    const classes = useLinkStyles();

    return (
        <a {...props} className={clx(classes.linkRoot, className)}>
            {children}
        </a>
    );
};
