import { FC } from "react";
import { MbmcLinkProps } from "./types";
import { useMbmcLinkStyles } from "./styles";
import clx from "classnames";

// This is a special custom link styled to look like
// the MBMC Buttons. Different from the other Link
// component which basically renders its children.
export const MbmcLink: FC<MbmcLinkProps> = ({
    children,
    url,
    className,
    name,
    variant = "PRIMARY",
    size = "md",
    activeElement = "",
    ...props
}) => {
    const classes = useMbmcLinkStyles();

    return (
        <a
            {...props}
            className={clx(
                className,
                classes.link,
                variant === "PRIMARY" && classes.linkPrimary,
                variant === "SECONDARY" && classes.linkSecondary,
                variant === "NEUTRAL" && classes.linkNeutral,
                size === "sm" && classes.linkSmall,
                name?.toLowerCase() === activeElement?.toLowerCase() && classes.linkActive,
            )}
            href={url ?? ""}
            target="_blank"
            rel="noreferrer noopener"
        >
            {children}
        </a>
    );
};
