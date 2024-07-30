import { Carousel } from "../../core";

export const CarouselView = () => {
  return (
    <Carousel spaceBetween={20} itemsToShow={2} itemPerslide={1}>
      <div
        style={{
          background:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-1.webp)",
          height: "100%",
          width: "100%",
        }}
      >
        {1}
      </div>
      <div
        style={{
          background:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-3.webp)",
          height: "100%",
          width: "100%",
        }}
      >
        {2}
      </div>
      <div
        style={{
          background:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-4.webp)",
          height: "100%",
          width: "100%",
        }}
      >
        {3}
      </div>
      <div
        style={{
          background:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-5.webp)",
          height: "100%",
          width: "100%",
        }}
      >
        {4}
      </div>
      <div
        style={{
          background:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-6.webp)",
          height: "100%",
          width: "100%",
        }}
      >
        {5}
      </div>
      <div
        style={{
          background:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-9.webp)",
          height: "100%",
          width: "100%",
        }}
      >
        {6}
      </div>
      <div
        style={{
          background:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-8.webp)",
          height: "100%",
          width: "100%",
        }}
      >
        {7}
      </div>
      <div
        style={{
          background:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/ig-9.webp)",
          height: "100%",
          width: "100%",
        }}
      >
        {8}
      </div>
    </Carousel>
  );
};
