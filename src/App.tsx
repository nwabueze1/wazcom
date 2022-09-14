import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import { articleData, site } from "data";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Halo } from "templates";
import { Asta } from "templates/restaurant/Asta/Asta";
import { Buzz } from "templates/restaurant/Buzz/Buzz";
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
            {/* <Route exact path="/politico">
              <Halo article={articleData} site={site} domain={""} />
            </Route> */}
            <Route exact path="/rest">
              <Buzz />
            </Route>
            <Route exact path="/asta">
              <Asta />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
