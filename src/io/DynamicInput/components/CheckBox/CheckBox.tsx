import { DefaultInputState } from "../DefautInputState/DefualtInputstate";
import { CheckBoxInput } from "./CheckBoxInput/CheckBoxInput";

export const CheckBox = () => {
    return (
        <div>
            <DefaultInputState input={CheckBoxInput} defaultCount={5} defaultValue={"Option"} />
        </div>
    );
};
