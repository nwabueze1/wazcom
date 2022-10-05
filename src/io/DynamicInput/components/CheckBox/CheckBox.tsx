import { SampleInputDisplay } from "../SampleInputDisplay/SampleInputDisplay";
import { CheckBoxInput } from "./CheckBoxInput/CheckBoxInput";

export const CheckBox = () => {
    return (
        <div>
            <SampleInputDisplay input={CheckBoxInput} defaultCount={5} defaultValue={"Option"} />
        </div>
    );
};
