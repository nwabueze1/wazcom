import { Accordion, Wrapper } from "../../core";
import { AccordionData } from "./helper";
import { AccordionStyles } from "./styles";

export const AccordionView = () => {
  const classes = AccordionStyles();

  return (
    <div className={classes.root}>
      <Wrapper
        title="Accordion"
        description="The accordion component delivers large amounts of content in a small space through progressive disclosure. The header title give the user a high level overview of the content allowing the user to decide which sections to read."
      >
        {AccordionData.map((item) => (
          <Accordion title={item.title} key={item.title}>
            {item.content}
          </Accordion>
        ))}
      </Wrapper>
    </div>
  );
};
