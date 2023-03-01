export type MbmcLinkProps = React.DetailedHTMLProps<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
  HTMLAnchorElement
> & {
  variant?: "PRIMARY" | "SECONDARY" | "NEUTRAL";
  size?: "sm" | "md" | "lg";
  url?: string;
  name?: string;
  className?: any;
  activeElement?: string;
};
