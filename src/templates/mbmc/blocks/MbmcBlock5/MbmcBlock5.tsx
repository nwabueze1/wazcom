import { FC } from "react";
import { useMbmcBlock5Styles } from "./styles";
import { MbmcBlock5Props } from "./types";
import { displayLogo, displaySections } from "../../../../templates/footers/helpers";
import { TFooterSection } from "../../../../templates/footers/types";
import clx from "classnames";

export const MbmcBlock5: FC<MbmcBlock5Props> = ({
  mode = "view",
  index,
  activeElement = "",
  logo,
  handleClick,
  links,
}) => {
  const classes = useMbmcBlock5Styles();

  const handleFooterClick = () => {
    if (mode === "edit") {
      handleClick?.("footer");
    }
  };

  const handleElementClick = (element: string) => {
    handleClick?.(element);
  };

  return (
    <div
      className={clx(
        classes.root,
        activeElement.toLowerCase() === "footer" && mode === "edit" && classes.activeElement,
      )}
      onClick={handleFooterClick}
    >
      <div className={classes.mbmcContainer}>
        <div className={classes.footerContainer}>
          {displayLogo(
            mode as "view" | "edit",
            classes,
            activeElement,
            handleElementClick,
            logo,
            !index && index !== 0 ? undefined : `${String(index)}.logo`,
          )}

          {displaySections(
            mode as "view" | "edit",
            classes,
            links as TFooterSection[],
            activeElement,
            handleElementClick,
            !index && index !== 0 ? undefined : `${String(index)}.links.`,
          )}
        </div>
      </div>
      <div className={classes.footerNote}>
        <p className={classes.footerNoteText}>
          2022 © All rights reserved . Mrbaker & Mrs cook . Proudly created by Hivedeck
        </p>
      </div>
    </div>
  );
};
