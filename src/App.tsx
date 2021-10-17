import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import jssPreset from '@mui/styles/jssPreset';
import StylesProvider from '@mui/styles/StylesProvider';
import { create } from "jss";
import jssPluginExtend from "jss-plugin-extend";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {


  return (
    <CssBaseline>
      <StylesProvider jss={jss}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Router>
              <Switch>
                <Route exact path="/"></Route>
              </Switch>
            </Router>
          </ThemeProvider>
        </StyledEngineProvider>
      </StylesProvider>
    </CssBaseline>
  );
};
export default App;
