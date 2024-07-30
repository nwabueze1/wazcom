import React, { useRef, useEffect, ReactNode, useState } from "react";
import horizontalLoop from "./functions";
import "./styles1.css";
import { useDrag } from "@use-gesture/react";

export const Carousel: React.FC<{
  children: ReactNode;
  spaceBetween?: number;
  itemsToShow?: number;
  itemPerslide?: number;
}> = ({ children, spaceBetween = 1, itemsToShow = 1, itemPerslide = 1 }) => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const loopRef = useRef<gsap.core.Timeline | null>(null);

  const renderSlides = () =>
    React.Children.map(children, (child, i) => (
      <div
        className="box"
        style={{ width: `calc(100% / ${itemsToShow})` }}
        key={i}
        {...bind()}
        ref={(el) => {
          if (el) {
            slidesRef.current[i] = el;
          }
        }}
      >
        {child}
      </div>
    ));

  const handleNext = () => {
    loopRef.current?.next({ duration: 0.4, ease: "power1.inOut" });
  };

  const handlePrev = () => {
    loopRef.current?.previous({ duration: 0.4, ease: "power1.inOut" });
  };

  useEffect(() => {
    const boxes = slidesRef.current;
    loopRef.current = horizontalLoop({
      items: boxes,
      config: { paused: true },
      itemPerslide,
      spaceBetween,
    });
  }, []);

  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (swipeX === -1) {
      handleNext();
    } else if (swipeX === 1) {
      handlePrev();
    }
  });

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="wrapper" style={{ gap: `${spaceBetween}px` }}>
          {renderSlides()}
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <button className="prev" onClick={handlePrev}>
          prev
        </button>
        <button className="next" onClick={handleNext}>
          next
        </button>
      </div>
    </div>
  );
};
