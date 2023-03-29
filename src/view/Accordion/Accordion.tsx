import { CssBaseline } from "@mui/material";
import { Accordion, Wrapper } from "../../core";
import { AccordionStyles } from "./styles";

const AccordionData = [
  {
    title: "An Accordion",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt.",
  },
];

export const AccordionView = () => {
  const classes = AccordionStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
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
