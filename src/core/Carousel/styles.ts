import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Breakpoint, ResponsiveBreakPoints } from "./types";

type CustomThemeProps = {
  gap?: number;
  itemsToShow?: number;
  breakpoints?: ResponsiveBreakPoints;
};

export const useCarouselStyles = makeStyles<Theme, CustomThemeProps>((theme) => {
  return {
    wrapper: (props) => ({
      height: "100%",
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      ...getWrapperStylesResponsive(props, theme),
    }),
    box: (props) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
      position: "relative",
      flexShrink: 0,
      fontSize: theme.typography.fontSize * 2,
      cursor: "pointer",
      height: "100%",
      ...getBoxStylesResponsive(props, theme),
    }),
  };
});

const sortedBreakpoints: Breakpoint[] = ["sm", "md", "lg", "xl"];
const getWrapperStylesResponsive = (props: CustomThemeProps, theme: Theme) => {
  const styles: Record<string, any> = {
    gap: props?.gap,
  };

  sortedBreakpoints.forEach((key) => {
    if (props?.breakpoints?.[key]) {
      if (key === "sm") {
        styles["gap"] = props?.breakpoints?.[key]?.gap;
      } else {
        styles[theme.breakpoints.up(key)] = {
          gap: props?.breakpoints?.[key]?.gap,
        };
      }
    }
  });

  return styles;
};

const getBoxStylesResponsive = (props: CustomThemeProps, theme: Theme) => {
  const styles: Record<string, any> = {};

  if (props.itemsToShow) {
    styles["width"] = getPercentageWidth(props?.itemsToShow);
  }

  sortedBreakpoints.forEach((key) => {
    if (props?.breakpoints?.[key] && props?.breakpoints?.[key]?.itemsToShow) {
      const width = getPercentageWidth(props?.breakpoints?.[key]?.itemsToShow);
      if (key === "sm") {
        styles["width"] = width;
      } else {
        styles[theme.breakpoints.up(key)] = {
          width,
        };
      }
    }
  });

  console.log(styles);

  return styles;
};

const getPercentageWidth = (itemToShow: number) => {
  return `calc((100% / ${itemToShow}))`;
};
