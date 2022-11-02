import { BlockStyle } from "templates/mbmc/types";

export const renderStyle = (style: BlockStyle, classes: { [key in BlockStyle]: any }) =>
    classes[style];
