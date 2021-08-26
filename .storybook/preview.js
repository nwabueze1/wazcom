import { theme } from "../src/theme";
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from "jss";
import jssPluginExtend from "jss-plugin-extend";
import { addDecorator } from "@storybook/react";

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  <CssBaseline>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StylesProvider>
  </CssBaseline>
));

// export const decorators = [
//   (Story, context) => {
//     return (
//       <CssBaseline>
//         <StylesProvider jss={jss}>
//           <ThemeProvider theme={theme}>
//             <Story {...context} />
//           </ThemeProvider>
//         </StylesProvider>
//       </CssBaseline>
//     );
//   },
// ];
