import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles1.css";
import { useGSAP } from "@gsap/react";
import { number } from "yup";

interface LoopConfig {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: number | false;
  paddingRight?: number;
  reversed?: boolean;
}

const slides: string[] = [
  "https://sytbuildr.s3.eu-west-2.amazonaws.com/05d4dc52-15a4-4692-b2fa-4a2581f0117a/8PMj9DdihNnacB5Ds0lf336aUyHO7ulB3VsOETlq.jpg",
  "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-1.webp",
  "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-2.webp",
  "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-3.webp",
  "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-4.webp",
  "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-5.webp",
];

export const Carousel: React.FC = () => {
  const myElementRef = useRef<any>();
  const wrapperRef = useRef<any>();
  const [containerWidth, setContainerWidth] = useState<number | undefined>();
  const [current, setCurrent] = useState(0);
  //   const loopRef = useRef<gsap.core.Timeline | null>(null);
  const { contextSafe } = useGSAP();

  const onNext = contextSafe(() => {
    if (!containerWidth) return;
    setCurrent((prev) => prev + 1);
    gsap.to(wrapperRef?.current, { x: `${(-containerWidth * current) / 3}` });
  });

  const onPrev = contextSafe(() => {
    if (!containerWidth) return;
    setCurrent((prev) => prev - 1);
    gsap.to(wrapperRef?.current, { x: `${(+containerWidth * current) / 3}` });
  });

  const renderSlides = () =>
    slides.map((bg, i) => (
      <div className="box" key={i} ref={myElementRef}>
        <div style={{ backgroundImage: `url(${bg})`, height: "100%", width: "100%" }}></div>
      </div>
    ));

  useEffect(() => {
    if (wrapperRef.current) {
      const offsetWidth = wrapperRef.current.offsetWidth;
      setContainerWidth(offsetWidth);
    }
  }, []);
  const handlePrev = () => {
    console.log("calledPrev");
    // loopRef.current?.previous({ duration: 0.4, ease: "power1.inOut" });
  };

  //   useEffect(() => {
  //     const boxes = slidesRef.current;

  //     loopRef.current = horizontalLoop(boxes, { paused: true });
  //     console.log("calledUseEffect");
  //     boxes.forEach((box, index) =>
  //       box.addEventListener("click", () =>
  //         loopRef.current?.toIndex(index, { duration: 0.8, ease: "power1.inOut" }),
  //       ),
  //     );

  //     return () => {
  //       boxes.forEach((box, index) =>
  //         box.removeEventListener("click", () =>
  //           loopRef.current?.toIndex(index, { duration: 0.8, ease: "power1.inOut" }),
  //         ),
  //       );
  //     };
  //   }, []);

  return (
    <div>
      <div style={{ position: "relative" }} ref={wrapperRef}>
        <div className="wrapper">{renderSlides()}</div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <button className="prev" onClick={onPrev}>
          prev
        </button>
        <button className="next" onClick={onNext}>
          next
        </button>
      </div>
    </div>
  );
};
