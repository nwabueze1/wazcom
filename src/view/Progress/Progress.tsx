import { Progress, Wrapper } from "../../core";
import { useProgressStyles } from "./styles";

export const ProgressView = () => {
  const classes = useProgressStyles();

  return (
    <div className={classes.root}>
      <Wrapper
        title="Progress"
        description="The progress component is used to visualise progress made in completing a task"
      >
        <div className={classes.progressWrapper}>
          <Progress value={35} label="LABEL" showProgress={true} />
        </div>
      </Wrapper>
    </div>
  );
};
