import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Gello } from "Templates/Blog/Articles/Gello/Gello";
import { Noval } from "Templates/Blog/Articles/Noval/Noval";
import { articleData, site } from "utilities/data.ts 11-27-27-281";
import { Browser } from "view/Browser";
import { useHistory } from "react-router";
import theme from "./theme";
declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
interface Props {
  className?: string;
}

const App: React.FC<Props> = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("domain/route");
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/noval">
              <Noval
                article={articleData}
                domain="noval"
                site={site}
                handleClick={() => handleClick}
              />
            </Route>
            <Route exact path="/gello">
              <Gello article={articleData} domain="gello" site={site} />
            </Route>
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
