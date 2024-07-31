import React, {
  useRef,
  useEffect,
  ReactNode,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import horizontalLoop from "./functions";
import "./styles1.css";

interface CarouselProps {
  children: ReactNode;
  spaceBetween?: number;
  itemsToShow?: number;
  itemPerslide?: number;
}

export const Carousel = forwardRef<
  {
    next: () => void;
    prev: () => void;
  },
  CarouselProps
>(({ children, spaceBetween = 1, itemsToShow = 1, itemPerslide = 1 }, ref) => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const loopRef = useRef<gsap.core.Timeline | null>(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const minSwipeDistance = 50;

  useImperativeHandle(ref, () => ({
    next: () => {
      loopRef.current?.next({ duration: 0.4, ease: "power1.inOut" });
    },
    prev: () => {
      loopRef.current?.previous({ duration: 0.4, ease: "power1.inOut" });
    },
  }));

  const onTouchStart = (e: any) => {
    setTouchEndX(null);
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const onTouchMove = (e: any) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX && touchEndX) {
      const xDistance = touchStartX - touchEndX;
      if (Math.abs(xDistance) >= minSwipeDistance) {
        if (xDistance > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  const renderSlides = () =>
    React.Children.map(children, (child, i) => (
      <div
        className="box"
        style={{ width: `calc(100% / ${itemsToShow})` }}
        key={i}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
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

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="wrapper" style={{ gap: `${spaceBetween}px` }}>
          {renderSlides()}
        </div>
      </div>
    </div>
  );
});
