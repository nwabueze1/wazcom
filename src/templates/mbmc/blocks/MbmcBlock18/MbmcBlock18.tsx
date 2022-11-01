import React, { useState } from "react";
import { steps } from "./data";
import { useMbmcBlock18Styles } from "./styles";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const MbmcBlock18: React.FC = () => {
    const classes = useMbmcBlock18Styles();
    const [activeStep, setActiveStep] = useState<number[]>([1, 2]);
    const currentStep = activeStep.slice(-1)[0];
    const completedSteps = activeStep.slice(0, activeStep.length - 1);

    const displaySteps = () => {
        return steps.map((step, idx) => {
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

export default MbmcBlock18;
