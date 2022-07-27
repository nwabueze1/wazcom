import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import { articleData, site } from "data";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Noval } from "templates";
import { Browser } from "view/Browser";
import theme from "./theme";
declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Browser />
            </Route>
            <Route exact path="/politico">
              <Noval article={articleData} site={site} domain={""} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
