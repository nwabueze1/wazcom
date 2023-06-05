import { FC } from "react";
import { useCartStepsStyles } from "./styles";
import { MdCheckCircleOutline as CheckRoundedIcon} from "react-icons/md";
import { CartStepsProps } from "./types";

export const CartSteps: FC<CartStepsProps> = ({ steps }) => {
  const classes = useCartStepsStyles();
  const currentStep = 2;

  const displaySteps = () => {
    return steps?.map((step, idx) => {
      return (
        <div className={`${classes.step}`} key={idx}>
          <div className={classes.stepContainer}>
            <div
              className={`${classes.stepNum} ${
                currentStep == idx + 1
                  ? classes.activeStepNum
                  : currentStep > idx + 1
                  ? classes.completedStepNum
                  : classes.inactiveStepNum
              }`}
            >
              {currentStep > idx + 1 ? <CheckRoundedIcon fontSize="small" /> : idx + 1}
            </div>
            <p
              className={`${classes.stepName} ${
                currentStep == idx + 1
                  ? classes.activeStepName
                  : currentStep > idx + 1
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
