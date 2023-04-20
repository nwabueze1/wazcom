import clx from "classnames";
import { FC, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useAccordionStyles } from "./styles";
import { AccordionProps } from "./types";

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  className,
  showIcon = true,
  isExpanded = false,
}) => {
  const [active, setActive] = useState(isExpanded);
  const classes = useAccordionStyles();

  const toggleVisiblity = () => {
    setActive((active) => !active);
  };

  return (
    <div className={clx(classes.root, className)}>
      <div className={clx(active ? classes.accordionActive : "")}>
        <div
          className={clx(classes.accordionHeader, "accordion__header")}
          onClick={toggleVisiblity}
        >
          <h3 className={classes.accordionTitle}>{title}</h3>
          {showIcon && (
            <span className={clx(classes.accordionIcon, "accordion__icon")}>
              <IoMdArrowDropdown />
            </span>
          )}
        </div>
        <div className={clx(classes.accordionContent, "accordion__content")}>{children}</div>
      </div>
    </div>
  );
};
