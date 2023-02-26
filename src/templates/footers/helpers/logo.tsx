import { FC } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { Link } from "../../mbmc/components";
import { clickAction, isNotRenderAnchor } from "./anchor";

export const displayLogo = (
  mode: "view" | "edit",
  classes: any,
  activeElement: string,
  handleClick: (element: string) => void,
  logo?: { src?: string; text?: string; url: string },
  parentKey?: string,
) => {
  const url = logo?.url ?? "#";
  return (
    <LogoWrapper
      mode={mode}
      url={url}
      handleClick={handleClick}
      className={activeElement === (parentKey ?? "footer_logo") ? classes.activeElement : undefined}
      parentKey={parentKey}
    >
      <Logo mode={mode} classes={classes} {...logo} />
    </LogoWrapper>
  );
};

interface LogoProps {
  mode: "view" | "edit";
  src?: string;
  text?: string;
  classes: any;
}

const hivedeckLogo = "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/logo/hivedeck_logo.svg";

const Logo: FC<LogoProps> = ({ mode, src, text, classes }) => (
  <div className={classes.footerLogoParent}>
    {mode === "edit" && !src ? (
      <AiOutlinePicture className={classes.footerLogo} />
    ) : (
      <img src={src ?? hivedeckLogo} alt="" className={classes.footerLogo} />
    )}
    {text && <p className={classes.footerLogoText}>{text}</p>}
  </div>
);

interface LogoWrapperProps {
  mode: "view" | "edit";
  url: string;
  handleClick: (route: string) => void;
  className?: string;
  parentKey?: string;
  children?: React.ReactNode;
}

const LogoWrapper: FC<LogoWrapperProps> = ({
  mode,
  url,
  children,
  handleClick,
  parentKey,
  className,
}) => {
  if (isNotRenderAnchor(url, mode))
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          clickAction(url, mode, () => {
            handleClick(mode === "view" ? url : parentKey ?? "footer_logo");
          });
        }}
        className={className}
      >
        {children}
      </div>
    );

  return <Link href={url}>{children}</Link>;
};
