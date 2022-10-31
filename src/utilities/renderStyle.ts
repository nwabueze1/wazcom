import { Style } from "templates/mbmc/types";

export const renderStyle = (style: Style, classes: { [key in Style]: any }) => classes[style];
