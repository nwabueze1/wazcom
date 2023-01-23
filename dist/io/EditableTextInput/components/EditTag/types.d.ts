import { CommonProps } from "../../../../types";
export type EditTagProps = CommonProps & {
    cmd?: string;
    arg?: string;
    icon?: JSX.Element;
    name?: string;
};
