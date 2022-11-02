import { BlockStyle } from "templates/mbmc/types";

export const renderStyle = (style: BlockStyle, classes: { [key in BlockStyle]: any }) => classes[style];

export const parseHtml = (html: string) => {
    const p = window.document.createElement('p');
    p.innerHTML = html;
    return p.innerHTML;
}
