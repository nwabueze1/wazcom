import React from "react";
import { useMbmcBlock18Styles } from "./styles";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { MbmcBlock15Props } from "./types";

export const MbmcBlock15: React.FC<MbmcBlock15Props> = ({ steps, stepHistory }) => {
    const classes = useMbmcBlock18Styles();
    const currentStep = stepHistory?.slice(-1)[0];
    const completedSteps = stepHistory?.slice(0, stepHistory.length - 1);

    const displaySteps = () => {
        return steps?.map((step, idx) => {
            return (
                <div className={`${classes.step}`} key={idx}>
                    <div className={classes.stepContainer}>
                        <div
                            className={`${classes.stepNum} ${
                                currentStep == idx + 1
                                    ? classes.activeStepNum
                                    : completedSteps.includes(idx + 1)
                                    ? classes.completedStepNum
                                    : classes.inactiveStepNum
                            }`}
                        >
                            {completedSteps.includes(idx + 1) ? (
                                <CheckRoundedIcon fontSize="small" />
                            ) : (
                                idx + 1
                            )}
                        </div>
                        <p
                            className={`${classes.stepName} ${
                                currentStep == idx + 1
                                    ? classes.activeStepName
                                    : completedSteps.includes(idx + 1)
                                    ? classes.completedStepName
                                    : classes.inactiveStepName
                            }`}
                        >
                            {step}
                        </p>
                    </div>
                    {steps.length - 1 !== idx && <div className={classes.stepDivider} />}
                </div>
            );
        });
    };

    return <div className={classes.root}>{displaySteps()}</div>;
};
