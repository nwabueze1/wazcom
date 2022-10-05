import { SampleInputDisplay } from "../SampleInputDisplay/SampleInputDisplay";
import { DropDownInput } from "./DropDownInput/DropDownInput";

export const DropDown = () => {
    return (
        <div>
            <SampleInputDisplay input={DropDownInput} defaultCount={5} defaultValue={"Option"} />
        </div>
    );
};
