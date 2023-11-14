import { Progress, ViewHeader, Wrapper } from "../../core";
import { useProgressStyles } from "./styles";
import { useProgressData } from "./data";
import { Paper } from "../../core/Paper";
import { ComponentProps } from "../../core/ComponentProps";

export const ProgressView = () => {
  const classes = useProgressStyles();
  const { data } = useProgressData();

  const renderConfigurations = () => (
    <>
      <Paper>
        <div className={classes.progressWrapper}>
          <Progress value={35} label="LABEL" showProgress={true} />
        </div>
      </Paper>
      <ComponentProps body={data} />
    </>
  );

  return (
    <div className={classes.root}>
      <Wrapper
        title="Progress"
        description="The progress component is used to visualise progress made in completing a task"
      >
        <ViewHeader
          configChildren={renderConfigurations()}
          statesChildren={null}
          hasState={false}
        />
      </Wrapper>
    </div>
  );
};
