import { Carousel } from "../../core";

export const CarouselView = () => {
  return (
    <Carousel spaceBetween={20} itemsToShow={2} itemPerslide={1}>
      <div style={{ background: "red", height: "100%", width: "100%" }}>{1}</div>
      <div style={{ background: "blue", height: "100%", width: "100%" }}>{2}</div>
      <div style={{ background: "yellow", height: "100%", width: "100%" }}>{3}</div>
      <div style={{ background: "#ccc", height: "100%", width: "100%" }}>{4}</div>
      <div style={{ background: "red", height: "100%", width: "100%" }}>{5}</div>
      <div style={{ background: "green", height: "100%", width: "100%" }}>{6}</div>
      <div style={{ background: "brown", height: "100%", width: "100%" }}>{7}</div>
      <div style={{ background: "white", height: "100%", width: "100%" }}>{8}</div>
    </Carousel>
  );
};
