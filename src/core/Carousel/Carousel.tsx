import React, {
  useRef,
  ReactNode,
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import horizontalLoop from "./functions";
import { useCarouselStyles } from "./styles";

interface CarouselProps {
  children: ReactNode;
  spaceBetween?: number;
  itemsToShow?: number;
  itemPerslide?: number;
  onActiveIndexChange?: (index: number) => void;
}

export const Carousel = forwardRef<
  {
    next: () => void;
    prev: () => void;
  },
  CarouselProps
>(({ children, spaceBetween = 1, itemsToShow = 1, itemPerslide = 1, onActiveIndexChange }, ref) => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const loopRef = useRef<gsap.core.Timeline | null>(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const minSwipeDistance = 50;
  const slideRef = useRef<HTMLDivElement>(null);
  const items = React.Children.toArray(children);

  const classes = useCarouselStyles();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useImperativeHandle(ref, () => ({
    next: () => {
      updateNext();
      loopRef.current?.next({ duration: 0.4, ease: "power1.inOut" });
    },
    prev: () => {
      updatePrev();
      loopRef.current?.previous({ duration: 0.4, ease: "power1.inOut" });
    },
  }));

  const updateNext = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex >= items.length ? 0 : nextIndex);
    onActiveIndexChange?.(nextIndex);
  };

  const updatePrev = () => {
    const nextIndex = currentIndex - 1;
    setCurrentIndex(nextIndex < 0 ? items.length - 1 : nextIndex);
    onActiveIndexChange?.(nextIndex);
  };

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
        className={classes.box}
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
    updateNext();
  };

  const handlePrev = () => {
    loopRef.current?.previous({ duration: 0.4, ease: "power1.inOut" });
    updatePrev();
  };

  
  useEffect(() => {
    setIsClient(true);
    const boxes = slidesRef.current;
    loopRef.current = horizontalLoop({
      items: boxes,
      config: { paused: true },
      itemPerslide,
      spaceBetween,
    });
  }, [isClient, children, itemsToShow, itemPerslide, spaceBetween]);

  return (
    <div className={classes.wrapper} style={{ gap: `${spaceBetween}px` }} ref={slideRef}>
      {renderSlides()}
    </div>
  );
});
