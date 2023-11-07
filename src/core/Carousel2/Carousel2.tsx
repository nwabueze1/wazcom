import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import { MdKeyboardArrowLeft as KeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight as KeyboardArrowRight } from "react-icons/md";
import SwipeableViews from "react-swipeable-views";
import { FC } from "react";
import { Carousel2Props } from "./types";
import { useCarouselStyles } from "./styles";

const AutoPlaySwipeableViews = SwipeableViews;

export const Carousel2: FC<Carousel2Props> = ({ className, items, classNames }) => {
  const theme = useTheme();
  const classes = useCarouselStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = items.length;

  const handleNext = React.useCallback(() => {
    setActiveStep(activeStep + 1);
  }, [activeStep]);

  const handleBack = React.useCallback(() => {
    setActiveStep(activeStep - 1);
  }, [activeStep]);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={className}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map(({ component }, index) => (
          <div key={index}>{component}</div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.stepper}
        classes={{
          dot: classes.dot,
          dotActive: classes.active,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className={(classNames?.button as string) ?? ""}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft
                fontSize={"large"}
                className={(classNames?.arrow as string) ?? ""}
              />
            ) : (
              <KeyboardArrowRight
                fontSize={"large"}
                className={(classNames?.arrow as string) ?? ""}
              />
            )}
          </Button>
        }
        backButton={
          <Button
            className={(classNames?.button as string) ?? ""}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight
                className={(classNames?.arrow as string) ?? ""}
                fontSize={"large"}
              />
            ) : (
              <KeyboardArrowLeft
                className={(classNames?.arrow as string) ?? ""}
                fontSize={"large"}
              />
            )}
          </Button>
        }
      />
    </Box>
  );
};
