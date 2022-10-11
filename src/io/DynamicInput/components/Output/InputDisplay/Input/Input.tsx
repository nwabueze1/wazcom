import { CheckBoxOutlineBlank, RadioButtonUncheckedOutlined } from "@mui/icons-material";
import { FC } from "react";
import { useDisplayInputStyles } from "./styles";
import { InputProps } from "./types";
import { BiCheck } from "react-icons/bi";

export const Input: FC<InputProps> = ({ handleSelect, value, index, type, checked }) => {
    const classes = useDisplayInputStyles();

    const handleClick = () => {
        handleSelect();
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
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.inputControl}>
                {DisplayLabel()}
                <p className={classes.inputText}>{value}</p>
            </div>
            {checked && <BiCheck className={classes.inputIcon} />}
        </div>
    );
};
