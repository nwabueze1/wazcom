import { FC } from "react";
interface fieldProps {
    action?: any;
    choice?: any;
    handleChangeInput: (index: number, event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => void;
}
declare const BasicTable: FC<fieldProps>;
export default BasicTable;
