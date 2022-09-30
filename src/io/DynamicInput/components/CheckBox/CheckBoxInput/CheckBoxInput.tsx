import { CheckBox } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useCheckboxInputStyles } from "./styles";

export const CheckBoxInput = () => {
    const classes = useCheckboxInputStyles();

    return (
        <div className={classes.root}>
            <CheckBox />
            <TextField id="standard-basic" variant="standard" />
        </div>
    );
};
