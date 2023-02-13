import React from "react";
import { CommonProps } from "../../../../types";
export type EditTagProps = CommonProps & {
    cmd?: string;
    arg?: string;
    Icon?: React.ElementType;
    name?: string;
};
