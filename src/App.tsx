import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Asta } from "templates/restaurant/Asta/Asta";
import { Buzz } from "templates/restaurant/Buzz/Buzz";
import { Browser } from "view/Browser";
import { Pearl } from "templates/blog/articles/Pearl"
import { Bloomy } from "templates/blog/articles/Bloomy"
import theme from "./theme";
import { articleData, site } from "dummy"
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
            <Route exact path="/pearl">
              <Bloomy article={articleData} domain={""} site={site} />
            </Route>
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
