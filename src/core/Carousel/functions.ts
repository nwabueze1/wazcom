import { gsap } from "gsap";

interface LoopConfig {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: number | false;
  paddingRight?: number;
  reversed?: boolean;
}

export default function horizontalLoop({
  items,
  config = {},
  itemPerslide = 1,
  spaceBetween = 0,
}: {
  items: HTMLElement[] | NodeListOf<HTMLElement>;
  config: LoopConfig;
  itemPerslide?: number;
  spaceBetween?: number;
}) {
  items = gsap.utils.toArray(items) as HTMLElement[];
  let timeline = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        timeline.totalTime(timeline.rawTime() + timeline.duration() * 100);
      },
    }),
    length = items.length,
    startX = items?.[0]?.offsetLeft,
    times: number[] = [],
    widths: number[] = [],
    xPercents: number[] = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap ?? 1),
    totalWidth: number,
    curX: number,
    distanceToStart: number,
    distanceToLoop: number,
    item: HTMLElement,
    i: number;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px").toString()));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px").toString()) / w) * 100 +
          parseFloat(gsap.getProperty(el, "xPercent").toString()),
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  // swiper function;
  // let beginX: number | null = null;
  // let endX: number | null = null;

  // const handleTouchStart = (event: TouchEvent) => {
  //   beginX = event.touches[0].clientX;
  // };

  // const handleTouchMove = (event: TouchEvent) => {
  //   endX = event.touches[0].clientX;
  // };

  // const handleTouchEnd = () => {
  //   if (beginX !== null && endX !== null) {
  //     const distance = Math.abs(beginX - endX);
  //     const threshold = 50; // Minimum distance required to trigger swipe action
  //     const direction = beginX! > endX! ? "left" : "right";

  //     if (distance > threshold) {
  //       if (direction === "left") {
  //         timeline.next();
  //       } else {
  //         timeline.previous();
  //       }
  //     }

  //     beginX = null;
  //     endX = null;
  //   }
  // };

  // items.forEach((item) => {
  //   item.addEventListener("touchstart", handleTouchStart);
  //   item.addEventListener("touchmove", handleTouchMove);
  //   item.addEventListener("touchend", handleTouchEnd);
  // });

  totalWidth =
    items[length - 1]?.offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1]?.offsetWidth +
    spaceBetween * parseFloat(gsap.getProperty(items?.[length - 1], "scaleX")?.toString()) +
    (parseFloat(config.paddingRight?.toString() || "0") || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * parseFloat(gsap.getProperty(item, "scaleX").toString());

    timeline
      .to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
      .fromTo(
        item,
        {
          xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
        },
        {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index: number, vars: gsap.TweenVars = {}) {
    index += index > curIndex ? length - 1 : -(length - 1);

    Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];

    if (time > timeline.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, timeline.duration()) };
      time += timeline.duration() * (index > curIndex ? 1 : -1);
    }

    curIndex = newIndex;
    vars.overwrite = true;
    return timeline.tweenTo(time, vars);
  }

  // here is where you adjust the itemPerslide default is 2
  timeline.next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1 + itemPerslide, vars);
  timeline.previous = (vars?: gsap.TweenVars) => toIndex(curIndex - (1 + itemPerslide), vars);
  timeline.current = () => curIndex;
  timeline.toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
  timeline.times = times;
  timeline.progress(1, true).progress(0, true);

  if (config.reversed) {
    if (timeline.vars.onReverseComplete) {
      console.log("calledreverse");
      timeline.vars.onReverseComplete();
    }
    timeline.reverse();
  }

  return timeline;
}
