import { theme as unWrappedTheme } from "../src/theme";
import { ThemeProvider } from "@mui/material";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import { createTheme } from "@mui/material/styles";

const providerFn = ({ theme, children }) => {
  const wrappedTheme = createTheme(theme);
  return <ThemeProvider theme={wrappedTheme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [unWrappedTheme], { providerFn }));
