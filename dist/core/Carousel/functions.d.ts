interface LoopConfig {
    repeat?: number;
    paused?: boolean;
    speed?: number;
    snap?: number | false;
    paddingRight?: number;
    reversed?: boolean;
}
export default function horizontalLoop({ items, config, itemPerslide, spaceBetween, }: {
    items: HTMLElement[] | NodeListOf<HTMLElement>;
    config: LoopConfig;
    itemPerslide?: number;
    spaceBetween?: number;
}): gsap.core.Timeline;
export {};
