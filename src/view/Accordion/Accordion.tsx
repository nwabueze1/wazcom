import { Accordion, ViewHeader, Wrapper } from "../../core";
import { AccordionData } from "./helper";
import { AccordionStyles } from "./styles";
import { useAccordionData } from "./data";
import { Paper } from "../../core/Paper";
import { ComponentProps } from "../../core/ComponentProps";

export const AccordionView = () => {
  const classes = AccordionStyles();
  const { data } = useAccordionData();

  const renderConfigurations = () => (
    <>
      <Paper>
        <div className={classes.container}>
          {AccordionData.map((item) => (
            <Accordion title={item.title} key={item.title}>
              {item.content}
            </Accordion>
          ))}
        </div>
      </Paper>
      <ComponentProps body={data} />
    </>
  );

  const renderStates = () => (
    <Paper>
      <div className={classes.accordionStatesContainer}>
        {Array(2)
          .fill(AccordionData[0])
          .map((item, index) => (
            <Accordion title={item?.title} key={index} isExpanded={index == 1}>
              {item?.content}
            </Accordion>
          ))}
      </div>
    </Paper>
  );

  return (
    <div className={classes.root}>
      <Wrapper
        title="Accordion"
        description="The accordion component delivers large amounts of content in a small space through progressive disclosure. The header title give the user a high level overview of the content allowing the user to decide which sections to read."
      >
        <ViewHeader configChildren={renderConfigurations()} statesChildren={renderStates()} />
      </Wrapper>
    </div>
  );
};
