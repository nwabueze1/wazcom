import { useState } from "react";
import { Steps, Wrapper } from "../../core";
import { useStepsStyles } from "./styles";

const StepData = [
  { label: "Step 1", title: "1" },
  { label: "Step 2", title: "2" },
  { label: "Step 3", title: "3" },
];

export const StepsView = () => {
  const classes = useStepsStyles();
  const [current] = useState({ one: 0, two: 1, three: 2 });

  return (
    <div className={classes.root}>
      <Wrapper
        title="Steps"
        description="A step indicator is a visual representation of a user’s progress through a set of steps, guiding toward the completion of a specified process."
        classNames={{ innerContainer: classes.innerContainer }}
      >
        <Steps data={StepData} current={current.one} />
        <Steps data={StepData} current={current.two} />
        <Steps data={StepData} current={current.three} />
        <Steps data={StepData} current={current.three} isCompleted={true} />
      </Wrapper>
    </div>
  );
};
