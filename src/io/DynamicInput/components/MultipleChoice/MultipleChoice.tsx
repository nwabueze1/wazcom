import { DefaultInputState } from "../DefautInputState/DefualtInputstate";
import { MultipleChoiceInput } from "./MultipleChoiceInput/MultipleChoiceInput";

export const MultipleChoice = () => {
    return (
        <div>
            <DefaultInputState input={MultipleChoiceInput} defaultCount={5} defaultValue={"Option"} />
        </div>
    );
};
