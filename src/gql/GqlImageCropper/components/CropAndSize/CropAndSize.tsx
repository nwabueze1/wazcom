import { FC } from "react";
import { CropAndSizeProps } from "./types";
import { RadioButtonInput } from "../../../../io";
import { Tooltip } from "../../../../core";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useCropAndSizeStyles } from "./styles";
import { TScreen } from "../../types";

export const CropAndSize: FC<CropAndSizeProps> = ({ screenType, handleChange }) => {
    const classes = useCropAndSizeStyles();
    const screens: TScreen[] = ["desktop", "tablet", "mobile"];

    const handleScreenChange = (screen: TScreen) => {
        handleChange("screenType", screen);
    };

    const displayScreens = () =>
        screens.map((screen, index) => (
            <div key={index} className={classes.radioInputContainer}>
                <RadioButtonInput
                    name={screen}
                    onChange={({ value }) => {
                        if (value) handleScreenChange(screen);
                    }}
                    value={screen.toLowerCase() === screenType.toLowerCase()}
                    className={classes.radioIcon}
                />
                <p className={classes.radioOption}>
                    {screen.charAt(0).toUpperCase() + screen.slice(1).toLowerCase()}
                </p>
            </div>
        ));

    return (
        <div className={classes.root}>
            <div className={classes.form}>
                <div className={classes.placeholderContainer}>
                    <label className={classes.labelText}>Screen Type</label>
                    <Tooltip
                        title={
                            "Crop the image part you want to see for each screen type by selecting a type and performing the cropping"
                        }
                        content="Crop the image part you want to see for each screen type by selecting a type and performing the cropping"
                    >
                        <p>
                            <BsQuestionCircleFill className={classes.tooltipIcon} />
                        </p>
                    </Tooltip>
                </div>
                {displayScreens()}
            </div>
        </div>
    );
};
