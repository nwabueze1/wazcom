import { TextField } from "@mui/material";
import { FC } from "react";
import { useShortAnswerStyles } from "./styles";
import { ShortAnswerProps } from "./types";

export const ShortAnswer: FC<ShortAnswerProps> = ({ placeholderText }) => {
    const classes = useShortAnswerStyles();
    return (
        <div className={classes.root}>
            <TextField
                className={classes.shortAnswerInput}
                inputMode="text"
                sx={{ border: 0 }}
                id="standard-basic"
                variant="standard"
                value={placeholderText}
                disabled={true}
            />
        </div>
    );
};
