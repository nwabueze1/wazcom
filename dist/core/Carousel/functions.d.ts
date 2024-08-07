interface LoopConfig {
    repeat?: number;
    paused?: boolean;
    speed?: number;
    snap?: number | false;
    paddingRight?: number;
    reversed?: boolean;
}
export default function horizontalLoop({ items, config, itemPerslide, container, }: {
    items: HTMLElement[] | NodeListOf<HTMLElement>;
    config: LoopConfig;
    itemPerslide?: number;
    container: HTMLDivElement;
}): gsap.core.Timeline;
export {};
