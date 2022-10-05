import { SampleInputDisplay } from "../SampleInputDisplay/SampleInputDisplay";
import { MultipleChoiceInput } from "./MultipleChoiceInput/MultipleChoiceInput";

export const MultipleChoice = () => {
    return (
        <div>
            <SampleInputDisplay
                input={MultipleChoiceInput}
                defaultCount={5}
                defaultValue={"Option"}
            />
        </div>
    );
};
