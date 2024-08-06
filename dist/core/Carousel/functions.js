import { gsap } from "gsap";
export default function horizontalLoop(_a) {
    var _b, _c, _d, _e, _f, _g;
    var items = _a.items, _h = _a.config, config = _h === void 0 ? {} : _h, _j = _a.itemPerslide, itemPerslide = _j === void 0 ? 1 : _j, container = _a.container;
    var spaceBetween = Number(String(gsap.getProperty(container, "gap", "px")).split("px")[0]);
    items = gsap.utils.toArray(items);
    var timeline = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: function () {
            timeline.totalTime(timeline.rawTime() + timeline.duration() * 100);
        },
    }), length = items.length, startX = (_b = items === null || items === void 0 ? void 0 : items[0]) === null || _b === void 0 ? void 0 : _b.offsetLeft, times = [], widths = [], xPercents = [], curIndex = 0, pixelsPerSecond = (config.speed || 1) * 100, snap = config.snap === false ? function (v) { return v; } : gsap.utils.snap((_c = config.snap) !== null && _c !== void 0 ? _c : 1), totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, {
        xPercent: function (i, el) {
            var w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px").toString()));
            xPercents[i] = snap((parseFloat(gsap.getProperty(el, "x", "px").toString()) / w) * 100 +
                parseFloat(gsap.getProperty(el, "xPercent").toString()));
            return xPercents[i];
        },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
        ((_d = items[length - 1]) === null || _d === void 0 ? void 0 : _d.offsetLeft) +
            (xPercents[length - 1] / 100) * widths[length - 1] -
            startX +
            ((_e = items[length - 1]) === null || _e === void 0 ? void 0 : _e.offsetWidth) +
            spaceBetween * parseFloat((_f = gsap.getProperty(items === null || items === void 0 ? void 0 : items[length - 1], "scaleX")) === null || _f === void 0 ? void 0 : _f.toString()) +
            (parseFloat(((_g = config.paddingRight) === null || _g === void 0 ? void 0 : _g.toString()) || "0") || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
            distanceToStart + widths[i] * parseFloat(gsap.getProperty(item, "scaleX").toString());
        timeline
            .to(item, {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
        }, 0)
            .fromTo(item, {
            xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
        }, {
            xPercent: xPercents[i],
            duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
        }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        if (vars === void 0) { vars = {}; }
        index += index > curIndex ? length - 1 : -(length - 1);
        Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
        var newIndex = gsap.utils.wrap(0, length, index), time = times[newIndex];
        if (time > timeline.time() !== index > curIndex) {
            vars.modifiers = { time: gsap.utils.wrap(0, timeline.duration()) };
            time += timeline.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return timeline.tweenTo(time, vars);
    }
    // here is where you adjust the itemPerslide default is 2
    timeline.next = function (vars) { return toIndex(curIndex + 1 + itemPerslide, vars); };
    timeline.previous = function (vars) { return toIndex(curIndex - (1 + itemPerslide), vars); };
    timeline.current = function () { return curIndex; };
    timeline.toIndex = function (index, vars) { return toIndex(index, vars); };
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
