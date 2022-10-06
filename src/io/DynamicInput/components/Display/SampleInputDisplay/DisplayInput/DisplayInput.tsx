import {
    CheckBoxOutlineBlank,
    Close as CloseIcon,
    RadioButtonUncheckedOutlined,
} from "@mui/icons-material";
import { FC, useEffect, useState } from "react";
import { useDisplayInputStyles } from "./styles";
import { DisplayInputProps } from "./types";
import { TextInput } from "../../../../../TextInput/TextInput";

export const DisplayInput: FC<DisplayInputProps> = ({
    handleRemove,
    handleChange,
    defaultValue,
    index,
    onFocus,
    type,
}) => {
    const classes = useDisplayInputStyles();
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleInputChange = (event: { name: string; value: any }) => {
        setValue(event.value);
        handleChange(event.value);
    };

    const DisplayLabel = () => {
        switch (type) {
            case "dropdown":
                return <p>{index + 1}.</p>;
            case "checkboxes":
                return <CheckBoxOutlineBlank />;
            case "multiple":
                return <RadioButtonUncheckedOutlined />;
            default:
                <p>{index + 1}.</p>;
        }
    };

    return (
        <div className={classes.root}>
            {DisplayLabel()}
            <TextInput
                classNames={{
                    textInput: classes.displayInput,
                    newRoot: classes.newRoot,
                }}
                value={value}
                onChange={handleInputChange}
                id="standard-basic"
                variant="standard"
                onFocus={onFocus}
            />
            <CloseIcon className={classes.displayIcon} onClick={handleRemove} />
        </div>
    );
};
