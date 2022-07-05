import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import { articleData, site } from "data";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Gello, Noval } from "templates";
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
          <Route exact path="/noval">
            <Noval article={articleData} domain="noval" site={site} />
          </Route>
          <Route exact path="/gello">
            <Gello article={articleData} domain="gello" site={site} />
          </Route>
          <Switch>
            <Route exact path="/">
              <Browser />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
