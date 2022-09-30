import { DefaultInputState } from "../DefautInputState/DefualtInputstate";
import { DropDownInput } from "./DropDownInput/DropDownInput";

export const DropDown = () => {
    return (
        <div>
            <DefaultInputState input={DropDownInput} defaultCount={5} defaultValue={"Option"} />
        </div>
    );
};
