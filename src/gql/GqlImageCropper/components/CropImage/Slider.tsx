import React, { FC, useState, useEffect, useRef } from "react";
import cx from "classnames";
import { SliderProps } from "./types";
import { useCropImageStyles } from "./styles";

export const Slider: FC<SliderProps> = ({ value, className, onChange }) => {
  const classes = useCropImageStyles();
  const line = useRef<HTMLDivElement>(null);
  const ranNum = Math.random();
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    window.addEventListener("mouseup", onStop, { passive: false });
    window.addEventListener("mousemove", onDrag, { passive: false });
    window.addEventListener("touchmove", onDrag, { passive: false });
    window.addEventListener("touchend", onStop, { passive: false });

    if (line.current) {
      line.current.addEventListener("mousedown", onStart);
      line.current.addEventListener("touchstart", onStart);
    }

    return () => {
      window.removeEventListener("mouseup", onStop);
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("touchend", onStop);

      if (line.current) {
        line.current.removeEventListener("mousedown", onStart);
        line.current.removeEventListener("touchstart", onStart);
      }
    };
  }, [ranNum]);

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const position = e.clientX;

    if (line.current) {
      const { left, width } = line.current.getBoundingClientRect();

      if (onChange) {
        onChange(Math.min(1, Math.max(0, position - left) / width));
      }
    }
  };

  const onDrag = (e: MouseEvent | TouchEvent) => {
    if (focus) {
      const position = "touches" in e ? e.touches[0].clientX : e.clientX;

      if (line.current) {
        const { left, width } = line.current.getBoundingClientRect();

        if (onChange) {
          onChange(Math.min(1, Math.max(0, position - left) / width));
        }
      }

      if (e.preventDefault) {
        e.preventDefault();
      }
    }
  };

  const onStop = () => {
    setFocus(false);
  };

  const onStart = (e: MouseEvent | TouchEvent) => {
    setFocus(true);
    onDrag(e);
  };

  return (
    <div className={cx(classes.slider, className)} ref={line} onClick={handleSliderClick}>
      <div className={classes.sliderLine}>
        <div
          className={classes.sliderFill}
          style={{
            flexGrow: value,
          }}
        />
        <div
          className={cx(classes.sliderCircle, focus && classes.sliderCircleFocus)}
          style={{
            right: `${(value || 0) * 100}%`,
          }}
        >
          <div className={cx(classes.sliderInnerCircle, focus && classes.sliderInnerCircleFocus)} />
        </div>
      </div>
    </div>
  );
};
