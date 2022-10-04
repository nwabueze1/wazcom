import { FC } from "react";
import { DefaultInputState } from "../DefautInputState/DefualtInputstate";
import { DropDownInput } from "./DropDownInput/DropDownInput";
import { DropDownProps } from "./types";

export const DropDown: FC<DropDownProps> = ({ setQuestionOptions }) => {
    return (
        <div>
            <DefaultInputState
                input={DropDownInput}
                setQuestionOptions={setQuestionOptions}
                defaultCount={5}
                defaultValue={"Option"}
            />
        </div>
    );
};
