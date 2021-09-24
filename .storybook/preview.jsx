import { theme as unWrappedTheme } from "../src/theme";
import { ThemeProvider } from "@material-ui/core";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import { createTheme } from "@material-ui/core/styles";

const providerFn = ({ theme, children }) => {
  const wrappedTheme = createTheme(theme);
  return <ThemeProvider theme={wrappedTheme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [unWrappedTheme], { providerFn }));
