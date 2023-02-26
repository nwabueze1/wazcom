import { BlockStyle } from "templates/mbmc/types";

export const renderStyle = (style: BlockStyle, classes: { [key in BlockStyle]: any }) =>
  classes[style];

export const parseHtml = (html: string) => {
  const p = typeof window !== "undefined" ? window.document.createElement("p") : null;
  (p as any).innerHTML = html;
  return (p as any).innerHTML;
};
