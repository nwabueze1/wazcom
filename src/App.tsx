import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Browser } from "view/Browser";
import theme from "./theme";
import Halo from "./templates/blog/articles/Halo/Halo";
import {articleData, site} from "../src/templates/dummy";
import {Gello} from "../src/templates/blog/articles/Gello/Gello"
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
            <Route exact path="/bloomy">
              <Halo article={articleData}  site={site} domain={""} />
            </Route>
            <Route exact path="/gello">
              <Gello article={articleData}  site={site} domain={""} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;