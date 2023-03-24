import { useState, useRef, useMemo, FC } from "react";
import clx from "classnames";
import { useFloating, shift, offset, flip, arrow } from "@floating-ui/react-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { TootipProps } from "./types";
import { useTootipStyles } from "./style";

export const Tootip: FC<TootipProps> = ({ children, content, position }) => {
  const classes = useTootipStyles();

  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { x, y, reference, floating, strategy, placement } = useFloating({
    placement: position,
    open: true,

    middleware: [
      shift(),
      flip(),
      offset(12),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const toolTipArrowClass = useMemo(
    () =>
      placement?.includes("top")
        ? classes.tooltipArrowTop
        : placement?.includes("left")
        ? classes.tooltipArrowLeft
        : placement?.includes("right")
        ? classes.tooltipArrowRight
        : classes.tooltipArrowBottom,
    [placement],
  );

  return (
    <>
      <div
        ref={reference}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={classes.root}
      >
        {children || <RiErrorWarningLine className={classes.tooltipIcon} />}
      </div>
      {isOpen && (
        <div
          className={classes.tooltipContainer}
          ref={floating}
          style={{
            position: strategy,
            top: y ?? "",
            left: x ?? "",
          }}
        >
          <div className={classes.tooltip}>{content}</div>
          <div className={clx(classes.tooltipArrow, toolTipArrowClass)} ref={arrowRef} />
        </div>
      )}
    </>
  );
};
