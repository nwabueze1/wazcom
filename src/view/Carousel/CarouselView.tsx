import { useRef } from "react";
import { Carousel } from "../../core";
import "./styles.css";

export const CarouselView = () => {
  const carouselRef = useRef<{ next: () => void; prev: () => void }>(null);

  const handleClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      carouselRef.current?.prev();
    } else if (direction === "next") {
      carouselRef.current?.next();
    }
  };

  return (
    <>
      <Carousel
        ref={carouselRef}
        spaceBetween={20}
        itemsToShow={2}
        itemPerslide={1}
        breakpoints={{
          sm: {
            gap: 0,
            itemsToShow: 1,
          },
          md: {
            gap: 0,
            itemsToShow: 2,
          },
          lg: {
            gap: 2,
            itemsToShow: 3,
          },
          xl: {
            gap: 2,
            itemsToShow: 5,
          },
        }}
      >
        <div
          style={{
            background:
              "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-1.webp)",
            height: "400px",
            width: "100%",
          }}
        >
          {1}
        </div>
        <div
          style={{
            background:
              "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-3.webp)",
            height: "400px",
            width: "100%",
          }}
        >
          {2}
        </div>
        <div
          style={{
            background:
              "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-4.webp)",
            height: "400px",
            width: "100%",
          }}
        >
          {3}
        </div>
        <div
          style={{
            background:
              "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-5.webp)",
            height: "400px",
            width: "100%",
          }}
        >
          {4}
        </div>
        <div
          style={{
            background:
              "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-6.webp)",
            height: "400px",
            width: "100%",
          }}
        >
          {5}
        </div>
        <div
          style={{
            background:
              "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-9.webp)",
            height: "400px",
            width: "100%",
          }}
        >
          {6}
        </div>
        <div
          style={{
            background:
              "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-8.webp)",
            height: "400px",
            width: "100%",
          }}
        >
          {7}
        </div>
        <div
          style={{
            background:
              "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-9.webp)",
            height: "400px",
            width: "100%",
          }}
        >
          {8}
        </div>
      </Carousel>
      <div style={{ marginTop: 10 }}>
        <button className="prev" onClick={() => handleClick("prev")}>
          prev
        </button>
        <button className="next" onClick={() => handleClick("next")}>
          next
        </button>
      </div>
    </>
  );
};
